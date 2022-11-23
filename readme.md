# Test de JavaScript

¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. Puedes hacer trampa y saltar a la siguiente clase, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

## Instrucciones para tomar esta prueba

- Evalúa muy críticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al Curso Básico de JavaScript, anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.

Recuerda que el éxito no se mide por cuánto tiempo te toma aprender, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!

## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?
  Una variable es un espacio en memoria designado a guardar información de diferentes tipos de datos (tipos designados por el lenguaje de programación)
- ¿Cuál es la diferencia entre declarar e inicializar una variable?
  Declarar una variable consiste en generar un espacio en memoria, en JavaScript se inicializa agregando la palabra reservada `var`, `let` o `const` y posteriormente agregando el nombre de la variable.

  ```javascript
  var name;
  let lastname;
  const age;
  ```

  Inicializar o reinicializar una variable consiste en agregar un valor a la variable declarada.

  ```javascript
  var name = 'Joaquín';
  let lastname = 'Ossandón';
  age = 28;
  ```

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
  Para sumar números el tipo de datos debe ser `number` de lo contrario concatenará como si fuera texto. En la siguiente pregunta se expondrá un ejemplo.
- ¿Cuál operador me permite sumar o concatenar?
  El operador que permite estas acciones es el `+` y se puede utilizar de la siguiente forma:
  concatenando:
  ```javascript
  console.log('Esto es una ' + 'concatenación.');
  ```
  sumando:
  ```javascript
  console.log(2 + 2);
  ```

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: `String`
- Apellido: `String`
- Nombre de usuario en Platzi: `String`
- Edad: `Number`
- Correo electrónico: `String`
- Mayor de edad: `Boolean`
- Dinero ahorrado: `Number`
- Deudas: `Number`

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior.

```javascript
const name = 'Joaquín';
const lastname = 'Ossandón';
const username = 'Gh0stRaccoon';
const edad = 27;
const email = 'joaquinossandong@gmail.com';
const isAdult = true;
const saveMoney = 2000;
const debt = 1000;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)

```javascript
console.log(name + ' ' + lastname);
```

- Dinero real (dinero ahorrado menos deudas)

```javascript
console.log(savemoney - debt);
```

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
  Una función es un conjunto de instrucciones que realiza cierta tarea, este conjunto de código es reutilizable, es decir, se puede mandar a llamar las veces que se requiera, generalmente reciben una entrada (parámetros) y otorgan una salida consecuente.
  ```Javascript
  function fullName(name, lastname){
    return name + ' ' + lastname
  }
  ```
- ¿Cuándo me sirve usar una función en mi código?
  Cuando requiera hacer ese conjunto de acciones en diferentes ocasiones en mi código.

  Además, para ordernar y mejorar la legibilidad de nuestro código.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
  `parámetros`: Cuando se define una función y se le agrega una entrada, a los nombres de dichas entradas se les denomina `parámetros`
  ```javascript
  function oneFunction(param1, param2) {
  	//do something
  }
  ```
  `argumentos`: Cuando se invoca una función y le enviamos variables estos pasan a ser nombrados `argumentos`
  ```javascript
  oneFunction(arg1, arg2);
  ```

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```javascript
const name = 'Joaquín Ignacio';
const lastname = 'Ossandón Gómez';
const completeName = name + ' ' + lastname;
const nickname = 'GhostRaccoon';

console.log(
	'Mi nombre es ' +
		completeName +
		', pero prefiero que me digas ' +
		nickname +
		'.'
);
```

Resolución:

```javascript
function greeting(name, lastname, nickname) {
	const completeName = fullName(name, lastname);
	console.log(
		'Mi nombre es ' +
			completeName +
			', pero prefiero que me digas ' +
			nickname +
			'.'
	);
}

