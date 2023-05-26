import React, { useEffect, useState } from 'react'
import styles from './Main.module.css'
import useCountdown from '../Counter/Counter'
import PreCard from '../PreCard/PreCard'
import Display from '../Display/Display'
import Button from '../Button/Button'
import { GiConfirmed, GiPresent } from "react-icons/gi";
import {FaMapPin } from "react-icons/fa";

export default function Text(
                              {enableTop = true, 
                                enableMiddle = true, 
                                enableBottom = true}
  ) {
  const [day, hour, minute, second] = useCountdown('2024-10-21')
  const link = "https://api.whatsapp.com/send/?phone=5521976618713&text=Ol%C3%A1%2C+confirmo+minha+presen%C3%A7a+na+Festa+da+Jennyni.+Dia+02+de+Junho%2C+%C3%A0s+21h.+Nome+Completo%3A&type=phone_number&app_absent=0"
  const sug = 'https://drive.google.com/file/d/1mi5u9Q6fc5w_nuhlMWDqVDRjNHy87mhs/view?usp=sharing'
  const mapa = 'https://goo.gl/maps/S2ykJjg2UxoPWTmd8'


  const [isHover, setIsHover] = useState();

  const handleMouseEnter = () =>{ setIsHover(true) }
  const handleMouseLeave = () =>{ setIsHover(false) }

  const top = (enable) => {
    
    return enable ? (
      <section className={styles.container}>
        <Display text='Wendding' style='wendding'/>
        <Display text='Haylton & Camile' style='name'/>
        <Display text='Save The Date' style='titulo'/>
      </section>

    ) : ('')
  }

  
  const middle = (enable) => {
    
    return enable ? (
      <>
        <PreCard numberPhoto={1} onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <Display style={isHover ? 'text:hover' : 'text'} text={day} isHoverSet={isHover}/>
          <Display style='nameBox' text='Days' isHoverSet={isHover}/>
        </PreCard>
        <PreCard numberPhoto={2}>
          <Display style='text' text={hour}/>
          <Display style='nameBox' text='Hours'/>
        </PreCard>
        <PreCard numberPhoto={3}>
          <Display style='text' text={minute}/>
          <Display style='nameBox' text='Minutes'/>
        </PreCard>
        <PreCard numberPhoto={4}>
          <Display style='text' text={second}/>
          <Display style='nameBox' text='Seconds'/>
        </PreCard>
        <Display text="22 | Outubro | 17H" style='date'></Display>
      </>

    ) : ('')
  }
  const bottom = (enable) => {
    
    return enable ? (
      <>
        <div style={
        {display:'flex',
          flexWrap: 'wrap',
          width: '100%',
          padding: '40px'
        }
      }>
        
          <Display text="Assim, eles já não são dois, mas sim uma só carne. " 
                        style='textDate'>              
          </Display>
          <Display text="Portanto, o que Deus uniu, ninguém separe. Mateus 19:6 " 
                        style='textDate'>              
          </Display>
        </div>
        <Button link={mapa} text='Local' style='nameBox'>
            <FaMapPin style={{color: 'white', fontSize: '50px'}}/>
        </Button>
        <Button link={link} text='Confirmar Presença' style='nameBox'>
            <GiConfirmed style={{color: 'white', fontSize: '50px'}}/>
        </Button>
        <Button link={sug} text='Sugestão de presente' style='nameBox'>
            <GiPresent style={{color: 'white', fontSize: '50px'}}/>
        </Button>
     
      </>

    ) : ('')
  }


  return ( 
  <>
    <div className={styles.wrap}>
      {top(enableTop)}
      {middle(enableMiddle)}
      {bottom(enableBottom)}
  </div>
  

  </>
  )
}
