
import './App.css';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import {useRef} from 'react'



function App() {

  const bodyRef = useRef()
  
  return (
    <div className="container">
      <div className='body-filter' ref={bodyRef}></div>
      <Nav 
      bodyRef={bodyRef}/>

      <Hero />

      <Footer />

    </div>
  );
}

export default App;
