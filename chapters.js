window.C_STUDY_CHAPTERS = [
  {
    "id":1,"title":"프로그래밍의 개념","pages":"18–49","summary":"프로그래밍이 무엇인지, 컴퓨터가 명령을 이해하는 방식, 프로그래밍 언어의 분류, C언어의 특징과 알고리즘의 기본 개념을 익힌다.",
    "points":["프로그램은 문제 해결 절차를 컴퓨터가 수행할 수 있는 명령으로 표현한 것이다.","기계어·어셈블리어·고급 언어의 차이를 구분한다.","알고리즘은 입력, 처리, 출력의 순서를 명확히 표현해야 한다."],
    "example":{"title":"두 수의 합을 출력하는 가장 작은 C 프로그램","code":"#include <stdio.h>\n\nint main(void) {\n    int a = 3;\n    int b = 5;\n    printf(\"%d\\n\", a + b);\n    return 0;\n}\n"},
    "exercises":[
      {"id":"c1e1","title":"합 계산 함수","prompt":"두 정수 a, b를 받아 합을 반환하는 add 함수를 완성하세요.","starter":"int add(int a, int b) {\n    /* 여기에 작성 */\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){\n printf(\"%d\\n\", add(3,5));\n printf(\"%d\\n\", add(-7,2));\n printf(\"%d\\n\", add(100,250));\n return 0;\n}","expected":["8","-5","350"],"hint":"반환값은 a와 b를 더한 식이면 됩니다."},
      {"id":"c1e2","title":"큰 수 고르기","prompt":"두 정수 중 더 큰 값을 반환하는 max2 함수를 완성하세요.","starter":"int max2(int a, int b) {\n    /* 여기에 작성 */\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){\n printf(\"%d\\n\", max2(9,4));\n printf(\"%d\\n\", max2(-3,-8));\n printf(\"%d\\n\", max2(7,7));\n return 0;\n}","expected":["9","-3","7"],"hint":"조건 연산자 또는 if문을 사용할 수 있습니다."}
    ]
  },
  {
    "id":2,"title":"프로그램 작성 과정","pages":"50–87","summary":"문제 분석, 설계, 구현, 컴파일, 링크, 실행, 디버깅으로 이어지는 프로그램 개발 과정을 이해하고 오류를 고치는 흐름을 익힌다.",
    "points":["소스 코드는 컴파일과 링크 과정을 거쳐 실행 가능한 프로그램이 된다.","문법 오류와 논리 오류는 원인과 고치는 방식이 다르다.","작은 단위로 실행하고 결과를 확인하는 습관이 디버깅에 유리하다."],
    "example":{"title":"컴파일 가능한 기본 골격","code":"#include <stdio.h>\n\nint main(void) {\n    printf(\"Build -> Run -> Check\\n\");\n    return 0;\n}\n"},
    "exercises":[
      {"id":"c2e1","title":"반환값 고치기","prompt":"입력 n의 두 배를 반환하도록 twice 함수를 완성하세요.","starter":"int twice(int n) {\n    /* 논리 오류를 고치세요 */\n    return n;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%d\\n\",twice(4)); printf(\"%d\\n\",twice(-6)); printf(\"%d\\n\",twice(0)); return 0;}","expected":["8","-12","0"],"hint":"n을 두 번 더하거나 2를 곱하세요."},
      {"id":"c2e2","title":"세 수 평균","prompt":"세 정수의 평균을 실수로 반환하는 avg3 함수를 완성하세요.","starter":"double avg3(int a, int b, int c) {\n    /* 정수 나눗셈에 주의 */\n    return 0.0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%.2f\\n\",avg3(10,20,30)); printf(\"%.2f\\n\",avg3(1,2,2)); return 0;}","expected":["20.00","1.67"],"hint":"3이 아니라 3.0으로 나누면 실수 나눗셈이 됩니다."}
    ]
  },
  {
    "id":3,"title":"C 프로그램 구성요소","pages":"88–123","summary":"전처리 지시자, main 함수, 문장, 주석, printf/scanf 등 C 프로그램을 이루는 기본 요소와 소스 코드의 구조를 학습한다.",
    "points":["#include는 필요한 선언을 소스에 포함시키는 전처리 지시자다.","함수는 문장들의 묶음이며 main은 프로그램의 시작점이다.","서식 지정자를 이용해 다양한 자료를 출력할 수 있다."],
    "example":{"title":"변수와 printf 사용","code":"#include <stdio.h>\n\nint main(void) {\n    int age = 20;\n    double score = 92.5;\n    printf(\"age=%d, score=%.1f\\n\", age, score);\n    return 0;\n}\n"},
    "exercises":[
      {"id":"c3e1","title":"제곱 출력용 함수","prompt":"정수 n의 제곱을 반환하는 square 함수를 완성하세요.","starter":"int square(int n) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%d\\n\",square(5)); printf(\"%d\\n\",square(-4)); printf(\"%d\\n\",square(12)); return 0;}","expected":["25","16","144"],"hint":"n * n을 반환하세요."},
      {"id":"c3e2","title":"절댓값 함수","prompt":"정수 n의 절댓값을 반환하는 absolute 함수를 완성하세요.","starter":"int absolute(int n) {\n    /* 작성 */\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%d\\n\",absolute(-9)); printf(\"%d\\n\",absolute(0)); printf(\"%d\\n\",absolute(14)); return 0;}","expected":["9","0","14"],"hint":"n이 음수일 때만 부호를 바꾸면 됩니다."}
    ]
  },
  {
    "id":4,"title":"변수와 자료형","pages":"124–167","summary":"정수형, 실수형, 문자형과 변수 선언·초기화, 상수, 자료형의 크기와 표현 범위를 다룬다.",
    "points":["자료형은 저장 가능한 값의 종류와 범위를 결정한다.","정수형과 부동소수점형은 표현 방식이 다르다.","형 변환에 따라 계산 결과가 달라질 수 있다."],
    "example":{"title":"정수와 실수 계산","code":"#include <stdio.h>\n\nint main(void) {\n    int count = 7;\n    double total = 20.0;\n    printf(\"%.2f\\n\", total / count);\n    return 0;\n}\n"},
    "exercises":[
      {"id":"c4e1","title":"섭씨를 화씨로","prompt":"섭씨 온도 c를 화씨 온도로 바꾸어 반환하세요. 공식: c * 9 / 5 + 32","starter":"double to_fahrenheit(double c) {\n    return 0.0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%.1f\\n\",to_fahrenheit(0)); printf(\"%.1f\\n\",to_fahrenheit(100)); printf(\"%.1f\\n\",to_fahrenheit(-40)); return 0;}","expected":["32.0","212.0","-40.0"],"hint":"실수 계산이 되도록 9.0/5.0을 사용해도 됩니다."},
      {"id":"c4e2","title":"문자 코드 차이","prompt":"두 문자 a, b의 문자 코드 차이 a-b를 반환하세요.","starter":"int char_diff(char a, char b) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%d\\n\",char_diff('d','a')); printf(\"%d\\n\",char_diff('A','A')); return 0;}","expected":["3","0"],"hint":"char도 정수처럼 산술 연산에 참여할 수 있습니다."}
    ]
  },
  {
    "id":5,"title":"수식과 연산자","pages":"168–219","summary":"산술, 대입, 증감, 관계, 논리, 조건, 비트 연산자의 의미와 우선순위를 익힌다.",
    "points":["연산자 우선순위가 복잡하면 괄호로 의도를 명확히 하는 것이 좋다.","관계·논리 연산의 결과는 참 또는 거짓으로 사용된다.","정수 나눗셈과 나머지 연산자의 차이를 구분한다."],
    "example":{"title":"몫과 나머지","code":"#include <stdio.h>\n\nint main(void) {\n    int n = 17;\n    printf(\"q=%d r=%d\\n\", n / 5, n % 5);\n    return 0;\n}\n"},
    "exercises":[
      {"id":"c5e1","title":"일의 자리","prompt":"0 이상의 정수 n의 일의 자리 숫자를 반환하세요.","starter":"int ones(int n) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%d\\n\",ones(1234)); printf(\"%d\\n\",ones(90)); printf(\"%d\\n\",ones(7)); return 0;}","expected":["4","0","7"],"hint":"10으로 나눈 나머지를 이용하세요."},
      {"id":"c5e2","title":"짝수 판별","prompt":"n이 짝수면 1, 홀수면 0을 반환하세요.","starter":"int is_even(int n) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%d\\n\",is_even(8)); printf(\"%d\\n\",is_even(13)); printf(\"%d\\n\",is_even(-4)); return 0;}","expected":["1","0","1"],"hint":"n % 2의 결과를 이용하세요."}
    ]
  },
  {
    "id":6,"title":"조건문","pages":"220–267","summary":"if, if-else, 중첩 조건문, switch를 이용해 조건에 따라 다른 문장을 실행하는 방법을 익힌다.",
    "points":["if의 조건식이 참일 때 해당 블록이 실행된다.","여러 범위를 나눌 때 else if를 사용할 수 있다.","switch는 하나의 값에 따른 여러 분기를 간결하게 표현한다."],
    "example":{"title":"점수 등급 판정","code":"#include <stdio.h>\n\nint main(void) {\n    int score = 85;\n    if (score >= 90) printf(\"A\\n\");\n    else if (score >= 80) printf(\"B\\n\");\n    else printf(\"C or below\\n\");\n    return 0;\n}\n"},
    "exercises":[
      {"id":"c6e1","title":"세 수의 최댓값","prompt":"세 정수 중 가장 큰 값을 반환하세요.","starter":"int max3(int a, int b, int c) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%d\\n\",max3(1,9,3)); printf(\"%d\\n\",max3(-1,-5,-2)); printf(\"%d\\n\",max3(7,7,2)); return 0;}","expected":["9","-1","7"],"hint":"현재 최댓값을 변수에 저장하고 비교해도 됩니다."},
      {"id":"c6e2","title":"윤년 판별","prompt":"연도 y가 윤년이면 1, 아니면 0을 반환하세요. 4의 배수이면서 100의 배수가 아니거나, 400의 배수이면 윤년입니다.","starter":"int is_leap(int y) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%d\\n\",is_leap(2024)); printf(\"%d\\n\",is_leap(2100)); printf(\"%d\\n\",is_leap(2000)); return 0;}","expected":["1","0","1"],"hint":"&&와 ||를 함께 사용할 수 있습니다."}
    ]
  },
  {
    "id":7,"title":"반복문","pages":"268–313","summary":"while, do-while, for 반복문과 break, continue를 이용해 반복 작업을 제어한다.",
    "points":["반복문은 초기값, 조건, 변화 과정을 함께 점검해야 한다.","for는 반복 횟수가 분명한 경우에 적합하다.","무한 반복과 경계값 오류에 주의한다."],
    "example":{"title":"1부터 10까지 합","code":"#include <stdio.h>\n\nint main(void) {\n    int sum = 0;\n    int i;\n    for (i = 1; i <= 10; i++) sum += i;\n    printf(\"%d\\n\", sum);\n    return 0;\n}\n"},
    "exercises":[
      {"id":"c7e1","title":"1부터 n까지 합","prompt":"양의 정수 n에 대해 1부터 n까지의 합을 반복문으로 계산하세요.","starter":"int sum_to(int n) {\n    int sum = 0;\n    /* 반복문 작성 */\n    return sum;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%d\\n\",sum_to(1)); printf(\"%d\\n\",sum_to(10)); printf(\"%d\\n\",sum_to(100)); return 0;}","expected":["1","55","5050"],"hint":"i를 1부터 n까지 증가시키며 sum에 누적하세요."},
      {"id":"c7e2","title":"자릿수 개수","prompt":"0 이상의 정수 n의 10진수 자릿수 개수를 반환하세요. 0은 한 자리입니다.","starter":"int digits(int n) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%d\\n\",digits(0)); printf(\"%d\\n\",digits(9)); printf(\"%d\\n\",digits(12345)); return 0;}","expected":["1","1","5"],"hint":"n을 10으로 계속 나누면서 횟수를 세세요."}
    ]
  },
  {
    "id":8,"title":"함수","pages":"314–365","summary":"함수 정의와 호출, 매개변수와 반환값, 함수 원형, 지역 변수, 함수 분해의 장점을 학습한다.",
    "points":["함수는 하나의 명확한 역할을 갖도록 작성하는 것이 좋다.","매개변수는 호출 시 전달되는 값을 받는다.","반환형과 실제 return 값의 자료형을 일치시키는 것이 중요하다."],
    "example":{"title":"함수로 계산 분리하기","code":"#include <stdio.h>\n\nint cube(int n) {\n    return n * n * n;\n}\n\nint main(void) {\n    printf(\"%d\\n\", cube(4));\n    return 0;\n}\n"},
    "exercises":[
      {"id":"c8e1","title":"팩토리얼","prompt":"0 이상의 정수 n의 팩토리얼을 반환하세요. 0!은 1입니다.","starter":"long factorial(int n) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%ld\\n\",factorial(0)); printf(\"%ld\\n\",factorial(5)); printf(\"%ld\\n\",factorial(8)); return 0;}","expected":["1","120","40320"],"hint":"결과를 1로 시작해 2부터 n까지 곱하세요."},
      {"id":"c8e2","title":"최대공약수","prompt":"양의 정수 a, b의 최대공약수를 유클리드 알고리즘으로 반환하세요.","starter":"int gcd(int a, int b) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%d\\n\",gcd(48,18)); printf(\"%d\\n\",gcd(7,13)); printf(\"%d\\n\",gcd(100,40)); return 0;}","expected":["6","1","20"],"hint":"b가 0이 될 때까지 a%b를 이용해 값을 갱신하세요."}
    ]
  },
  {
    "id":9,"title":"변수 범위와 순환 호출","pages":"366–401","summary":"지역·전역 변수의 범위와 수명, 저장 유형, 재귀 함수의 동작 원리를 익힌다.",
    "points":["변수의 범위는 이름을 사용할 수 있는 영역을 뜻한다.","지역 변수는 함수 호출마다 별도의 공간을 갖는다.","재귀는 종료 조건이 반드시 필요하다."],
    "example":{"title":"재귀로 합 구하기","code":"#include <stdio.h>\n\nint sum_to(int n) {\n    if (n <= 0) return 0;\n    return n + sum_to(n - 1);\n}\n\nint main(void) {\n    printf(\"%d\\n\", sum_to(10));\n    return 0;\n}\n"},
    "exercises":[
      {"id":"c9e1","title":"재귀 거듭제곱","prompt":"재귀를 이용해 base^exp를 반환하세요. exp는 0 이상의 정수입니다.","starter":"long power_rec(int base, int exp) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%ld\\n\",power_rec(2,0)); printf(\"%ld\\n\",power_rec(2,10)); printf(\"%ld\\n\",power_rec(3,4)); return 0;}","expected":["1","1024","81"],"hint":"exp가 0일 때 1을 반환하는 종료 조건을 만드세요."},
      {"id":"c9e2","title":"재귀 자릿수 합","prompt":"0 이상의 정수 n의 각 자리 숫자 합을 재귀적으로 반환하세요.","starter":"int digit_sum(int n) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%d\\n\",digit_sum(0)); printf(\"%d\\n\",digit_sum(1234)); printf(\"%d\\n\",digit_sum(999)); return 0;}","expected":["0","10","27"],"hint":"마지막 자리는 n%10, 나머지는 n/10입니다."}
    ]
  },
  {
    "id":10,"title":"배열","pages":"402–451","summary":"1차원·다차원 배열의 선언과 초기화, 배열 순회, 배열을 함수에 전달하는 방법을 학습한다.",
    "points":["배열 인덱스는 0부터 시작한다.","배열의 경계를 벗어나 접근하면 정의되지 않은 동작이 발생할 수 있다.","배열 처리에는 반복문이 자주 함께 사용된다."],
    "example":{"title":"배열 원소 합","code":"#include <stdio.h>\n\nint main(void) {\n    int a[] = {3, 1, 4, 1, 5};\n    int sum = 0;\n    int i;\n    for (i = 0; i < 5; i++) sum += a[i];\n    printf(\"%d\\n\", sum);\n    return 0;\n}\n"},
    "exercises":[
      {"id":"c10e1","title":"배열 최댓값","prompt":"길이 n인 정수 배열에서 최댓값을 반환하세요. n은 1 이상입니다.","starter":"int array_max(const int a[], int n) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ int a[]={3,9,1,7}; int b[]={-5,-2,-9}; printf(\"%d\\n\",array_max(a,4)); printf(\"%d\\n\",array_max(b,3)); return 0;}","expected":["9","-2"],"hint":"첫 원소를 현재 최댓값으로 두고 나머지를 비교하세요."},
      {"id":"c10e2","title":"짝수 개수","prompt":"배열 안의 짝수 원소 개수를 반환하세요.","starter":"int count_even(const int a[], int n) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ int a[]={1,2,4,7,8}; int b[]={1,3,5}; printf(\"%d\\n\",count_even(a,5)); printf(\"%d\\n\",count_even(b,3)); return 0;}","expected":["3","0"],"hint":"각 원소에 대해 %2를 검사하세요."}
    ]
  },
  {
    "id":11,"title":"포인터","pages":"452–495","summary":"주소와 포인터, 역참조 연산, 포인터와 배열의 관계, 함수 인자로 주소를 전달하는 방법을 학습한다.",
    "points":["&는 변수의 주소를 얻고 *는 포인터가 가리키는 값을 접근한다.","포인터의 자료형은 가리키는 대상의 자료형과 맞아야 한다.","주소 전달을 이용하면 함수가 호출자 변수의 값을 바꿀 수 있다."],
    "example":{"title":"포인터로 두 값 교환","code":"#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int t = *a;\n    *a = *b;\n    *b = t;\n}\n\nint main(void) {\n    int x = 3, y = 7;\n    swap(&x, &y);\n    printf(\"%d %d\\n\", x, y);\n    return 0;\n}\n"},
    "exercises":[
      {"id":"c11e1","title":"포인터로 값 두 배","prompt":"포인터 p가 가리키는 정수 값을 두 배로 바꾸세요.","starter":"void double_value(int *p) {\n    /* 작성 */\n}\n","harness":"#include <stdio.h>\nint main(void){ int x=7,y=-3; double_value(&x); double_value(&y); printf(\"%d\\n\",x); printf(\"%d\\n\",y); return 0;}","expected":["14","-6"],"hint":"*p를 왼쪽 값으로 사용할 수 있습니다."},
      {"id":"c11e2","title":"두 값 교환","prompt":"두 포인터가 가리키는 값을 서로 바꾸는 swap2 함수를 완성하세요.","starter":"void swap2(int *a, int *b) {\n    /* 작성 */\n}\n","harness":"#include <stdio.h>\nint main(void){ int a=10,b=20; swap2(&a,&b); printf(\"%d %d\\n\",a,b); return 0;}","expected":["20 10"],"hint":"임시 변수 하나를 사용하세요."}
    ]
  },
  {
    "id":12,"title":"문자와 문자열","pages":"496–543","summary":"문자 배열로 문자열을 표현하는 방식과 문자열 입출력, 표준 문자열 함수, 문자 처리 방법을 익힌다.",
    "points":["C 문자열은 마지막에 널 문자 '\\0'을 가진다.","문자열 길이 계산은 널 문자를 만날 때까지 진행한다.","문자열 비교는 포인터 주소가 아니라 각 문자를 비교해야 한다."],
    "example":{"title":"문자열 길이 직접 세기","code":"#include <stdio.h>\n\nint my_strlen(const char *s) {\n    int n = 0;\n    while (s[n] != '\\0') n++;\n    return n;\n}\n\nint main(void) {\n    printf(\"%d\\n\", my_strlen(\"hello\"));\n    return 0;\n}\n"},
    "exercises":[
      {"id":"c12e1","title":"문자열 길이","prompt":"strlen을 쓰지 않고 문자열 길이를 반환하세요.","starter":"int my_len(const char *s) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%d\\n\",my_len(\"C\")); printf(\"%d\\n\",my_len(\"hello\")); printf(\"%d\\n\",my_len(\"\")); return 0;}","expected":["1","5","0"],"hint":"널 문자 '\\0'을 만날 때까지 세세요."},
      {"id":"c12e2","title":"모음 개수","prompt":"영문 소문자 문자열에서 a,e,i,o,u의 개수를 반환하세요.","starter":"int count_vowels(const char *s) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%d\\n\",count_vowels(\"apple\")); printf(\"%d\\n\",count_vowels(\"rhythm\")); printf(\"%d\\n\",count_vowels(\"education\")); return 0;}","expected":["2","0","5"],"hint":"한 글자씩 검사하며 다섯 문자 중 하나인지 확인하세요."}
    ]
  },
  {
    "id":13,"title":"구조체","pages":"544–591","summary":"서로 다른 자료형을 하나로 묶는 구조체, 멤버 접근, 구조체 배열과 포인터를 학습한다.",
    "points":["struct는 관련 데이터를 하나의 새로운 자료형처럼 묶는다.","구조체 변수의 멤버는 . 연산자로 접근한다.","구조체 포인터의 멤버는 -> 연산자로 접근할 수 있다."],
    "example":{"title":"구조체로 좌표 표현","code":"#include <stdio.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nint main(void) {\n    Point p = {3, 4};\n    printf(\"%d\\n\", p.x + p.y);\n    return 0;\n}\n"},
    "exercises":[
      {"id":"c13e1","title":"점의 맨해튼 거리","prompt":"Point 구조체 두 점 사이의 |x1-x2|+|y1-y2|를 반환하세요.","starter":"typedef struct { int x; int y; } Point;\n\nint manhattan(Point a, Point b) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ Point a={0,0},b={3,4},c={-1,2}; printf(\"%d\\n\",manhattan(a,b)); printf(\"%d\\n\",manhattan(b,c)); return 0;}","expected":["7","6"],"hint":"각 좌표 차이의 절댓값을 더하세요."},
      {"id":"c13e2","title":"학생 평균","prompt":"Student의 세 점수 평균을 반환하세요.","starter":"typedef struct { int a; int b; int c; } Student;\n\ndouble student_avg(Student s) {\n    return 0.0;\n}\n","harness":"#include <stdio.h>\nint main(void){ Student s={90,80,70}; Student t={1,2,2}; printf(\"%.2f\\n\",student_avg(s)); printf(\"%.2f\\n\",student_avg(t)); return 0;}","expected":["80.00","1.67"],"hint":"합을 3.0으로 나누세요."}
    ]
  },
  {
    "id":14,"title":"포인터 활용","pages":"592–629","summary":"포인터와 배열·문자열·구조체의 결합, 함수 포인터와 다양한 간접 접근 기법을 다룬다.",
    "points":["포인터 산술은 가리키는 자료형의 크기를 기준으로 이동한다.","배열 이름은 많은 식에서 첫 원소를 가리키는 포인터처럼 사용된다.","포인터를 이용하면 복합 자료구조를 효율적으로 다룰 수 있다."],
    "example":{"title":"포인터로 배열 합","code":"#include <stdio.h>\n\nint main(void) {\n    int a[] = {1,2,3,4};\n    int *p = a;\n    int sum = 0;\n    int i;\n    for (i=0;i<4;i++) sum += *(p+i);\n    printf(\"%d\\n\", sum);\n    return 0;\n}\n"},
    "exercises":[
      {"id":"c14e1","title":"포인터로 배열 합","prompt":"인덱스 표기 a[i] 대신 포인터 이동을 이용해 배열 합을 반환하세요.","starter":"int ptr_sum(const int *p, int n) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ int a[]={5,1,2}; int b[]={-2,7,-1,4}; printf(\"%d\\n\",ptr_sum(a,3)); printf(\"%d\\n\",ptr_sum(b,4)); return 0;}","expected":["8","8"],"hint":"*(p+i) 또는 *p 후 p++ 형태를 사용할 수 있습니다."},
      {"id":"c14e2","title":"문자열 끝 찾기","prompt":"문자열 포인터 s를 이동시켜 마지막 문자를 반환하세요.","starter":"char last_char(const char *s) {\n    return '\\0';\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%c\\n\",last_char(\"code\")); printf(\"%c\\n\",last_char(\"C\")); return 0;}","expected":["e","C"],"hint":"다음 문자가 '\\0'인지 확인하며 포인터를 이동하세요."}
    ]
  },
  {
    "id":15,"title":"스트림과 파일 입출력","pages":"630–669","summary":"스트림 개념, 파일 열기와 닫기, 텍스트·이진 입출력의 기본 흐름과 오류 확인을 학습한다.",
    "points":["파일은 열기, 읽기/쓰기, 닫기의 순서로 다룬다.","fopen의 반환값을 확인해 파일 열기 실패를 처리해야 한다.","브라우저 학습 페이지에서는 실제 로컬 파일 대신 메모리 기반 연습을 사용한다."],
    "example":{"title":"스트림 개념을 문자열로 연습","code":"#include <stdio.h>\n\nint main(void) {\n    const char *text = \"A\\nB\\nC\\n\";\n    int lines = 0;\n    int i;\n    for (i=0; text[i]; i++) if (text[i]=='\\n') lines++;\n    printf(\"%d\\n\", lines);\n    return 0;\n}\n"},
    "exercises":[
      {"id":"c15e1","title":"줄 수 세기","prompt":"문자열에 포함된 '\\n'의 개수를 반환하세요. 브라우저에서 파일 입력 흐름을 연습하기 위한 메모리 기반 문제입니다.","starter":"int count_lines(const char *text) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%d\\n\",count_lines(\"a\\nb\\nc\\n\")); printf(\"%d\\n\",count_lines(\"one line\")); return 0;}","expected":["3","0"],"hint":"문자열을 끝까지 순회하며 '\\n'을 세세요."},
      {"id":"c15e2","title":"숫자 문자 개수","prompt":"텍스트 스트림을 읽는 상황을 가정하고 '0'~'9' 문자의 개수를 반환하세요.","starter":"int count_digits_text(const char *text) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%d\\n\",count_digits_text(\"A12 B3\")); printf(\"%d\\n\",count_digits_text(\"no digits\")); return 0;}","expected":["3","0"],"hint":"각 문자가 '0' 이상 '9' 이하인지 검사하세요."}
    ]
  },
  {
    "id":16,"title":"전처리 및 다중 소스 파일","pages":"670–711","summary":"매크로, 조건부 컴파일, 헤더 파일과 여러 소스 파일로 프로그램을 나누는 원리를 학습한다.",
    "points":["#define으로 상수나 함수형 매크로를 정의할 수 있다.","헤더에는 공유할 선언을, 소스 파일에는 구현을 배치하는 것이 일반적이다.","매크로 인자와 전체 식에는 괄호를 충분히 사용하는 것이 안전하다."],
    "example":{"title":"함수형 매크로","code":"#include <stdio.h>\n#define SQUARE(x) ((x) * (x))\n\nint main(void) {\n    printf(\"%d\\n\", SQUARE(5));\n    return 0;\n}\n"},
    "exercises":[
      {"id":"c16e1","title":"MAX 매크로","prompt":"두 값 중 큰 값을 선택하는 MAX(a,b) 매크로를 정의하세요.","starter":"#define MAX(a,b) /* 여기에 작성 */\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%d\\n\",MAX(3,8)); printf(\"%d\\n\",MAX(-2,-5)); return 0;}","expected":["8","-2"],"hint":"조건 연산자를 사용하고 각 인자와 전체 식을 괄호로 감싸세요."},
      {"id":"c16e2","title":"SQUARE 매크로","prompt":"인자의 제곱을 계산하는 SQUARE(x) 매크로를 안전하게 정의하세요.","starter":"#define SQUARE(x) /* 여기에 작성 */\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%d\\n\",SQUARE(4)); printf(\"%d\\n\",SQUARE(2+3)); return 0;}","expected":["16","25"],"hint":"((x) * (x))처럼 인자와 전체 식에 괄호를 사용하세요."}
    ]
  },
  {
    "id":17,"title":"동적 메모리","pages":"712–742","summary":"malloc, calloc, realloc, free를 이용한 동적 메모리 할당과 메모리 누수·해제의 중요성을 학습한다.",
    "points":["동적 메모리는 실행 중 필요한 크기만큼 확보할 수 있다.","할당 함수가 NULL을 반환할 가능성을 확인해야 한다.","사용이 끝난 동적 메모리는 free로 해제해야 한다."],
    "example":{"title":"동적 배열 만들기","code":"#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int n = 5;\n    int *a = (int*)malloc(sizeof(int) * n);\n    int i;\n    if (a == NULL) return 1;\n    for (i=0;i<n;i++) a[i] = i + 1;\n    printf(\"%d\\n\", a[4]);\n    free(a);\n    return 0;\n}\n"},
    "exercises":[
      {"id":"c17e1","title":"동적 배열 합","prompt":"n개의 int를 동적 할당하고 1부터 n까지 저장한 뒤 합을 반환하세요. 사용 후 메모리를 해제하세요.","starter":"#include <stdlib.h>\n\nlong dynamic_sum(int n) {\n    return 0;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%ld\\n\",dynamic_sum(5)); printf(\"%ld\\n\",dynamic_sum(100)); return 0;}","expected":["15","5050"],"hint":"malloc(sizeof(int) * n)으로 메모리를 확보하고 마지막에 free하세요."},
      {"id":"c17e2","title":"calloc으로 0 배열","prompt":"n개의 int를 calloc으로 할당한 뒤 모든 원소의 합을 반환하고 해제하세요. 정상적으로 0이 나와야 합니다.","starter":"#include <stdlib.h>\n\nlong zero_sum(int n) {\n    return -1;\n}\n","harness":"#include <stdio.h>\nint main(void){ printf(\"%ld\\n\",zero_sum(3)); printf(\"%ld\\n\",zero_sum(20)); return 0;}","expected":["0","0"],"hint":"calloc(n, sizeof(int))은 0으로 초기화된 공간을 만듭니다."}
    ]
  }
];
