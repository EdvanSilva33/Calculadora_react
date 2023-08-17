import { useState } from 'react'
import styles from './App.module.css'

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null)
  const [resultado, setResultado] = useState('')
  const [nome, setNome] = useState('')

  const calcular = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imceCalculado = peso / (alturaMetros * alturaMetros);
      setImc(imceCalculado.toFixed(2))
    
      if (imceCalculado < 19.3) {
        setResultado  (`Magreza Extrema, ${nome} procure um medico pode está representar alguma doença que está provocando o emagrecimento ou desnutrição.`);
      } else if (imceCalculado <= 25.3) {
        setResultado ( `Parabens ${nome} você estar dentro da faixa de peso normal significa ter um peso considerado adequado para sua altura.` );

      } else if (imceCalculado < 30.3) {
        setResultado  (` Opa ! Sobrepeso, ${nome} O sobrepeso é uma condição em que a pessoa pesa mais do que é considerado adequado para aquela altura`);
      } else {
        setResultado  (`Cuidado! Obesidade Morbida, ${nome} isso significa que você está precisando urgente de uma dieta e exercicios fisico. `);
      }
  
    }
  };
  const limparResultados = () => {
    setNome('');
    setAltura('');
    setPeso('');
    setImc(null);
    setResultado('');
  };
  return (
    <div className={styles.container}>

      <div className={styles.content}>
        <h1>Calculadora de IMC</h1>
        <div className={styles.altura}>
          <label>Nome :</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Digite Seu nome' />


        </div>
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
        
       <p className={styles.cliente}>Nome: {nome}</p>
       <p>Resultado:</p>
       <p className={styles.resultados}> {resultado}</p>
       <div className={styles.botoes}>
       <span className={styles.imc}>Seu IMC é: {imc}</span>

       <button className={styles.limpar} onClick={limparResultados}>Limpar Resultados</button>
       </div>
      </div>
    </div>
  )
}

export default App
