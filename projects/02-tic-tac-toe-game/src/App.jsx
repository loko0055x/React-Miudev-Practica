import { Children, useState } from "react";

const TURNOS = {
  X: "x",
  O: "o",
};
const arreglo = Array(9).fill(null);
var cadena = "";

function Evaluacion({ inicialTurno, posicion }) {
  return (
    <div className="square" onClick={cambiarstadoarreglo}>
      {cadena}
    </div>
  );
}

function App() {
  // en que posicion
  const [elemento, setElemento] = useState(Array(9).fill(null));
  //de quien es su turno
  const valor = elemento[posicion];

  const cambiarstadoarreglo = () => {
    const nuevoArreglo = [...elemento];

    if (valor == TURNOS.O) {
      nuevoArreglo[posicion] = TURNOS.X;
      cadena = "y";
    } else {
      nuevoArreglo[posicion] = TURNOS.O;
      cadena = "o";
    }
    setElemento(nuevoArreglo); // actualizamos el estado completo
  };

  return (
    <main className="board">
      <h1>tik tack toe</h1>
      <section className="game">
        {arreglo.map((valor, index) => {
          return (
            <Evaluacion inicialTurno={""} key={index} posicion={index}>
              {" "}
            </Evaluacion>
          );
        })}
      </section>
    </main>
  );
}

export default App;

{
  /*
import { Children, useState } from "react";

const TURNOS = {
  X: "x",
  O: "o",
};
//verificamos si es x o y para asi cambiar de diseño
const CuadradoSquare = ({
  children,
  isSelected,
  updatetablero,
  indicexxxxxxxxxx,
}) => {
  //updatetablero = es una funcion en si

  const nameclasecss = `square ${isSelected ? "is-selected" : ""}`;

  const demoactualizar = () => {
    //Los paréntesis (()) significan “llámala ahora”.
    //los parenteresisi significa ejecuta la funcion
    updatetablero(indicexxxxxxxxxx);
  };

  return (
    <div onClick={demoactualizar} className={nameclasecss}>
      {children}
    </div>
  );
};

function App() {
  //creamos 2 state
  //1er state : arreglo de 9 elementos
  //2do state : Para saber de quien es su turno
  const [arreglovalorBoard, setArregloValorBoard] = useState(
    Array(9).fill(null)
  );
  const [turnostate, setTurnostate] = useState(TURNOS.X);

  //creamos una funcion para actualizar el tablero
  const funcionActualizarTablero = (indicexxx) => {
    // ASIGNAMOS todos los elementos a una variable
    const nuevoborde = [...arreglovalorBoard];
    nuevoborde[indicexxx] = turnostate;

    setArregloValorBoard(nuevoborde);

    // cambiamos el turno
    // SI ES TURNO es x entonces cambia al y caso contraio al x
    const nuevoTurno = turnostate === TURNOS.X ? TURNOS.O : TURNOS.X;
    //cambiamos de turno
    setTurnostate(nuevoTurno);
  };

  return (
    <main className="board">
      <h1>tik tack toe</h1>

      <section className="game">
        {arreglovalorBoard.map((_, index) => {
          return (
            <CuadradoSquare
              key={index}
              indicexxxxxxxxxx={index}
              updatetablero={funcionActualizarTablero}
            >
              {arreglovalorBoard[index]}
            </CuadradoSquare>
          );
        })}
      </section>

      <section className="turn">
        <CuadradoSquare isSelected={turnostate == TURNOS.X}>
          {TURNOS.X}
        </CuadradoSquare>
        <CuadradoSquare isSelected={turnostate == TURNOS.O}>
          {TURNOS.O}
        </CuadradoSquare>
      </section>
    </main>
  );
}
export default App;


*/
}
