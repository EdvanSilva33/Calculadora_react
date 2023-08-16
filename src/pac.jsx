import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imcCalculado = peso / (alturaMetros * alturaMetros);

      let classificacao = '';
      if (imcCalculado < 18.5) {
        classificacao = 'Magreza';
      } else if (imcCalculado < 24.9) {
        classificacao = 'Normal';
      } else if (imcCalculado < 29.9) {
        classificacao = 'Sobrepeso';
      } else {
        classificacao = 'Obesidade';
      }

      const imcMessage = `Seu IMC é: ${imcCalculado.toFixed(2)}\nClassificação: ${classificacao}`;
      alert(imcMessage);
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Altura (cm):</label>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>
      <div>
        <label>Peso (kg):</label>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
    </div>
  );
}

export default App;
