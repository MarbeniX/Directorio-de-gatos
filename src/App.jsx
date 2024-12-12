import Gato from ".//components/gato";
import './css/index.css'
import Gato1 from './images/Gato1.png'
import Gato2 from './images/Gato2.png'
import Gato3 from './images/Gato3.png'


function App() {
  return (
    <main>
      <Gato 
        img = {Gato1}
        name = "Mr. Whiskerson"
        phone = "(212) 555-1234"
        email = "mr.whiskaz@natnap.meow"
      />
      <Gato
        img = {Gato2}
        name = "Fluffykins"
        phone = "(212) 555-2412"
        email = "flufff@me.com"
      />
      <Gato
        img = {Gato3}
        name = "Pusskins"
        phone = "(212) 555-6666"
        email = "thecat@hotmail.com"
      />
    </main>
  )
}

export default App
