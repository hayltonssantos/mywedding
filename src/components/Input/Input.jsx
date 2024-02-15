import styles from './Input.module.css'

export default function Input({type, onChange, placeholder, value}) {
  
  return (
    <input className={styles.input} type={type}  
        onChange={(e) => {onChange(e.target.value)}} 
        placeholder={placeholder}
        value={value}>
    </input>
  )
}


