# Trabajando con Hooks

## useState

`const [state, setState] = useState(initialState);`

Devuelve un valor con estado y una función para actualizarlo.

Durante el renderizado inicial, el estado devuelto (`state`) es el mismo que el valor pasado como primer argumento (`initialState`).

La función `setState` se usa para actualizar el estado. Acepta un nuevo valor de estado y sitúa en la cola una nueva renderización del componente.

`setState(newState);`

En las renderizaciones siguientes, el primer valor devuelto por useState será siempre el estado más reciente después de aplicar las actualizaciones.

### Actualizaciones funcionales

Si el nuevo estado se calcula utilizando el estado anterior, puede pasar una función a setState. La función recibirá el valor anterior
y devolverá un valor actualizado.

## Usando un Hook personalizado

Los Hooks personalizados ofrecen la flexibilidad de compartir lógica que no era posible antes con los componentes de React. Puedes escribir Hooks personalizados que cubran una amplia gama de casos de uso, como manejo de formularios, animación, suscripciones declarativas, temporizadores y probablemente muchos más que no hemos considerado. Además, puedes construir Hooks que sean tan fáciles de usar como las características integradas de React.

### ¿Tengo que nombrar mis Hooks personalizados comenzando con ”use“?

Por favor, hazlo. Esta convención es muy importante. Sin esta, no podríamos comprobar automáticamente violaciones de las reglas de los Hooks porque no podríamos decir si una cierta función contiene llamados a Hooks dentro de la misma.

### ¿Dos componentes usando el mismo Hook comparten estado?

No. Los Hooks personalizados son un mecanismo para reutilizar lógica de estado (como configurar una suscripción y recordar el valor actual), pero cada vez que usas un Hook personalizado, todo estado y efecto dentro de este son aislados completamente.

### ¿Cómo un Hook personalizado obtiene un estado aislado?

Cada llamada al Hook obtiene un estado aislado. Debido a que llamamos useFriendStatus directamente, desde el punto de vista de React nuestro componente llama a useState y useEffect. Y como aprendimos anteriormente podemos llamar a useState y a useEffect muchas veces en un componente y ellos van a ser completamente independientes.

## useEffect

`useEffect(didUpdate);`

La función pasada a useEffect se ejecutará después de que el renderizado es confirmado en la pantalla. Piense en los efectos como una escotilla de escape de React del mundo puramente funcional al mundo imperativo.

Por defecto, los efectos se ejecutan después de cada renderizado completado, pero puede elegir ejecutarlo solo cuando ciertos valores han cambiado.

###Limpiando un efecto
A menudo, los efectos crean recursos que deben limpiarse antes de que el componente salga de la pantalla, como una suscripción o un ID de temporizador. Para hacer esto, la función pasada a useEffect puede devolver una función de limpieza. Por ejemplo, para crear una suscripción:

La función de limpieza se ejecuta antes de que el componente se elimine de la interfaz de usuario para evitar pérdidas de memoria. Además, si un componente se procesa varias veces (como suele hacer), el efecto anterior se limpia antes de ejecutar el siguiente efecto. En nuestro ejemplo, esto significa que se crea una nueva suscripción en cada actualización. Para evitar disparar un efecto en cada actualización, consulte la siguiente sección.

Aunque useEffect se aplaza hasta después de que el navegador se haya pintado, se garantiza que se activará antes de cualquier nuevo render. React siempre eliminará los efectos de un render anterior antes de comenzar una nueva actualización.

## useRef

`const refContainer = useRef(initialValue);`

useRef devuelve un objeto ref mutable cuya propiedad `.current` se inicializa con el argumento pasado (`initialValue`). El objeto devuelto se mantendrá persistente durante la vida completa del componente.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Ten en cuenta que useRef no notifica cuando su contenido cambia. Mutar la propiedad .current no causa otro renderizado. Si quieres correr algún código cuando React agregue o quite una referencia de un nodo del DOM, puede que quieras utilizar en su lugar una referencia mediante callback.
