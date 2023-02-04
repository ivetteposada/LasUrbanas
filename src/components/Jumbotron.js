import React from 'react'
import Imagen from '../assets/IMG_2914.jpg'

function Jumbotron() {
  return (
    <section className="introduction">
      <p className="text-introduction">Somos una empresa 100% chihuahuense fundada y operada por mujeres, lo que un día fue un sueño tuvimos la oportunidad de convertirlo en una realidad. </p>
      <img className="img-jumbo" src={Imagen}/>
    </section>
    )
}

export {Jumbotron};

