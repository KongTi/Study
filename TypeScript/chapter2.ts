// Call Signature이란 함수의 Type흐름을 알 수 있게 해주는 것

type Add = {
  (a: number, b: number): number;
};

const add: Add = (a, b) => a + b;

// OverLoading은 Call Signature를 여러개 가지는 함수

//Router.push({
//  path: "/home",
//  state: 1,
//}) 객체 형태로 라우팅 혹은 문자열로

//.push("/home"); // Next.js에서 OverLoading의 예시

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};

// Polymorphism(다형성): 다양한 모양을 가진다

type SuperPrint = {
  <T, M>(arr: T[], b?: M): T;
};

// TypeScript가 Type을 추론할 수 있도록 설정
// Generic의 이름은 자유롭게 설정
// 추가 Generic은 <>안에 적어주고 사용하면 된다

const superPrint: SuperPrint = (arr) => arr[0];

superPrint([1, 2, 3, 4], "x");
superPrint(["1", "2", "3", "4"], []);
superPrint([true, false, false, true]);
// 직접 Generic을 지정해도 됨
superPrint<boolean, boolean>([true, false, false, true]);
superPrint([1, 2, true, false]);

type Players<E> = {
  name: string;
  extraInfo: E;
};

const nicoo: Players<{ favFood: string }> = {
  name: "nicoo",
  extraInfo: {
    favFood: "kimchi",
  },
};

// React에서 useState랑 사용할 때 유용

// useState<number>() => 상태 관리 값이 숫자값이다
