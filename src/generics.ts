//  generic classes
class keyvaluepair <T,V>{
    //KeyValuePair is a generic data structure that holds Key-Value pairs.
    constructor(public key: T, public value: V){}

}

let pair = new   keyvaluepair<string,number>('a',1)

// generic classes 

function wrap<T>(value: T){
    return [value]

}

wrap(2)

// generic funtion in classes

class arr {
    static wrap<T>(value: T){
        return [value]
    
    }
    
}
// if not static
// let a = new arr()
// a.wrap(2)

// if static
arr.wrap(2)

// generic interfaces

interface result<T> {
    data: T | null
    error: string | null
}

// function fetch<T>(url: string): result<T>{
//     return{data: null,error: null}
// }

interface user {
    username: string
}
// interface product {
//     title: string
// }

// let result = fetch<user>('url')
// result.data?.username

// generic constraints
// limit to number and string

// function echo<T extends number | string>(value: T): T{
//     return value
// }
// echo(2)


// limit to object
// function echo<T extends {name: string}>(value: T): T{
//     return value
// }
// echo({name: 'a'})

// can also be used in interface class
// interface person1 {
//     name: string
// }
// function echo<T extends person1>(value: T): T{
//     return value
// }
// echo({name: 'a'}) 

// in class

class person1 {
    constructor(public name: string){}
}

class custom extends person1{

}
function echo<T extends person1>(value: T): T{
    return value
}
// echo(new custom('a'))


// extending generic classes

// e-commerse weebsite
interface product {
    name: string
    price: number
} 

// class store<T>{
//    protected objects: T[] = []
    

//     add(obj: T): void {
//         this.objects.push(obj)
//     }
// }

// let s2 = new store<product>()
// s2.add

// // pass on the generi type parameter
// class compess<T> extends store<T>{
//     compress() {}
// }

// let s3 = new compess<product>()
// s3.compress()

// // restricting the generic type parameter
// class searchstore<T extends {name: string}> extends store<T> {
//     find (name: string): T | undefined {
//         return this.objects.find(obj => obj.name === name)
//     }
// }

// // fix the generic type parameter
// class productstore extends store<product> {
//      filter(catagory: string): product [] {
//         return []
//      }
// }

// keyof operator  in typescript

class store<T>{
       protected objects: T[] = []
        
    
        add(obj: T): void {
            this.objects.push(obj)
        }
        // if T is product
        // keyof t => 'NAME | PRICE
        find(property: keyof T,value: unknown): T | undefined 
        {   
        return this.objects.find(obj => obj[property] === value)
        }
    }

    let s5 = new store<product>()
    s5.add({name: 'a', price: 1,})
    s5.find('name', 'a')
    s5.find('price', 1)
    // on this program is going to crash so we use key of operator 
    // s5.find('nameasdsa', 1)


// type mapping



