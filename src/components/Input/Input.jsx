import styles from './Input.module.css'

export default function Input({type, onChange, placeholder, value, width, required = false, missRequired}) {

  return (
    <input 
        style={{
          maxWidth: `${width}`,
          backgroundColor: `${missRequired ? 'lightcoral' : ''}`
        }}
        className={styles.input} type={type}  
        onChange={(e) => {onChange(e.target.value)}} 
        placeholder={placeholder}
        value={value}
        required={required}
        >
    </input>
  )
}


