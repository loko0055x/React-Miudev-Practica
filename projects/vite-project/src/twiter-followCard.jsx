//importamos hooks = useState
// use state =añadir ciertas funcionalidad en react o poder ejecutar arbitrario cuando ocurre cierta cosas
import { useState } from "react";

export function TwitterFollowCarddemo({
  argumentoUserName,
  usermame = "unknown-desconocido", //valor por defecto por si no envia el argumento
  name,
  inicialIsFollowing,
  children,
}) {
  //==================================================================================================================

  //useState(false) => aca le decimos cual es el valor por defecto o valor inicial  de nuestro estado ;
  //const statedemo = useState(false);
  // cuando usas  lo arriba te retorna un arreglo de  2 elementos
  //en este momento

  // 1er elemento arreglo =  el valor del estado
  // 2do elemento arreglo =  una función que permite actualizar ese valor (y forzar el re-render)
  // el 2do elemento es como un un arreglo para actualizar

  //const isfollowingxD = statedemo[0];
  //const setIsfollowingxD = statedemo[1];
  //================================================================================================================================

  // lo de arriba son 3 lineas de codigo esto en javascript es como python hay una forma de reducir codigo
  const [isFollowElementox, setIsFollowElemento] = useState(inicialIsFollowing);

  //verificamos el  isfollowing = para cambiar el diseño
  const text = isFollowElementox ? "Siguiendo" : "Seguir";

  //cambiamos el diseño segun el boolean
  const buttonClaseNameClassClass = isFollowElementox
    ? "twclass-folow-Card-button is-following"
    : "twclass-folow-Card-button";

  //argumentoUserName es una funcion por asi decirlo que como parametro tiene una cadena de strign que tienes que
  // pasarle

  const concatLinkImg = `https://unavatar.io/${usermame}`;

  /*src="concatLinkImg"*/

  //creamos una funcion
  const funcionBoton = () => {
    setIsFollowElemento(!isFollowElementox);
    /*  if (isFollowElementox) {
      setIsFollowElemento(false);
    } else {
      setIsFollowElemento(true);
    }*/
  };

  console.log(
    "[Twitterx] renderizamos el nombre : ",
    usermame + " state " + inicialIsFollowing
  ); //se ejecuta cada que cambia de estado

  return (
    <article className="twclass-folow-Card">
      <header className="twclass-folow-header">
        <img
          className="twclass-folow-avatar"
          src={`https://unavatar.io/${usermame}`}
          alt="El avatar de midudev"
        />
        <div className="twclass-folow-Card-info">
          <strong>{children}</strong>
          <span className="twclass-folow-Card-infousername">
            {argumentoUserName(usermame)}
          </span>
        </div>
      </header>

      {
        // aside = envuelve un btoon que asu vez envuelve un texto(seguir)
        //a eso se le llama children
        //seguir => sus hijos
      }
      <aside>
        <button className={buttonClaseNameClassClass} onClick={funcionBoton}>
          <span className="twclass-folowCard-Text"> {text}</span>

          <span className="twclass-folowCard-StopFollowed">
            dejar de seguir
          </span>
        </button>
      </aside>
    </article>
  );
}
