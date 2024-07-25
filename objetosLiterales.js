let curso = {
    cantidadDeAlumnos : 32,
    docentes : ['Fernando', 'Leonel'],
    horario : 'de 19 a 21hs.',
    notificaciones : function(){
        return "El horario de la cursada es " + this.horario;
    }
};

console.log(curso.notificaciones());

function Curso(cantidadDeAlumnos, docentes, horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario;
}

let cursoDeProgramacion = new Curso(50, ['Fernando', 'Singh'], 'de 19 a 21hs.');
let cursoDeMarketing = new Curso(45, ['Leonel', 'Singh'], 'de 08 a 11hs.');

console.log(cursoDeProgramacion);
console.log(cursoDeMarketing);