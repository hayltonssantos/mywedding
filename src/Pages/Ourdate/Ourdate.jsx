import React from 'react'
import style from './Ourdate.module.css'
import gif from '../../data/bebesorrindo.gif'

export default function Ourdate() {
  return (
    <div className={style.container}>
      <p>Desculpa rasgar as outras</p>
      <div>
        <section>
        <figure class={style.gif}>
              <img classname={style.img}  width="250" src={gif}/>
            </figure>
        </section>
      </div>
      <p>Prometo que farei de novo, bjbj, te amo, sdds</p>
    </div>
  )
}
