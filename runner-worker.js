/* C Practice Page - isolated PicoC runner */
let loaded = false;

function loadRuntime() {
  if (loaded) return;
  importScripts("https://unpkg.com/picoc-js@1.0.12/dist/bundle.umd.js");
  if (!self.picocjs || typeof self.picocjs.runC !== "function") {
    throw new Error("PicoC runtime could not be loaded.");
  }
  loaded = true;
}

self.onmessage = (event) => {
  const { id, code } = event.data || {};
  if (!id || typeof code !== "string") return;

  let output = "";
  let quietTimer = null;
  let settled = false;
  let gotOutput = false;

  const finish = () => {
    if (settled) return;
    settled = true;
    if (quietTimer) clearTimeout(quietTimer);
    self.postMessage({ id, ok: true, output });
  };

  try {
    loadRuntime();
    self.picocjs.runC(code, (chunk) => {
      gotOutput = true;
      output += String(chunk ?? "");
      if (quietTimer) clearTimeout(quietTimer);
      quietTimer = setTimeout(finish, 220);
    });
    // First load on a tablet can take longer. If a program intentionally
    // prints nothing, resolve after a generous quiet period instead.
    quietTimer = setTimeout(() => {
      if (!gotOutput) finish();
    }, 3500);
  } catch (error) {
    self.postMessage({
      id,
      ok: false,
      error: error && error.message ? error.message : String(error)
    });
  }
};
