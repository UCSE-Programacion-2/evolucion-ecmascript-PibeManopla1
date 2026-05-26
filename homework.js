// No cambies los nombres de las funciones.

function usarOperadorTernario(edad) {
  return edad >= 18 ? 'mayor' : 'menor';
}

function leerModuloCommonJS() {
  const modulo = require('./modulos/constantes-cjs.cjs');
  return `${modulo.nombreMotor} ${modulo.versionObjetivo}`;
}

async function leerModuloESM() {
  // Importa datos desde "./modulos/constantes-esm.mjs" usando import dinamico.
  // Devuelve un string con el formato: "<standardModulo> | <sintaxisImport>"
  // Tu codigo:
  const modulo = require('./modulos/constantes-cjs.cjs');
  return `${modulo.nombreMotor} ${modulo.versionObjetivo}`;
}

function combinarArraysConSpread(base, extras) {
  return [...base, ...extras];
}

function combinarObjetosConSpread(base, override) {
  return { ...base, ...override };
}

function recolectarNotas(materia, ...notas) {
  return {
    materia: materia,
    notas: notas,
  };
}

function obtenerPreferenciaColor(usuario) {
  return usuario?.preferencias?.color ?? 'sin-preferencia';
}

function desestructurarPerfil(perfil) {
  const {
    nombre: nombrePersona,
    edad: edadPersona,
    direccion: { ciudad: ciudadActual },
  } = perfil;

  return { nombrePersona, edadPersona, ciudadActual };
}

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse() {
    return `Soy ${this.nombre} y tengo ${this.edad} anios.`;
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    super(nombre, edad);
    this.carrera = carrera;
  }

  presentarse() {
    return `${super.presentarse()} Estudio ${this.carrera}.`;
  }
}

function diasEntreFechas(fechaInicio, fechaFin) {
  const diferenciaMs = fechaFin - fechaInicio;
  const msPorDia = 1000 * 60 * 60 * 24;
  return Math.floor(diferenciaMs / msPorDia);
}

function explicarConcurrenciaYParalelismo() {
  return {
    concurrencia:
      'Multiples tareas progresan en periodos superpuestos (intercaladas en el tiempo).',
    paralelismo:
      'Multiples tareas se ejecutan literalmente al mismo tiempo (ej. en distintos nucleos).',
  };
}

function promesaDemorada(valor, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(valor);
    }, ms);
  });
}

function promesaConValidacion(numero) {
  return new Promise((resolve, reject) => {
    if (numero >= 0) {
      resolve(`ok:${numero}`);
    } else {
      reject(new Error('numero-invalido'));
    }
  });
}

module.exports = {
  usarOperadorTernario,
  leerModuloCommonJS,
  leerModuloESM,
  combinarArraysConSpread,
  combinarObjetosConSpread,
  recolectarNotas,
  obtenerPreferenciaColor,
  desestructurarPerfil,
  Persona,
  Estudiante,
  diasEntreFechas,
  explicarConcurrenciaYParalelismo,
  promesaDemorada,
  promesaConValidacion,
};
