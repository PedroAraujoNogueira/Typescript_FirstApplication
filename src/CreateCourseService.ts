
// Uma interface vai criar uma casca dizendo tudo que aquele método espera 
// receber como parametros e quais parametros são opcionais ou não. Quando 
// criamos uma interface a ordem em que os parametros são passados para o
// método não importam.
interface Course {
    name: string;
    duration: number;
    // O ? vai definir que esse é um atributo opcional dentro da nossa interface.
    educator?: string;
}

class CreateCourseService {

    // Se não tivermos uma interface então os parâmetros devem ser passados na 
    // ordem em que a função espera receber. 
    // execute(name: string, duration: Number, educator: string){
    //     console.log(name, duration, educator);
    // }
 
    // Conseguimos tambem colocar um valor default como no caso do campo educator 
    // e caso não seja passado nenhum valor para educator então ele vai usar o 
    // valor default.
    execute({ duration, name, educator = "Pedro" }: Course){
        console.log(name, duration, educator)
    }
}

export default new CreateCourseService();