import Item from './components/Item';
import './App.css'

function App() {

  const datos = [
    {id: 1, name: 'Ele 1'},
    {id: 1, name: 'Ele 2'},
    {id: 3, name: 'Ele 3'}
  ]

  const itemsRenderizados = [];

  for (let i = 0; i < datos.length; i++) {
    const elemento = datos[i];
    itemsRenderizados.push(<Item key={elemento.id} id={elemento.id} name={elemento.name} />);
  }

  return (
    <>
      <h1>Sumas</h1>
      { itemsRenderizados }
    </>
  )
}

export default App
