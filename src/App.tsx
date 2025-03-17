import Item from './components/Item';
import './App.css'

function generateRandomNumber() {
  const number = Math.random() * 30 + 1;
  return Math.floor(number);
}

function generateSumandos() {
  const sumando1 = generateRandomNumber();
  const sumando2 = Math.floor(Math.random() * sumando1) + 1;
  return {id: crypto.randomUUID(), sumando1, sumando2 }
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
      <h1>Sumas</h1>
      <div className="wrap-container">
        { itemsRenderizados }
      </div>
    </>
  )
}

export default App
