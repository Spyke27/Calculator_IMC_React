import { useState } from 'react'
import styles from './App.module.css'
import PoweredImage from './assets/powered.png'

function App() {

  return (
  <div className={styles.main}>
    <header>
      <div className={styles.headerContainer}>
        <img src={PoweredImage} alt="Logo" width={150}/>
      </div>
    </header>
  </div>
  )
}

export default App
