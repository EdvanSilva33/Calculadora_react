import { useState } from 'react'
import styles from './App.module.css'

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMc] = useState(null)
  const [resultado, setResultado] = useState('')

  const calcular = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imceCalculado = peso / (alturaMetros * alturaMetros);
      setIMc(imceCalculado.toFixed(2))
    
      if (imceCalculado < 19.3) {
        setResultado  ('Magreza Extrema');
      } else if (imceCalculado <= 25.3) {
        setResultado ( 'Normal');

      } else if (imceCalculado < 30.3) {
        setResultado  ('Sobrepeso');
      } else {
        setResultado  ('Obesidade Morbida');
      }

    
      
    }
  };

  return (
    <div className={styles.container}>

      <div className={styles.content}>
        <h1>Calculadora de IMC</h1>
        <div className={styles.altura}>
          <label> Altura (cm) :</label>
          <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder='Digite a altura ex: 1.70 = 170' />


        </div>
        <div className={styles.peso}>
          <label>Peso (kg) :</label>
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} placeholder='Digite o peso ex: 80' />
        </div>
        <div className={styles.botao}>
          <button type='button' onClick={calcular} className={styles.btn}>Calcular agora</button>
        </div>
      </div>

      <div className={styles.resultdo}>
        <h2>Resultado </h2>
        {imc !== null &&(
          <div>
            <p>seu : {imc}</p>
            <p>{resultado}</p>
            </div>

        )}
     
       
      </div>
    </div>
  )
}

export default App
