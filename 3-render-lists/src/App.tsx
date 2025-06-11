import './App.css'
import Jokes from './components/Jokes'
import jokesData from './data/data.json'

function App() {

  return (
    <>
      {
        jokesData && jokesData.map((joke, index) => (

          <div key={index} className="joke">
            <div key={joke.id} className='jokeContainer'>
              <Jokes joke={joke.joke} rating={joke.rating} />
            </div>

          </div>
        ))
      }
    </>
  )
}

export default App
