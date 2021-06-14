import { useEffect, useRef } from 'react';
import './App.css';
import lottie from 'lottie-web';

function App() {

  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./loading.json')
    })
    
  }, [])

  return (
    <div className="App">
        <h1 className="title">mentorX</h1>
        <div className="container" ref={container}></div>
        <h1 className="soon">Very Soon in your Hands</h1>
    </div>
  );
}

export default App;
