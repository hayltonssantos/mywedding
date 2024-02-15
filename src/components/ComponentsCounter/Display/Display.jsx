import React from 'react'
import './Display.css'

export default function Display({style, text, color}) {
  
  return (
    <span className={style} style={{color: `${color}`}}>
          {text}
    </span>
  )
}
