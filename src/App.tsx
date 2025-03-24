import Item from './components/Item';
import './App.css'

function generateRandomNumber() {
  const number = Math.random() * 30 + 1;
  return Math.floor(number);
}

function generateSumandos(intervalo = { min: 1, max: 23 }, diferenciaMinima = 7) {

    let value1, value2;

    do {
        // Generar value1 dentro del intervalo
        value1 = Math.floor(Math.random() * (intervalo.max - intervalo.min)) + intervalo.min;

        // Generar value2 dentro del intervalo, asegurando que sea mayor que value1
        value2 = Math.floor(Math.random() * (intervalo.max - value1)) + value1 + 1;

    } while (value2 - value1 < diferenciaMinima); // Asegurar que la diferencia sea al menos la mínima especificada

    return {id: crypto.randomUUID(), sumando1: value2, sumando2: value1 };


}


function App() {

  const datos = [];

  const itemsRenderizados = [];

  for( let i = 0; i < 9; i++) {
      const randomSum = generateSumandos();
      datos.push(randomSum);
  }

  for (let i = 0; i < datos.length; i++) {
    const elemento = datos[i];
    itemsRenderizados.push(<Item key={elemento.id} sumando1={elemento.sumando1} sumando2={elemento.sumando2} />);
  }

  return (
    <>
      <h1>Sumación</h1>
      <div className="wrap-container">
        { itemsRenderizados }
      </div>
    </>
  )
}

export default App
