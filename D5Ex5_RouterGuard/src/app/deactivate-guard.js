"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeactivateGuard {
    canDeactivate(component) {
        let can = component.canDeactivate();
        console.log('DeactivateGuard#canDeactivate called, can: ', can);
        if (!can) {
            alert('Deactivation blocked');
            return false;
        }
        return true;
    }
}
exports.default = DeactivateGuard;
//# sourceMappingURL=deactivate-guard.js.map