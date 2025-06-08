import './App.css'
import myPic from './assets/professional.avif'

function App() {
  const myName: string = "Brian Kemboi";
  interface IDetails {
    Id: number;
    country: string;
    occupation: string;
  }
  const moreDetails: IDetails = {
    Id: 12345,
    country: "Kenya",
    occupation: "Technical Trainer"
  }

  const fevoriteProgrammingLangauges: string[] = [
    "JavaScript",
    "TypeScript",
    "C",
    "Java",
    "C#"
  ]


  return (
    <>
      <header id='app-header'>
        <div className='text-container'>
          <h1>My name is {myName}</h1>
          <p>My ID is {moreDetails.Id}</p>
          <p>I am from {moreDetails.country}</p>
          <p>I work as a {moreDetails.occupation}</p>
          <h2>My favorite programming languages are:</h2>
          {/* <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>C</li>
        <li>Java</li>
        <li>C#</li>
      </ul> */}


          <ul style={{ backgroundColor: "green", color: "white", listStyle: "none" }}>
            {
              fevoriteProgrammingLangauges.map((lang, index) => (
                <li key={index}> {lang}</li>
              ))
            }
          </ul>
        </div>
        <div className='image-container'>
          <img src={myPic} alt="Brian Kemboi" />
        </div>

      </header>



    </>
  )
}

export default App
