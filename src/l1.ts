// //can use _ to make the code look easier
// // let sales = 123_456_789
// // let course: string = 'typesrcipt'
// // let isPublished: boolean = true
// // let level // type any (avoid)

// // function rebder(document:any) {
// //     console.log(document);

// // }

// // let numbers: number[] = [1,2,3]
// // numbers.forEach(n => n.toString )
// // // @ts-ignore

// // tuples
// let user: [number, string] = [1, "Mosh"];

// // insted use enum
// // const small =1
// // const medium =2
// // const large =3

// // PascalCase in enum
// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }

// let mySize: Size = Size.Medium;
// console.log(mySize);

// // functions
// function calTax(income: number, taxyear: number): number {
//   if (taxyear < 50000) return income * 1.2;
//   return income * 1.3;
// }
// calTax(10000, 2021);

// // objects

// // let employee: {
// //   readonly  id: number  //makes it read only
// //     name?: string // ? makes it optional
// //     retire: (date: Date) => void
// // } = {
// //     id: 1,
// //      name: '',
// //      retire: (date: Date) =>{
// //         console.log(date);
// // },};
// // employee.name = 'mosh'

// // Advanced types

// //type Aliases

// type Employee = {
//   readonly id: number; //makes it read only
//   name?: string; // ? makes it optional
//   retire: (date: Date) => void;
// };
// let employee: Employee = {
//   id: 1,
//   name: "",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };
// employee.name = "mosh";

// // Union types

// function kgtoLb(weight: number | string) {
//   // Narrowing
//   if (typeof weight === "number") return weight * 2.2;
//   else return parseInt(weight) * 2.2;
// }
// kgtoLb(10);
// kgtoLb("sa");

// // intersection types
// type Drag = {
//   drag: () => void;
// };
// type Resize = {
//   resize: () => void;
// };
// type UIWidget = Drag & Resize;

// let textbox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// //  literal types (exact,specfic)
// type quantity = 50 | 100;
// let quantity = 100;

// // nullable types

// function greet(name: string | null | undefined) {
//   if (name) console.log(name.toLowerCase());
//   else console.log("hola");
// }
// greet(null);

// //optional Chaining

// type Customer = {
//   birthday?: Date;
// };

// function getcustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthday: new Date() };
// }
// let customer = getcustomer(1);
// // optional property access operator
// console.log(customer?.birthday?.getFullYear());

// // optional element access operator (for arrays)
// // customer?.[0]  instead of using an if command for null and undefined we use (?.)

// //optional call

// let log: any = null;
// log?.("a");

// OOP Concept

//oop

// object conation data(state) and operations(behaviour)
// person-name/email(data) talk() {methods}

class account {
  id: number;
  owner: string
  balance: number;

  constructor(id:number,owner:string , balance: number){
      this.id = id ;
      this.owner= owner;
      this.balance = balance;
  }

  deposite(amount: number): void{
      if (amount > 0 ){
      if(amount <=0){
          console.log("Deposit amount should be greater than zero");
          this.balance += amount
      }
      }
  
  }
}

let Account = new  account(1, 'Mosh', 0)
Account.deposite(100)
console.log(typeof account);

