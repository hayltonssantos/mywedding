import React from 'react'
import './Display.css'

export default function Display({style, text}) {
  
  return (
    <span className={style}>
          {text}
    </span>
  )
}
