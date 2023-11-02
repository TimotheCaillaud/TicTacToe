import './App.css'
import Game from './components/Game'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Tic-Tac-Toe</h1>
      </header>
      <div className='App-content'>
        <Game />
      </div>
    </div>
  )
}

export default App;
