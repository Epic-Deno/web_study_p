let num: number  = 233;
let bool: boolean = false;
let str: string = "字符串";
// 2.1.4 数组
// 在 TypeScript 中有两种定义数组的方式：
let arr: number[] = [1];
let arr2: Array<number> = [1,2];
let und: undefined = undefined;
let nu: null = null;
const h1 = document.createElement("h1");
h1.innerHTML = "12345";
document.body.appendChild(h1)
// 元组
let tuple:[number,string,boolean];
tuple = [1,'2',true];
console.log("元组",tuple)

// 枚举
enum Roles {
  SUPER,
  ADMIN,
  USER
}
console.log("枚举",Roles)

// Any , 任何类型
let value:any;
value = 12
value = 'string'
const arr3:any[] = [1,'3',true]
const obj1:object = {}
// void
// void 和 any 相反，any 是表示任意类型，而 void 是表示没有任意类型，就是什么类型都不是，这在我们定义函数，函数没有返回值时会用到：

const title = (text:string): void => {
  console.log(text);
  
}
// never never 类型指那些永不存在的值的类型，它是那些总会抛出异常或根本不会有返回值的函数表达式的返回值类型
const errorFunc = (message: string): never => {
  throw new Error(message);
};

// unknown
// 交叉类型

// Symbol-ES6新基础类型
const s = Symbol();
const jack = Symbol("jack");
const jack1 = Symbol("jack");
console.log("Symbol",s);
// console.log(jack == jack1); // false
console.log(Boolean(s)); //true
console.log(!s); // false

// 使用接口定义几乎任意结构
interface Name {
  firstName:string,
  lastName?:string,
}
const getValueName = ({firstName,lastName}:Name)=> {
  console.log(`${firstName}` + `${lastName}`);
  
}
getValueName({firstName:'hello',lastName:'ketty'})

const nameString:string = "jhahh"
// nameString = '23' // 常量无法分配






