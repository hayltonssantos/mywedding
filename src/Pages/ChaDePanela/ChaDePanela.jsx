import React, { useState } from 'react';
import styles from './ChaDePanela.module.css'

function ChaDePanela() {
  const [items, setItems] = useState([
    { id: 1, name: 'Panela', selected: false },
    { id: 2, name: 'Frigideira', selected: false },
    { id: 3, name: 'Liquidificador', selected: false },
    // Adicione mais itens conforme necessário
  ]);

  const handleCheckboxChange = (itemId) => {
    const updatedItems = items.map(item =>
      item.id === itemId ? { ...item, selected: !item.selected } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className={styles.main}>
      <h1>Lista de Chá de Panela</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.selected}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <label>{item.name}</label>
            {item.selected ? "(Já retirado)" : ""}
          </li>
        ))}
      </ul>
      <button>Enviar Itens Selecionados</button>
    </div>
  );
}

export default ChaDePanela;
