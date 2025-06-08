import './App.css'
// import About from './components/about/About'
// import Home from './components/home/Home'
import { Navbar } from './components/nav/Navbar'
import Profile from './components/profile/Profile'
import useravatar from './assets/images/useravatar.webp';

function App() {


  return (
    <>
      <Navbar />
      {/* <Home />
      <About /> */}
      <Profile
        name="Mary Johnson"
        avatar="https://randomuser.me/api/portraits/women/44.jpg"
        bio="Mary Johnson is a dedicated dairy farmer with over 10 years of experience in the industry. She is passionate about sustainable farming practices and ensuring the highest quality milk for her customers."
      />

      <Profile
        name="John Smith"
        avatar="https://randomuser.me/api/portraits/men/32.jpg"
        bio="John Smith has been a dairy farmer for over 15 years. He is committed to modernizing dairy farming through innovative management systems and practices, ensuring both quality and efficiency."
      />

      <Profile
        name="Alice Brown"
        avatar={useravatar}
        bio="Alice Brown is a third-generation dairy farmer who believes in the importance of community and sustainability. She works tirelessly to maintain the health of her cows and the quality of her milk."
      />

    </>
  )
}

export default App
