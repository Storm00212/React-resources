
import './App.css'
import Jokes from './components/Jokes'
import jokesData from './data/data.json'

function App() {

  return (
    <>
      {
        jokesData && jokesData.map((joke) => (
          <div key={joke.id} className='jokeContainer'>
            <Jokes joke={joke} />
          </div>
        ))
      }
    </>
  )
}

export default App
