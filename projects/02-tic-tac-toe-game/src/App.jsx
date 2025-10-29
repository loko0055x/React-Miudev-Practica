import { Children, useState } from "react";

const TURNOS = {
  X: "x",
  O: "o",
};
const CuadradoSquare = ({ children, isSelected, updatetablero, indice }) => {
  console.log("el estado es  : " + isSelected);
  const nameclasecss = `square ${isSelected ? "is-selected" : ""}`;
  return <div className={nameclasecss}>{children}</div>;
};

function App() {
  const [valorBoard, setValorBoard] = useState(Array(9).fill(null));
  const [turnostate, setTurnostate] = useState(TURNOS.X);
  const funcionActualizarTablero = () => {};

  return (
    <main className="board">
      <h1>tik tack toe</h1>

      <section className="game">
        {valorBoard.map((_, index) => {
          return (
            <CuadradoSquare
              key={index}
              index={index}
              updatetablero={funcionActualizarTablero}
            >
              {valorBoard[index]}
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
