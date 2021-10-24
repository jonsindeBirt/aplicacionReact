import "./App.css";
//importamos el componente Cabecera de su fichero de origen
import Cabecera from "./Cabecera";

/*Esta función es lo que en React conocemos como "componente". Devuelve código JSX (HTML mezclado con Javascript). Escribimos los elementos que queremos que aparezcan en pantalla como si fuera HTML normal. Si queremos mostrar el HTML que tenemos en otros componentes, escribiremos el nombre del componente como si fuera una etiqueta HTML.

A los componentes les podemos pasar información. Para ello, dentro de la etiqueta escribiremos el nombre y el valor de la información que queremos pasar. Esta información tendremos que recogerla en el componente "hijo"
*/
function App() {
  return (
    <>
      <CabeceraConNombre nombre="Nora" />
      <Cabecera />
      <Cuerpo />
      <Footer />
    </>
  );
}

function Cuerpo() {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      vestibulum est id nulla malesuada, sit amet placerat velit dapibus.
      Suspendisse ac risus ante. Aliquam semper felis ac aliquet eleifend.
      Aenean a rutrum ipsum. Aenean augue orci, sagittis cursus mauris eu,
      venenatis sodales turpis. Cras vitae congue ligula. Nunc tincidunt est
      vitae euismod tempor. Mauris in enim vestibulum, ultrices purus sit amet,
      porttitor arcu. Vestibulum pretium nibh et porttitor volutpat. Quisque
      posuere quam sed urna vestibulum, non pretium nisi faucibus. Ut nec tempor
      enim. Nullam id commodo lacus. Class aptent taciti sociosqu ad litora
      torquent per conubia nostra, per inceptos himenaeos. Nam vel mauris eget
      lacus auctor interdum. Sed pharetra aliquet mattis. Praesent interdum
      malesuada erat, vitae accumsan sapien congue ac. Suspendisse id ultrices
      neque, vel imperdiet lorem. Duis vitae elit cursus, varius velit eu,
      dignissim urna. Sed urna lacus, ultrices posuere lectus eu, laoreet
      maximus eros. Nunc in consequat sapien, a commodo purus. Nullam consequat
      cursus enim, eleifend aliquet odio ultrices non. Etiam augue nisi, dapibus
      pretium ipsum ac, congue iaculis justo. Mauris facilisis nibh blandit
      sagittis efficitur.
    </p>
  );
}

function Footer() {
  return <a href="https://www.birt.eus/">Birt</a>;
}

/**
 * Esto es un componente que recibe información o propiedades del componente padre. Esa información será un objeto de Javascript, así que tendremos que acceder mediante la notación de punto, es decir, propiedades.`nombreDeLaPropiedad`. Este `nombreDeLaPropiedad`será el nombre que le damos en el componente padre
 */
function CabeceraConNombre(propiedades) {
  return (
    <h1>
      Hola {propiedades.nombre} {propiedades.nombre2}
    </h1>
  );
}

export default App;
