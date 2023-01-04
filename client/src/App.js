import Nav from './components/Nav/index.js'
import Footer from './components/Footer'
import Homepage from './components/pages/Homepage'
import './style.css'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}

export default App;
