import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import { useState } from 'react';
import News from './Components/News';
import Footer from './Components/footer';

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="App">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />

      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className="con bg-dark mb-3">
          <Navbar />
        </div>
        <div>
          <News />
        </div>
        <Footer />
      {/* </header> */}
    </div>
  );
}

export default App;
