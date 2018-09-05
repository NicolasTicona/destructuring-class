


// La desestructuración es una forma conveniente de extraer múltiples valores de datos almacenados en objetos
// (posiblemente anidados) y matrices. Se puede usar en ubicaciones que reciben datos.
// La forma de extraer los valores se especifica mediante patrones 




// Object Destructuring

// ObjectDestructuring()

function ObjectDestructuring(){




    // Javascript tiene operaciones para construir datos, una propiedad a la vez
    let persons = {};
    persons.first = 'Juan'
    persons.last = 'Maria'

    console.log(persons);


    // La misma sintaxis podemos usar para extraerlos
    let Juan = persons.first
    let Maria = persons.last











    // ===============================================

    // Object Desestructuring
    let obj = {
        first: 'First',
        last: 'Last'
    }

    let {first, last} = obj

    let {first: f, last: l} = obj


    // ===============================================















    

    // EJEMPLO

    let estudiante = {
        nombre: 'Ernesto',
        edad: 18,
        aprobado: true,
        cursos: ['Matemática', 'Geografía']
    }

    let {nombre: n, edad, aprobado: estaaprobado, cursos} = estudiante
    

}




// ArrayDestructuring()

function ArrayDestructuring(){


    // Javascript tienes operaciones para acceder a los campos de un array
    let myArray = ['one', 'second', 'third']
    let one = myArray[0] //<- Partiendo de la posicion inicial 
    let second = myArray[1]
    let third = myArray[2]










    // ITERABLES    Symbol.iterator
    // Array Destructuring


    
    // Arrays
    let countries = ['Ecuador', 'Perú', 'Chile']
    // let [a,b,c] = countries


    let Any = ['Duff', false, 19, '39']
    let [duff, isfalse, mynumber, mystring] = Any





    // Strings
    let nombre = 'Alan Turing'














    // Map clave/valor
    let map = new Map()
                .set(false, 'no')
                .set(true, 'yes')

    for (let [key, value] of map) {
        // console.log(`Key: ${key}, Value: ${value}`);
    }







    let things = ['internet', 'laptop', 'wi-fi']
    let thingIterator = things.entries()
    

    for(let [index, element] of thingIterator) {          
        console.log(`index: ${index}, element: ${element}`);
    }





}

LearningDestructuring()

function LearningDestructuring(){

    // Patrones de Desestructuración

    // Assignment <<pattern>> - x , y | ejm: x - Any Variable
    // Object Pattern {first: <<pattern>>, last: <<pattern>>} {<<pattern>>, <<pattern>>}
    // Array Pattern [<<pattern>>]








    // Assignment

    let myuser = {};

    (   { name: myuser.firstname } = { name: 'Nicolas' }    );
    (   { lastname: myuser.lastname } = { lastname: 'Ticona Valdivia' }    );


    let tool = {};
    let x;
    (   { foo: tool.prop, any: x } = { foo: 123, any: 'any' }   );
    




    // Object
    let obj = {first: 'first', last: 'last'}
    // {property: <<pattern>>}
    // {<<pattern>>}
    let {first : mypatronfirst} = obj  
    let {first} = obj




    // Array
    let array = ['value1', 'value2']
    // [<<pattern>>]
    let [valueA, valueB] = array

    console.log(valueA, valueB);
    









    // ¿CÓMO PUEDEN LOS PATRÓNES ACCEDER A LOS VALORES?

    // Coacción de las fuentes de desestructuración


    let person = {
        name: 'Amanda'
    }

    let {name: amanda} = person
    // let amanda = person.name






    let car = {
        tires: 4,
        size: 2.3
    }

    let {tires, size: tamaño} = car
    // let tires = car.tires 
    // let tamaño = car.size






    
    // Array => object

    // Array.length


    let {length: languages} = ['Javascript', 'Phyton', 'Java', 'C']
    // let languages = ['Javascript', 'Phyton', 'Java', 'C'].length
    // console.log(languages);










    let {length: lg} = 'Hola Mundo'
    // let lg = 'Hola Mundo'.length
    // console.log(lg);














    // Combinando patrones de desestructuración

    let hammer = { 
        size: 10, 
        status: false, 
        parts: [
            'head',
            'ears', 
            { 
                body: ['handle', 'face']
            }
        ]  
    }

    let {size: s, status: t, parts: [ h,f, {body: [han, fac]} ]} = hammer
    // let s, t, h, f, han, fac
    // console.log(s, t, h, f, han, fac);







    let anyvalues = {
        a: 1, 
        b: [
            {
                first: 'first', 
                last: ['last', 'lasty']
            }
        ], 
        c: true 
    }

    let {a, b: [ {last: [ lt, lty ]} ], c} = anyvalues
    // a, b, ty, lty, c 
    // console.log(a, lt, lty, c);









    // Default Values
    
    // Arrays
    let [w = 1, y = 2, z = 3] = [ , , 12 ]


    let [n = 1, j = n+1] = [ undefined, undefined ]

    // console.log(n, j);




    // Objetos
    let {namedb = 'db', collection = 0} = {namedb: 'Videos', collection: undefined}
    // console.log(namedb, collection);


    let [{prop: pencil = 'No tool'}] = [{}]
    // console.log(pencil);
    
    let {prop: pr=1} = {}
    // console.log(pr);






    // Spread Operator - Se esperan múltiples argumentos

    let [...numbers] = [21,513,6,783,343]
    // console.log(numbers);

    
    let [year1, year2, year3, ...[futureyear1, ...futureyears]] = [2011, 2018, 2021, 3000, 4000, 5000]
    // console.log(futureyear1, futureyears);
    
    
    let [k = 0, , ...[l = 0, m = 0, ...ñ]] = [1,2,3,4,5,6,7,8]
    // console.log(k,l,m,ñ);

    
    
    let [...text] = 'HoLA MuNdo'
    text = text.map(letter => letter.toLowerCase())

    console.log(text);















    // Funciones
    let student = {
        name: 'Javier Doe',
        age: 18,
        scores: {
            maths: 98,
            english: 63,
            sciencie: 85
        }
    }

    

    function studentData({name, age,  scores: {maths = 0, english = 0, sciencie = 0}}){
        console.log(`Estudent: ${name}`);
        console.log(`Age: ${age}`);
        console.log(`Score maths: ${maths}`);
        console.log(`Score english: ${english}`);
        console.log(`Score sciencie: ${sciencie}`);
    }

    studentData(student)

}
