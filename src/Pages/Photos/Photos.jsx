import React, { useState, useEffect } from 'react';
import styles from './Photos.module.css';
import foto1 from './1.jpg'
import foto2 from './2.jpg'
import foto3 from './3.jpg'
import foto4 from './4.jpg'
import foto5 from './5.mp4'
import foto6 from './6.jpg'
import foto7 from './7.jpg'
import foto8 from './8.jpg'
import foto9 from './9.jpg'
import foto10 from './10.jpg'
import foto11 from './11.jpg'
import foto12 from './12.jpg'
import foto13 from './13.jpg'
import foto14 from './14.jpg'

function Photos() {
  const imagens = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8,
    foto9,
    foto10,
    foto11,
    foto12,
    foto13,
    foto14,
    
    // Adicione aqui os URLs das 12 fotos
    // Exemplo: 'https://example.com/photo1.jpg'
  ];

  const [imagemAtual, setImagemAtual] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Avança para a próxima imagem
      setImagemAtual((prevImagem) => (prevImagem + 1) % imagens.length);
    }, 5000); // Troca de imagem a cada 2 segundos

    // Limpeza do intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []); // O array vazio [] assegura que o efeito é executado apenas uma vez no montar do componente


  return (
    <div className={styles.main}>
      <div className={styles.img}
        style={{
          background: `url(${imagens[imagemAtual]}) no-repeat center/80%` ,
        }}
      ></div>
      <div className={styles.img}
        style={{
          background: `url(${imagens[imagemAtual+1]}) no-repeat center/80%`,
        }}
      ></div>
    </div>
  );
}

export default Photos;
