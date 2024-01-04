import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import style from './Questions.module.css'
import Background from '../../components/ComponentsCounter/Background/Background'
import firebaseApp from '../../../services/firebase'
import {getFirestore, collection, onSnapshot, query} from 'firebase/firestore'

export default function Questions() {
  const {id} = useParams()
  const [page, setPage] = useState(parseInt(id))
  const [questions, setQuestions] = useState([])
  
  const db = getFirestore(firebaseApp)

  const morePage = function (){
    setPage(page + 1)
    return(page)
  }
  const lessPage = function (){
    setPage(page - 1)
    return page
  }

  const prev = function(){
    if (page <= 0){
      return (
        <a onClick={() => lessPage(id)} href={`/thefirsty`}>
          Prev
        </a>
        )
    }else{
      return (
        <a onClick={() => lessPage(id)} href={`/questions/${page}`}>
          Prev
        </a>
        )
    }
  }
  
  useEffect(()=>{
    const q = query(collection(db,`questions/1/q${page}`))

     onSnapshot(q,(querySnapshot)=>{
      const aux = []
      querySnapshot.forEach((doc)=>{
        /* console.log(doc.id, doc.data) */

        aux.push({
          id:doc.id,
          ...doc.data()
        })

      })
      setQuestions([...aux])
    })
  }, [])

  const quest = function(numb){
    let numbE = ''
    if (numb === 1){
      numbE = questions.map((question)=>question.um)
    }
    if (numb === 2){
      numbE = questions.map((question)=>question.dois)
    }
    if (numb === 3){
      numbE = questions.map((question)=>question.tres)
    }
    return(
      <div className={style.inputs}>
            <input type='radio' 
                    id={`${numbE}`}
                    name={`${numb}`} 
                    value={`${numb}`}/>
              <label for={`${numb}`}>
                <p>{numbE}</p>
              </label>
          </div>
    )
  }

  return (
    <>
    <Background/>
    <div className={style.main}>
      <div className={style.title}>
        <h2>{questions.map((question)=>question.id)}</h2>
        <div className={style.questions}>
          {quest(1)}
          {quest(2)}
          {quest(3)}
        </div>
      </div>
      <div className={style.divButtons}>
        <button>
          {prev()}
        </button>
        <button>
          <a onClick={() => morePage(id)} 
            href={`/questions/${page}`}>
            Next
          </a>
        </button>
      </div>

    </div>
  </>
  )
}
