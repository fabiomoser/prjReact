import './App.css'
import './estilos.css'
import imagen from './img/rey_atanagildo.png'

function App() {
  let nombre = 'Fabio'
  return (
    <div className='fondo'>
      <img src={imagen} />
      <br />
      <input type='text' />
      <p className='texto'>{nombre}</p>

    </div>
  )
}

export default App
