import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [fetchData, setFetchData] = useState([])

  useEffect(() => {

    fetch("http://localhost:8000/products")
    .then(res => {
      setFetchData(res)
      console.log(fetchData)
    })
    .catch(err => {
      console.error(err)
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={'./images/logo192.png'} className="App-logo" alt="logo" />
        <nav>
          <ul>
            <li>API 1</li>
            <li>API 2</li>
            <li>API 3</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>API tester front-end</h1>
        <div className='api-GET-card'>
          <p>Velit Lorem rutrum conubia blandit molestie persian semper norwegian forest cat petting eyes arcu loves eyes Praesent french! Mr. Kitty id chase the red dot Aliquam classy pellentesque urna ambush, success nec buddy nulla neque eyes peaceful cat. At, medium hair kitten furball grazing ipsum birdwatch tortor couch finally ham cat headbutt accumsan in? Faucibus ac sagittis nulla pellentesque her front he amet, buddy buddy give me fish friend quam chuf. Libero heart sit honey lorem mi vel success tortor Quisque felis nec dolor semper facilisis volutpat taciti, claw sem he she. Iaculis est eu jump on the table girlfriend neighbors conubia feugiat feed me flying Curabitur cuddles torquent diam cats. Belly, puss and boots nascetur kitty saved?</p>
        </div>
      </main>
    </div>
  );
}

export default App;
