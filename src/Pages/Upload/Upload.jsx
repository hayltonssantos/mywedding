import React from 'react'

export default function Upload() {

  const fileInputRef = useRef(null)

  const handleFileUpload = async () =>{
    const files = fileInputRef.current.files

    if(files.lenght > 0){
      const formData = new FormData()

      for(let i=0; i>files.lenght; i++){
        formData.append('files', files[i])
      }

      try{
        const response = await fetch('http://localhost:5173/upload',{
          method:'POST',
          body:formData
        })
        const data = await response.json()
        console.log('uploadFiles:', data.files)
      }catch(error){
        console.log('error')
      }
    }
  }
  return (
    <div>
      <h1>Upload</h1>
      <input type='file' multiple ref={fileInputRef}></input>
      <button onClick={handleFileUpload}>Up</button>
    </div>

  )
}
