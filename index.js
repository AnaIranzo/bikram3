let Coche = {
    marca: 'Fiat',
    modelo:'1',
    matricula: '123ABC',
}

let Casa = {
    codPostal: '12345',
    calle: '1',
    portal: '1',
    piso: 'A',
}

let FullStackDeveloper = {
    'lenguajes': [],
    'proyectos': [],
}

let Perro = {
    nombre: '',
    raza: '',
    color: '',
    edad: '',
    ladrar: function() {
        console.log('Guau')
    },
    popo: function () {
        return Math.random() * 3
    }

}



let marcaPortatil = Portatil.marca
let marcaPortatil2 = Portatil['marca']


let grupos = Concierto['grupos']

let RGB = []

let rojo = Led.rojo
let verde = Led.verde
let azul = Led.azul

RGB.push(rojo,verde,azul)

Portatil.modelo = 'P345'

Concierto.cartelera.push("Guns N' Roses") 

Concierto.fecha = new Date()

Impresora.imprimiendo =  {
    nombreArchivo: '',
    copias: '',
    numPaginas: '',

}

let Noticia = {
    titular: '',
    cuerpo: '',

}

let Persona = {
    nombre: '',
    apellidos: '',
    edad: '',

}

let Avion = {
    numPasajeros: '',
    despegar: function() {
        console.log('despegando');
    },
    volar: function() {
        console.log('llegando al destino');
    },
    aterrizar: function() {
        console.log('aterrizando');
    },
}

let Paquete = {
    contenido: [], 

}

let Pais = {
    numHabitantes: '',
    continente: '',
    gentilicio: '',
}

let codError = O_Error.codigo

let integrantes = Grupo.integrantes

let nivelesTinta = Impresora.tinta

let pixeles = Pantalla.pixeles

let especificaciones = Movil['especificaciones']

Grupo.numIntegrantes = 5

Pantalla.dimensiones = '1920x1080'

Led.encendido ? Led.encendido = false : Led.encendido = true 


Movil.temperatura = '20º'