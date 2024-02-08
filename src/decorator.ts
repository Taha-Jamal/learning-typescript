// class decorators

type ComponentOptions = {
    Selector: string
}
// decorator factory
function Component(options: ComponentOptions){
return  (constructor:Function) => {
    console.log('component decorator called');
    constructor.prototype.uniqueid = Date.now()
    constructor.prototype.options = options
    constructor.prototype.insertInDOM = () => {
        console.log('inserting in the DOM');
}}    
}
// function Pipe(constructor: Function){
    
// }     


// // parameterized decorator
// @Component({Selector: '#my-profile'})
// class ProfileComponent {

// }

// decorator composition

function Pipe(constructor: Function){
    console.log('decorTOR CALLED');
    constructor.prototype.Pipe = true
}
@Component({Selector: '#my-profile'})
@Pipe
class ProfileComponent {

}
// method decorator
// propertyDescriptor == tells the property
// for getter and setter methods we use
// const original = descriptor.get and its function cannot have parameter


// function Log(target: any, methodname: string, descriptor: PropertyDescriptor) {
//     const original = descriptor.value as Function
//     descriptor.value = function(...args: any){
//         console.log('Before');
//         original.call(this,...args)
//         console.log('After');
        
//     }
// }

// class Person {
//     @Log
//     say(message: string){
//         console.log('person'+ message);
        
//     }
// }

// let person12 = new Person()
// person12 .say('Hello')


 