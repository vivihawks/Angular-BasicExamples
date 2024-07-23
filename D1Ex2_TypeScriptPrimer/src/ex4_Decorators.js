var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function xyz(label, count) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        });
    };
}
class Test {
    constructor() {
        // invokes Override, which returns the decorator
        this.name = 'pat';
        this.age = 10;
    }
}
__decorate([
    xyz('test', 142),
    __metadata("design:type", String)
], Test.prototype, "name", void 0);
__decorate([
    xyz('', 12),
    __metadata("design:type", Number)
], Test.prototype, "age", void 0);
let t = new Test();
console.log("1. Property Decorator ");
console.log(t.name); // 'test'
console.log("--------------------");
function log(prefix) {
    return (target) => {
        var f = function (...args) {
            console.log(prefix + target.name);
        };
        return f;
    };
}
let World = class World {
};
World = __decorate([
    log('hello')
], World);
console.log("2. Class Decorator ");
const w = new World(); // outputs "helloWorld"
console.log("--------------------");
function logPosition(target, propertyKey, parameterIndex) {
    console.log(parameterIndex);
}
class Cow {
    say(b, c) {
        console.log(b);
    }
}
__decorate([
    __param(1, logPosition),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], Cow.prototype, "say", null);
console.log("3. Param Decorator ");
new Cow().say('Hello', false); // outputs 1 (newline) hello
console.log("--------------------");
//# sourceMappingURL=ex4_Decorators.js.map