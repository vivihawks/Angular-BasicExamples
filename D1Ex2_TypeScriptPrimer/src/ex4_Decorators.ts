
function xyz(label: string, count: number) {
  return function (target: any, key: string) {
    Object.defineProperty(target, key, { 
      configurable: false,
      get: () => label
    });
  }
}

class Test {
  // invokes Override, which returns the decorator
  @xyz('test', 142)  
  name: string = 'pat';

  @xyz('',12)
  age: number = 10;

}

let t = new Test();


console.log("1. Property Decorator ")
console.log(t.name);  // 'test'
console.log("--------------------")


function log(prefix?: string) {
  return (target:any) => {
    var f: any = function (...args:any[]) {
      console.log(prefix + target.name);
    }
    return f;
  };
}

@log('hello')
class World {
}
console.log("2. Class Decorator ")
const w = new World(); // outputs "helloWorld"
console.log("--------------------")



function logPosition(target: any, propertyKey: string, parameterIndex: number) {
  console.log(parameterIndex);
}

class Cow {
  say(b: string, @logPosition c: boolean) {
    console.log(b);
  }
}
console.log("3. Param Decorator ")
new Cow().say('Hello', false); // outputs 1 (newline) hello
console.log("--------------------")
