import Alert from "react-bootstrap/Alert";
import style from './AlertDiv.module.css'

import React from 'react'

export default function AlertDiv({text}) {
  return (
    <div className={style.div}>
      <Alert variant="success" style={{ width: "42rem" }}>
        <Alert.Heading>
          {text}
        </Alert.Heading>
      </Alert>
    </div>
  )
}