greeting('Joaquín Ignacio', 'Ossandón Gómez', 'Gh0stRaccoon');
```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
  Un condicional ejecuta cierto código dependiendo de una condición o validación.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

  | operador     | explicacion                 | ejemplo                           | Resultado |
  | ------------ | --------------------------- | --------------------------------- | --------- |
  | >            | es mayor que                | `if(3 > 1)`                       | true      |
  | <            | es menor que                | `if(3 < 1)`                       | false     |
  | >=           | es mayor o igual que        | `if(3 >= 1)`                      | true      |
  | <=           | es menor o igual que        | `if(3 <= 1)`                      | false     |
  | ==           | es igual en valor           | `if(1 == "1")`                    | true      |
  | ===          | es igual en valor y tipo    | `if(3 === 3)`                     | true      |
  | !=           | no es igual en valor        | `if(1 != "0")`                    | true      |
  | !==          | no es igual en valor o tipo | `if(3 !== "3")`                   | true      |
  | &&           | y                           | `if(3 > 1 && 3 < 5)`              | true      |
  | &#124;&#124; | o                           | `if(1 > 3 `&#124;&#124; `3 == 3)` | true      |
  | true         | verdadero                   | `if(true)`                        | true      |
  | false        | falso                       | `if(false)`                       | false     |
  | !            | negación                    | `if(!true)`                       | false     |

  existen diferentes flujos condicionales, conozco `IF`(if, else, else if), `SWITCH` e `IF TERNARIO`.

- ¿Puedo combinar funciones y condicionales?
  Sí se pueden realizar condicionales dentro de las funciones
  ```javascript
  function isAdult(age) {
  	if (age >= 18) {
  		console.log('Es mayor de edad');
  	} else {
  		console.log('NO es mayor de edad');
  	}
  }
  ```
  o
  ```javascript
  function isAdult(age) {
  	age >= 18
  		? console.log('Es mayor de edad')
  		: console.log('NO es mayor de edad');
  }
  ```

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```javascript
const tipoDeSuscripcion = 'Basic';

switch (tipoDeSuscripcion) {
	case 'Free':
		console.log('Solo puedes tomar los cursos gratis');
		break;
	case 'Basic':
		console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
		break;
	case 'Expert':
		console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
		break;
	case 'ExpertPlus':
		console.log(
			'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
		);
		break;
}
```

Resolución:

```javascript
const tipoDeSuscripcion = 'Basic';

if (tipoDeSuscripcion === 'Basic') {
	console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
} else if (tipoDeSuscripcion === 'Expert') {
	console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
} else if (tipoDeSuscripcion === 'ExpertPlus') {
	console.log(
		'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
	);
} else {
	console.log('Solo puedes tomar los cursos gratis');
}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

```javascript
const tipoDeSuscripcion = 'Basic';
function obtenerTipoSuscripcion(tipoDeSuscripcion) {
	if (tipoDeSuscripcion === 'Basic') {
		console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
		return;
	}
	if (tipoDeSuscripcion === 'Expert') {
		console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
		return;
	}
	if (tipoDeSuscripcion === 'ExpertPlus') {
		console.log(
			'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
		);
		return;
	}
	if (tipoDeSuscripcion === 'Free') {
		console.log('Solo puedes tomar los cursos gratis');
		return;
	}
	console.log('No existe la suscripción seleccionada');
}
obtenerTipoSuscripcion(tipoDeSuscripcion);
```

💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

```javascript
const suscripcionUsuario = 'Free';
function obtenerTipoSuscripcion(suscripcionUsuario) {
	const tiposDeSuscripcion = {
		Free: 'Solo puedes tomar los cursos gratis',
		Basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
		Expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
		ExpertPlus:
			'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
	};
	if (!tiposDeSuscripcion[suscripcionUsuario]) {
		console.log('No existe el tipo de suscripción ' + suscripcionUsuario);
		return;
	}
	console.log(tiposDeSuscripcion[suscripcionUsuario]);
}

obtenerTipoSuscripcion(suscripcionUsuario);

```

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
  Los ciclos o bucles son utilizados para repetir una acción `n` cantidad de veces dada por una condición. El bucle continúa ejecutandose hasta que la condición se rompa (devuelva valor false).

