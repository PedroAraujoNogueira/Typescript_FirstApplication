"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCourseService = /** @class */ (function () {
    function CreateCourseService() {
    }
    // Se não tivermos uma interface então os parâmetros devem ser passados na 
    // ordem em que a função espera receber. 
    // execute(name: string, duration: Number, educator: string){
    //     console.log(name, duration, educator);
    // }
    // Conseguimos tambem colocar um valor default como no caso do campo educator 
    // e caso não seja passado nenhum valor para educator então ele vai usar o 
    // valor default.
    CreateCourseService.prototype.execute = function (_a) {
        var duration = _a.duration, name = _a.name, _b = _a.educator, educator = _b === void 0 ? "Pedro" : _b;
        console.log(name, duration, educator);
    };
    return CreateCourseService;
}());
exports.default = new CreateCourseService();
