import { useState } from 'react'
import styles from './App.module.css'
import PoweredImage from './assets/powered.png'

function App() {
  const [heightField, setHeightField] = useState(0);
  const [weightField, setWeightField] = useState(0);

  const handleCalculate = () => {
    if(heightField && weightField){
        
    }else {
      alert("Preencha todas as informações!")
    }
  }
  
  return (
  <div className={styles.main}>
    <header>
      <div className={styles.headerContainer}>
        <img src={PoweredImage} alt="Logo" width={150}/>
      </div>
    </header>

    <div className={styles.container}>
      <div className={styles.leftSide}>
          <h1>Calcule seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input 
          type="number"
          placeholder="Digite a sua altura: "
          value={heightField > 0 ? heightField : ""} //Deixar o placeholder até que haja algum valor
          onChange={e => setHeightField(parseFloat(e.target.value))}
          />

          <input 
          type="number"
          placeholder="Digite o seu peso: "
          value={weightField > 0 ? weightField : ""} //Deixar o placeholder até que haja algum valor
          onChange={e => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculate}>Calcular</button>
          
      </div>
      <div className={styles.rightSide}>
          ...
      </div>
    </div>
  </div>
  )
}

export default App
