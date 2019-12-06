import { RSA_PKCS1_OAEP_PADDING } from "constants";

//a validator decorator 

const validators=[(t)=> t>=0 && t<=10 ];

function valid(constructor: any) {
    const originalConstructor = constructor;

    const newConstructor: any = function (...args) {
        console.log(`New: ${originalConstructor['name']} is created`);
        const oldobject=  new originalConstructor(...args);
        for(let f in validators){
           if( !f(oldobject)) throw new Error(xxx);
        }
        return oldobject;  
    }

    newConstructor.prototype = originalConstructor.prototype;

    return newConstructor;
}


class validator{
    constructor(){

    }


    
}