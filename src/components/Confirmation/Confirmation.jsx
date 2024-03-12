import React from 'react'
import Button from '../ComponentsCounter/Button/Button'
import { FcInvite } from 'react-icons/fc'
import styles from './Confirmation.module.css'

export default function Confirmation({text = '', textColor = '', link = ''}) {
  return (
    <div className={styles.confirmation}>
      <h1>{text}</h1>
        <Button
          link={link}
          navigate={link}
          text={'Confirm'}
          textColor={textColor}
          target='_self'
        >
            <FcInvite style={{ color: 'white', fontSize: '100px' }} />
          </Button>
      </div>
  )
}
