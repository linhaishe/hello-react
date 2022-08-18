// 联合类型
export {};
let myFavouriteNumber: string | number;
let jackFavouriteNumber: string | number;

// 把需要使用的共同类型抽出来，可以用type做一个类型别名
// 类型别名

type FavouriteNumber = string | number;
const roseFavNumber: FavouriteNumber = 6;
// js typeof是在run time时运行的 return typeof 1 === number
// ts typeof 是在静态环境运行的

// 类型别名type 在很多情况下是可以和interface互换的，有很多些微的区别，但在日常开发中无法感受到
// 主要的大区别有两种,interface无法替代type
// 1. 定义联合类型/交叉类型 -> type FavouriteNumber = string | number;
// 2. interface 无法实现utility type
type Person = {
  name: string;
  age: number;
};

// const xiaoMing: Person = { name: 'xiaoMing' };
// 我们不想把所有的属性都写上，只想写部分的属性，不想改动原来的类型，因为有可能这些类型是第三方库引进来的，有可能为了代码整洁性的考虑，不想改动原来的类型。
// Partial 允许传入部分或不传入属性。
const xiaoMing: Partial<Person> = { age: 33 };
// 必须不传入某个属性
const shenMiRen: Omit<Person, 'name' | 'age'> = {};

// Partial 的实现
type Partial<T> = {
  [P in keyof T]?: T[P];
};
// 把person 的key 全部取出来形成一个联合类型 (键值的集合)
type PersonKeys = keyof Person;
