import "./App.css";
//importamos el componente Cabecera de su fichero de origen
import React, {useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {Container, Row} from "react-bootstrap";
import logo from "./logocasino.png";
// import triangulo from "./triangulologin.png";




/*Esta funciïż½n es lo que en React conocemos como "componente". Devuelve cïż½digo JSX (HTML mezclado con Javascript). Escribimos los elementos que queremos que aparezcan en pantalla como si fuera HTML normal. Si queremos mostrar el HTML que tenemos en otros componentes, escribiremos el nombre del componente como si fuera una etiqueta HTML.
A los componentes les podemos pasar informaciïż½n. Para ello, dentro de la etiqueta escribiremos el nombre y el valor de la informaciïż½n que queremos pasar. Esta informaciïż½n tendremos que recogerla en el componente "hijo"
*/
function App() {
  const [value, onChange] = useState(new Date());

  return (
    
    
       <Row className="linea">
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Form />
      </Row>
  );
}



/**
function Cuerpoformulario() {
  return (
    
<div class="container-fluid">
  <div class="row text-white text-center">
    <div class="col-2 bg-dark border">DIV 1</div>
    <div class="col-10 bg-dark border">DIV 2</div>
  </div>
</div>
}


 * Esto es un componente que recibe informaciïż½n o propiedades del componente padre. Esa informaciïż½n serïż½ un objeto de Javascript, asïż½ que tendremos que acceder mediante la notaciïż½n de punto, es decir, propiedades.`nombreDeLaPropiedad`. Este `nombreDeLaPropiedad`serïż½ el nombre que le damos en el componente padre
 
function CabeceraConNombre(propiedades) {
  return (
    <h1>
      Hola {propiedades.nombre} {propiedades.nombre2}
    </h1>
  );
}


CALENDARIO no es funciïż½n, si lo queremos, solo hay que aïż½adirlo en la funcion App de arriba
 <Calendar
        onChange={onChange}
        value={value} 
        />   


*/




function Form() {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  function handleSubmit(evt) {
    /*
      Previene el comportamiento default de los
      formularios el cual recarga el sitio
    */
    evt.preventDefault();
    // Aquïż½ puedes usar values para enviar la informaciïż½n
  }
  function handleChange(evt) {
    /*
      evt.target es el elemento que ejecuto el evento
      name identifica el input y value describe el valor actual
    */
    const { target } = evt;
    const { name, value } = target;
    /*
      Este snippet:
      1. Clona el estado actual
      2. Reemplaza solo el valor del
         input que ejecutïż½ el evento
    */
    const newValues = {
      ...values,
      [name]: value,
    };
    // Sincroniza el estado de nuevo
    setValues(newValues);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="loginvacioizda">
        <img className="esquinasuperior" src={logo} alt="logotipo"></img>
      <br />

         <p className="bienvenidos">Bienvenid@s</p>
      <br />
      </div>

      <div className="logincolum">
          <button type="submit"  className="triangulo"></button>
          <br />
          <br />
          <br />
          <br />


          <label className="tipohelveticafina" htmlFor="email">Usuario</label>
           <br />
     
          <input className="recuadrostextos"
             id="email"
             name="email"
             type="email"
             value={values.email}
             onChange={handleChange}
             />
            
             <br />
             <br />
         
           <label className="tipohelveticafina"  htmlFor="password">Contraseña</label>
             <br />

           <input className="recuadrostextos"
             id="password"
             name="password"
             type="password"
             value={values.password}
             onChange={handleChange}
             />
            
             <br />
             <br />
         {/* <button type="submit">Entrar</button> */}
        </div>

    </form>
  
  );
}
export default App;