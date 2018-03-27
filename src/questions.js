const n = n => parseFloat(String(n).replace(/[^0-9.]/ig, ''))
const tagVERDADEROFALSO = 'VERDADERO O FALSO'

const sortAsc = (a, b) => a > b
const sortAscNumber = (a, b) => a.toString().padStart(50, '0') > b.toString().padStart(50, '0')
const sortAscReverse = (a, b) => a.split('').reverse().join('') > b.split('').reverse().join('')
const sortAlwaysEnd = (opt) => (a, b) => a === opt ? 1 : 0

/**
 * @typedef {{title:string,options:string[],sort?:Function,stag?:string}} Question
 */

/**
 * @type {Question[]}
 */
const questions = [
  {
    title: 'Cuando hablamos de conducta vial, nos referimos a:',
    options: [
      'Cuando nos comportarnos de forma adecuada en el entorno vial, ya sea peatón, pasajero o conductor de algún vehículo.',
      'Cuando no respetamos las normas de convivencia en el tránsito, arriesgando la vida y la de los demás.',
      'Cuando evitamos los accidentes de tránsito, al preferir circular por lugares con menor tránsito.',
      'Cuando nos distraernos con los factores del entorno que puedan afectar nuestra interacción vial.',
    ],
  },
  {
    title: '¿Quiénes interactúan en el triángulo de la seguridad vial?',
    options: [
      'Usuarios, vehículos y vías, con responsabilidad compartida.',
      'Autos, camiones, motos y bicicletas, cada uno de forma individual.',
      'Usuarios, vehículos, vías, con responsabilidad individual.',
      'Reconocer el riesgo, entender la defensa, actuar a tiempo.',
    ],
  },
  {
    title: '¿Qué le podría ocurrir a un peatón que va distraído con su celular?',
    options: [
      'Todas las anteriores',
      'Caerse',
      'Podría ser asaltado',
      'Ser atropellado',
    ],
    sort: sortAlwaysEnd('Todas las anteriores'),
  },
  {
    title: '¿Si una persona va en bicicleta y se baja a ser peatón, cambia en algo la seguridad?',
    options: [
      'Ninguna de las anteriores',
      'Ahora no necesita seguridad alguna',
      'Tendrá que seguir con casco puesto',
      'Ahora tiene la opción de cruzar por cualquier lado por ir con su bici al lado',
    ],
  },
  {
    title: 'Según el orden de jerarquía vial, ¿Cuál de las siguientes alternativas es el orden correcto? ',
    options: [
      'Peatones, ciclistas, transporte público, motos, autos, vehículos de carga.',
      'Transportes de carga, autos, ciclistas, peatones, transporte público.',
      'Bicicletas, motos, triciclos, autos eléctricos, transportes de carga.',
      'Peatones, personas, autos, motos, trasportes de carga.',
    ],
  },
  {
    title: '¿Qué son y para qué sirven las señales del tránsito?',
    options: [
      'Indican al usuario cuál es su forma de ocuparla, las limitaciones, prohibiciones o restricciones, así como lo que constituye una falta.',
      'Previenen de posibles riesgos en el tránsito.',
      'Fotos en miniatura para la conducción de los usuarios de las vías.',
      'Indicaciones para los usuarios de las vías sobre una circulación más precavida.',
    ],
  },
  {
    title: '¿Para quienes rige la ley de tránsito N° 18.290?',
    options: [
      'Para todos los que componen el sistema vial.',
      'Conductores',
      'Peatones',
      'Pasajeros',
    ],
    sort: sortAlwaysEnd('Para todos los que componen el sistema vial.'),
  },
  {
    title: '¿Cuáles son las responsabilidades del peatón?',
    options: [
      'Todas las anteriores.',
      'Mirar a ambos lados antes de cruzar y siempre permanece atento a las condiciones del entorno.',
      'Utiliza los pasos y cruces peatonales habilitados, jamás cruzar en diagonal.',
      'Siempre cruzar con luz verde peatonal.',
    ],
    sort: sortAlwaysEnd('Todas las anteriores.'),
  },
  {
    title: 'Un ciclista seguro por la calle es quién:',
    options: [
      'Siempre utiliza accesorios de seguridad y reflectantes.',
      'Utiliza las vías igual que un vehículo motorizado.',
      'No necesita respetar las señales del tránsito.',
      'No lleva a nadie para evitar caerse.',
    ],
  },
  {
    title: '¿Cuáles son los elementos de seguridad que debe usar un motociclista?',
    options: [
      'Casco certificado, lentes, zapato acolchado de tobillos, chaqueta reflectante con protecciones, pantalón de seguridad, guantes.',
      'Pantalón, zapatos, chaleco, gorro.',
      'Casco, parka, pantalón de nieve, zapatillas, guantes.',
      'Polerón certificado, casco, guantes de lana, pantalón corto.',
    ],
  },
  {
    title: 'Un conductor de un vehículo, ¿qué consideraciones debe tener antes de ponerlo en marcha?',
    options: [
      'Revisar el estado de los neumáticos, revisar las luces, los documentos, planificar la ruta, tiempo.',
      'Revisar el tren delantero, el motor, los pedales, la radio.',
      'Ver el retrovisor, la revisión técnica, los lentes de sol, ver el manual del auto.',
      'Ninguna de las anteriores.',
    ],
    sort: sortAlwaysEnd('Ninguna de las anteriores.'),
  },
  {
    title: '¿Qué vehículos no tienen restricción de circulación de uso en una vía exclusiva solo buses?',
    options: [
      'Buses',
      'Autos',
      'Motos',
      'Camiones',
    ]
  },
  {
    title: 'Un grupo de peatones conversa en el paso de una escalera de metro dificultando el paso a los demás',
    options: [
      'Le pides de buena forma dejar el paso libre.',
      'Está bien, lo apoyas.',
      'Te unes a la conversación parado ahí mismo.',
      'Tomas otro camino.',
    ],
    sort: sortAlwaysEnd('Tomas otro camino.'),
  },
  {
    title: '¿Cuáles son los derechos de un pasajero?',
    options: [
      'Todas las anteriores.',
      'No ser discriminado por parte de los proveedores del servicio.',
      'Llegar a su destino.',
      'Tener la seguridad necesaria mientras es trasladado a su destino.',
    ],
    sort: sortAlwaysEnd('Todas las anteriores.'),
  },
  {
    title: '¿Un pasajero en qué casos tiene la opción de no cancelar su pasaje en transporte público?',
    options: [
      'Nunca, siempre debe ser cancelado el pasaje a medida que se usa.',
      'En caso que no tenga dinero o no cargue su tarjera Bip.',
      'Cuando el conductor no le diga nada sobre el pago.',
      'Cuando solo sea un trayecto muy corto.',
    ],
  },
  {
    title: 'Un automovilista podría estacionarse en la ciclovía solo cuando:',
    options: [
      'Nunca, la ciclovía esta demarcada para darle siempre la prioridad al ciclista y seguridad de uso.',
      'Cuando no venga ningún ciclista.',
      'Solo Cuando no tenga otro lado donde estacionar.',
      'Podría solo si solo hace con las luces de emergencia en todo momento.',
    ],
  },
  {
    title: 'En el micro bus el asiento de color naranjo está destinado para:',
    options: [
      'Para personas con movilidad reducida, tercera edad y embarazadas.',
      'Para las personas que estén más cansadas.',
      'Para personas de alguna religión especifica.',
      'Ninguna de las anteriores.',
    ],
    sort: sortAlwaysEnd('Ninguna de las anteriores.'),
  },
  {
    title: '¿Qué usuario de las vías podría usar sus manos para avisar sus movimientos?',
    options: [
      'Ciclistas',
      'Camiones',
      'Buses',
      'Peatones',
    ],
  },
  {
    title: '¿Qué usuarios del entorno vial podrían ocupar más de un sistema en un mismo día?',
    options: [
      'Motoristas',
      'Peatones',
      'Conductores',
      'todos sin excepción',
    ],
    sort: sortAlwaysEnd('todos sin excepción'),
  },
  {
    title: '¿Cuándo se encuentre con esta señalética, que significa?',
    image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAAE2CAYAAADrvL6pAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMTM3RDk4MjcwMTkxMUUzODZBRkY1RkRCQzU2NjZDMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMTM3RDk4MzcwMTkxMUUzODZBRkY1RkRCQzU2NjZDMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjExMzdEOTgwNzAxOTExRTM4NkFGRjVGREJDNTY2NkMwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjExMzdEOTgxNzAxOTExRTM4NkFGRjVGREJDNTY2NkMwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+335fIgAAU4lJREFUeNrsnQV4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`,
    options: [
      'No bloquear cruce',
      'No virar en U',
      'No estacionar sobre lo demarcado',
      'Ninguna de las anteriores',
    ],
    sort: sortAlwaysEnd('Ninguna de las anteriores'),
  },
]

module.exports = questions
