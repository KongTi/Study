// TS는 :뒤에 타입을 지정 해줘서 자유로운 JS에서 발생하는 에러를 감소시킨다.
// [1,2,3,4] + false와 같은 연산 => 이상한 문자열 데이터가 출력

let a : string = "hello"; // 문자열
let b : number = 777; // 숫자

// Type이 섞이지 않는 경우, 자동으로 Type으로 추론 (타입추론)

let TF : boolean = true; // True or False

let arr : number[] = [1,2,3]; // Numbers List
let strArr : string[] = ["1","2","3"] // Strings List

let tupleList : [string, number] = ["hello", 777]; // Tuple, 길이도 고정

let anyType : any = "World"; // 모든 타입에 대해서 허용

let undefVar : undefined = undefined; // 변수가 선언 안됐을 때

let unknowVar : unknown; // 변수에 값을 넣지 않았을 때

function voidFunc(x : number) : void {
    console.log("void Test")
} // return값이 없는 함수나 undefined

function neverFunc(y : string) : never {
    throw new Error("ERR")
} // return값이 없고 주로 Error를 던지는데 사용되는 것으로 보임

// string | number => or(|)를 통해 여러개의 타입을 허용할 수 있음

type Player = {
    name : string,
    age? : number, // 변수 앞에 ?를 통해 필수값인지 아닌지 설정 해줄 수 있음
} // type형태의 객체 형태로 지정 해줄 수 있음

const playerMaker = (name : string) : Player => ({name})
const nico = playerMaker("nico")
nico.age = 20

// type 앞에 readonly를 첨부하면 읽기 전용으로 설정할 수 있음
