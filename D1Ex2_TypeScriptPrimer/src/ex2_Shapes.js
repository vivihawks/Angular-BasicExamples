let a = {
    type: 'literal'
};
class NotAnAction {
    constructor() {
        this.type = 'Constructor function (class)';
    }
}
a = new NotAnAction(); // valid TypeScript!
//# sourceMappingURL=ex2_Shapes.js.map