- ¿Qué tipos de ciclos existen en JavaScript?
  Los tipos de ciclos son for, while y do while.

- ¿Qué es un ciclo infinito y por qué es un problema?
  Un ciclo infinito es un ciclo que no tiene una condición que le pueda dar fin, es decir, siempre se cumplirá y se ejecutará el ciclo. En JavaScript es un problema, siempre y cuando no sea lo que se está buscando y el mismo esté controlado de alguna forma. Ya que un ciclo descontrolado y escrito por error puede bloquear el navegador, consumir muchos recursos y hacernos pasar un mal rato.

- ¿Puedo mezclar ciclos y condicionales?
  Sí, podemos mezclar ciclos y condicionales, de hecho las condicionales son las que hacen que se ejecute o no un ciclo, pero yendo más a fondo, podemos incluirlas dentro de la ejecución del mismo bucle, realizando una u otra tarea en el ciclo dependiendo de dicha condición.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```javascript
for (let i = 0; i < 5; i++) {
	console.log('El valor de i es: ' + i);
}

for (let i = 10; i >= 2; i--) {
	console.log('El valor de i es: ' + i);
}
```

Resolución:

```javascript
let i = 0;
while (i < 5) {
	console.log('El valor de i es: ' + i);
	i++;
}

i = 10;

while (i >= 2) {
	console.log('El valor de i es: ' + i);
	i--;
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

```javascript
let respuesta = 0;
while (respuesta != 4) {
	respuesta = prompt('¿Cuánto es 2 + 2?');
}
```

💡 Pista: puedes usar la función prompt de JavaScript.

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
  Un array es una colección o conjunto de elementos, cada uno de ellos se puede llamar haciendo referencia a la posición que ocupe dentro de dicha colección.

  ```js
  const arr = [1, 2, true, 'Goblin'];
  ```

- ¿Qué es un objeto?
  Un objeto es una colección o conjunto de elementos, sin embargo, a diferencia del array estos poseen una clave y un valor, y se pueden llamar haciendo referencia a la llave de dicho valor.
  Los objetos se pueden utilizar para representar elementos de la vida real (abstractos o no), como por ejemplo, a una persona, un vehículo, una cuenta bancaria, etc.

  ```js
  const persona = { name: 'Joaquín', age: 28, country: 'CL' };
  ```

- ¿Cuándo es mejor usar objetos o arrays?
  Es mejor utilizar objetos cuando se requiere representar alguna entidad y es mejor utilizar arrays cuando se deben guardar diferentes elementos idealmente de un mismo tipo.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
  Sí y es muy común ver un array de objetos como por ejemplo:
  ```javascript
  const personas = [
  	{ name: 'Joaquín', age: 28, country: 'CL' },
  	{ name: 'Nicole', age: 30, country: 'CL' },
  ];
  ```
  incluso arrays dentro de objetos como por ejemplo:
  ```javascript
  const personas = [
  	{
  		name: 'Joaquín',
  		age: 28,
  		country: 'CL',
  		pets: [
  			{ name: 'Popa', age: 3 },
  			{ name: 'Agustin', age: 2 },
  		],
  	},
  	{
  		name: 'Nicole',
  		age: 30,
  		country: 'CL',
  		pets: [
  			{ name: 'Titan', age: 1 },
  			{ name: 'Leon', age: 1 },
  			{ name: 'Shayna', age: 3 },
  			{ name: 'Queen', age: 6 },
  			{ name: 'Negra', age: 8 },
  			{ name: 'Churrasca', age: 8 },
  			{ name: 'Blanca', age: 6 },
  		],
  	},
  ];
  ```

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```javascript
function printFirstElement(arr) {
	console.log(arr[0]);
}
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```javascript
function printAllElements(arr) {
	arr.forEach((el) => console.log(el));
}
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```javascript
function printAnObject(obj) {
	Object.keys(obj).forEach((el) => console.log(el, obj[el]));
}
```
