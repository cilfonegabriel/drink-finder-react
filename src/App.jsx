import { Container } from "react-bootstrap"
import Formu from "./components/Form"

function App() {

  return (
    <>
      <header className="py-5">
        <h1>Drink Finder</h1>
      </header>

      <Container className="mt-5">
        <Formu />
      </Container>
    </>
    
  )
}

export default App
