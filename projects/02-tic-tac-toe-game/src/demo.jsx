import { useState } from "react";

export function DivFunction({ numberInitial }) {
  const [numberElemento, setNumberElemento] = useState(numberInitial);
  console.log("Numer inicial : ", numberInitial);
  console.log("Numer elemento : ", numberElemento);

  const funcionBoton = () => {
    if (numberElemento == "1") {
      setNumberElemento("0");
    } else {
      setNumberElemento("1");
    }
  };

  return (
    <button onClick={funcionBoton} className="square">
      {numberElemento}
    </button>
  );
}
