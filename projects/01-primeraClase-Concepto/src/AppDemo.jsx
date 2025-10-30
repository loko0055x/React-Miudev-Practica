//importamos otro estilo
import React, { useState } from "react";
import "./container.css";

import { TwitterFollowCarddemo as Twitterx } from "./twiter-followCard";

//tenemos que decirle que esto sera una exportacion para que luego se importe en otra carpeta
export function Appxd() {
  // si queres colocar estilos aqui    =   <article style={{ }}>
  // la forma correcta es doble llave

  //creamos una funcion por asi decirlo
  //solo es una funcion que como argumento recibe una cadena y lo concatena con @
  const UserNameConcat = (username) => `@@${username}`;
  //#######################################################################################
  const elementoConcatenar = <span>@midudev</span>;

  // Elemento vs Componente
  /*
  📚 En resumen:
  🔹 Elemento = Qué se va a mostrar (el resultado).
  🔹 Componente = Cómo se genera ese elemento (la función o clase que lo produce).
  */

  //#######################################################################################
  // por si son muchos argumentos que se tienen que enviar lo puedes enviar dela siguiente forma
  const miudev = {
    usermame: "elonmusk",
    name: "Elon musk",
    argumentoUserName: UserNameConcat,
    inicialIsFollowing: false,
  };

  //creamos un useState
  const arreglostate = useState("midudev");
  const namexd = arreglostate[0];

  const setNombre = arreglostate[1];

  console.log("Renderizamos el nombre : ", namexd); //se ejecuta cada que cambia de estado

  const arreglousers = [
    {
      nombreusuario: "MitocodeNetwork",
      nombres: "Mitocode (Jaime Medina)",
      isfollow: false,
    },
    {
      nombreusuario: "midudev",
      nombres: "Miguel Ángel Durán",
      isfollow: false,
    },
    {
      nombreusuario: "5eniordeveloper",
      nombres: "El Programador Senior",
      isfollow: true,
    },
    {
      nombreusuario: "codemendozaa",
      nombres: "Erix Mendoza",
      isfollow: true,
    },
    {
      nombreusuario: "lpantoja",
      nombres: "Whistler 🇨🇱 (Luis Pantoja)",
      isfollow: false,
    },
  ];
  //======================================================================================
  return (
    <section className="Applicationcx">
      {
        //otra forma
        /*
        arreglousers.map(({nombreusuario, nombres, isfollow }) =>( 
            <Twitterx
              argumentoUserName={UserNameConcat}
              usermame={nombreusuario}
              name={nombres}
              inicialIsFollowing={isfollow}
            >
              {nombres}
            </Twitterx>
          )
        )};
        */
      }
      {
        arreglousers.map((user, index) => {
          const { nombreusuario, nombres, isfollow } = user;
          return (
            <Twitterx
              key={index}
              argumentoUserName={UserNameConcat}
              usermame={nombreusuario}
              name={nombres}
              inicialIsFollowing={isfollow}
            >
              {nombres}
            </Twitterx>
          );
        })
        //
      }
    </section>
  );

  {
    /*
 return (
    //si no le asiganas un argumento ala funcion es o lo toma como undifined

    //        formatUserName={formatUserNameConcat} => le podemos pasar una funcion OJO si se puede

    <section className="Applicationcx">
      <Twitterx
        argumentoUserName={UserNameConcat}
        usermame={namexd}
        name="Miguel angel"
        inicialIsFollowing={true}
      >
        Hola como estas
      </Twitterx>
      {
           {...} =
         resto preditor => pasale cada una delas propiedades de este objeto  como si fuese una prop para
       para mi compoentente
      }
      <Twitterx {...miudev}></Twitterx>
      
       // <button onClick={() => setNombre("pedromichel")}>
     //   <span>dejar de seguir</span>
//</button>
      
    </section>
  );*/
  }
  //======================================================================================
}

{
  /*
  <Twitterx
        argumentoUserName={UserNameConcat}
        isfollowing={false}
        usermame="pheralb"
        name="Pablo hernandez"
      ></Twitterx>
      <Twitterx
        argumentoUserName={UserNameConcat}
        usermame="vxnder"
        name="vanderhart"
      ></Twitterx>
  */
}
