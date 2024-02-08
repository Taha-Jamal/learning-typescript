// //oop

// // object conation data(state) and operations(behaviour)
// // person-name/email(data) talk() {methods}

class MyAccount {
    // readonly  id: number;
    // owner: string
    // private balance: number;
    nick?: string


    constructor(public readonly id:number,public owner:string , private _balance: number){
        // this.id = id ;
        // this.owner= owner;
        // this.balance = balance;
    }

    deposite(amount: number): void{
        if (amount > 0 ){
            console.log("Deposit amount should be greater than zero");
            //record a transaction

            this._balance += amount
            
        }
    
    }
    

    get balance():number {
        return this._balance;
    }

    set balance(value: number) {
        if(value < 0){
            throw new Error('Balance cannot be negative');
        }
        this._balance = value
    }


}

let newAccount = new MyAccount(1, 'Mosh', 0)
newAccount.deposite(100)
console.log(newAccount.balance);
console.log(newAccount instanceof MyAccount);

// index signatures
class SeatAssignment{
    
    [seatnumber: string]: string
}
let seats = new   SeatAssignment()
seats.A1 = 'mosh' 
seats.A2 = 'taha' 


class ride{
 static _activerides: number = 0
    start() {ride._activerides++;}
    stop() {ride._activerides--;}
   
    static get activerides(): number {
        return ride._activerides
    }
}


let ride1 = new ride()
ride1.start()

let ride2 = new ride()
ride2.start()

console.log(ride.activerides);


class person{
    constructor(public fname:string, public  lname:string){}

    get fullname(){
        return this.fname + '' + this.lname
    }
    walk(){
        console.log('walking');
        
    }

}

class student extends person {
    constructor(public studentid: number,
        public override fname:string,
        public override lname:string){
        super(fname,lname)
    }

    taketest(){
        console.log('taking test');
        
    }

}

let s1 = new student(1,'j','sdasd') 

// abstract class calander {
//     constructor(public name:string){}
// abstract addevent():void 
// abstract removeevent():void

// }

interface calander {
    name: string
    addevent():void 
    removeevent():void
    
}

 interface clcal extends calander{
    sync():void
 }

 class aa implements calander{
     constructor(public name: string) {}
     addevent(): void {
         throw new Error("Method not implemented.");
     }
     removeevent(): void {
         throw new Error("Method not implemented.");
     }

 }


 