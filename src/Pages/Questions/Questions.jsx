import React, {useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import style from './Questions.module.css'
import Background from '../../components/ComponentsCounter/Background/Background'
import firebaseApp from '../../../services/firebase'
import {getFirestore, collection, onSnapshot, query} from 'firebase/firestore'
import {PointContext} from '../../context/points'

export default function Questions() {
  const {id} = useParams()
  const [page, setPage] = useState(parseInt(id))
  const [questions, setQuestions] = useState([])
  const {point, getPoint} = useContext(PointContext)
  
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

  return (
    <>
    <Background/>
    {()=>attPoint()}
    <div className={style.pontos}>Pontos: {point}</div>
    <div className={style.main}>
      <div className={style.title}>
        <h2>{questions.map((question)=>question.id)}</h2>
        <div className={style.questions}>
          <div className={style.inputs}>
            <input type='radio' 
                    id='1' 
                    name='1' 
                    value='1'/>
              <label for='1'>
                <p>{questions.map((question)=>question.um)}</p>
              </label>
          </div>
          <div className={style.inputs}>
            <input type='radio' 
                    id='2' 
                    name='2' 
                    value='2'/>
              <label for='2'>
                <p>{questions.map((question)=>question.dois)}</p>
              </label>
          </div>
          <div className={style.inputs}>
            <input type='radio' 
                    id='3' 
                    name='3' 
                    value='3'/>
              <label for='3'>
                <p>{questions.map((question)=>question.tres)}</p>
              </label>
          </div>
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
