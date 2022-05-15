Hola a todos los que lean esto, espero que estén teniendo un buen día, bueno aquí les comentaré algunso puntos importantes del proyecto, espero ser claro y en caso de que no, sientete libre de abrir una entrada en discussions para apoyarte con cualquier duda o sugerencia que tengas para mi :).

Dependencias:
Para este proyecto es necesario instalar las dependencias de:
Express | npm install express --save
Linter  | npm install eslint --save-dev
Jest    | npm install --save-dev jest

Express
Hacemos uso de express para poder montar un servidor local y hacer pruebas a nuestro API, a que me refiero con esto, bueno creamos una entrada en la cual podemos realizar consultas para obtener datos y para simular que lo tenemos desplegado y listo en producción usamos Express.

Linter
Esta nos apoya a tener una sintaxis más limpia y ordenada, es decir digamos tenemos una costumbre de escribir código pero olvidamos los ; , entonces gracias a Linter y apoyandonos de sus comandos podemos revisar cuantos detalles de sintaxis tenemos(npm run linter) y posteriormente corregirlos de manera automatica gracias a esta herramienta (npm run linter-fix).

Jest
Esta herramienta nos permite realizar pruebas unitarias(npm test test/RUTADELARCHIVO.test.js)  para nuestros procesos, es decir crear un usuario, recuperar datos, validar objetos etc. de forma más sencilla, gracias a esta podemos validar que nuestros procesos estén funcionando de manera correcta además de que es necesario siempre realizar pruebas a cada componente que estemos por liberar,

Explica el diseño de tus componentes.
Componentes
La aplicación en este caso debe cumplir con el fin de obtener 3 endpoints de consulta con ciertos filtros/criterios, para ello creee una carpeta llamada Lib y dentro de ella divide en 3 carpetas mis componentes, tenemos la carpeta Class, en ella genere un archivo llamado VisualPartners.js en el cual genere la lógica para cumplir con cada uno de los 3 requerimientos solicitados, dentro de este archivo se puede ver la lógica con la que trabaje. <br/>

Dentro de la carpeta Controllers genere un archivo VisualPartnersController.js, este archivo se encarga de mandar a llamar las acciones que se encuentran en VisualPartners.js en la carpeta de Class, y este archivo de VisualPartnersController.js se comunica directamente con los EndPoints.
<br/>
En la carpeta Utils genere un archivo llamado Reader.js, el cual se encarga de leer todos los datos contenidos en el archivo visualpartners.json el cual estamos usando como DB.

<br/>
Y por ultimo se encuentra en la raíz de la carpeta Lib el archivo Server.js el cual contiene toda la información de configuracion para el server que montamos en express.js así como los EndPoints o entradas de consulta que generamos.

<br/>
Así mismo dentro de la carpeta .github/workflows se genero un archivo llamado Test.yml el cual contiene la información para automatizar las pruebas unitarias en cada push que hagamos del proyecto.

<br/>

Ahora bien como funciona nuestra consulta de API a sus endpoints?
Bueno se nos solicito generar 3 endpoints y su respectiva consulta se hace de la forma siguiente:<br/>
*1 - Consultar todos los Partner's registrados el cual se consulta de la siguiente forma:


*2 - Obtener los Email's de todos los Partner's que tengan una certificación validada:

*3 - Obtener todos los Partner's que tengan un valor en sus créditos mayor a 500:


Y bueno con esas SS adjuntas se muestra el como hacer su respectiva consulta dependiendo de lo que él usuario desee obtener. <br/>

Como un extra se pueden llegar a presentar problemas a la hora de automatizar las pruebas por medio de JEST en GitHub Actions por lo que dejo un ejemplo de como resolver un error que se me presento en este caso, se me presento el error de cannot use globalthis, y este lo solucione cambiando la configuración de versión de Jest en el archivo package.json del proyecto con la siguiente linea: <br/>
"devDependencies": {
    "jest": "^26.0.0"
}