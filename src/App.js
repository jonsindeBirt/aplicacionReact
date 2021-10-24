import "./App.css";
import Cabecera from "./Cabecera";

function App() {
  return (
    <>
      <CabeceraConNombre nombre="Nora" />
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

function CabeceraConNombre(propiedades) {
  return (
    <h1>
      Hola {propiedades.nombre} {propiedades.nombre2}
    </h1>
  );
}

export default App;
