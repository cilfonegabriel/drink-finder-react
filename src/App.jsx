import { Container } from "react-bootstrap"
import Formu from "./components/Form"
import { CategoriesProvider } from "./context/CategoriesProvider"

function App() {

  return (
    <CategoriesProvider>
      <header className="py-5">
        <h1>Drink Finder</h1>
      </header>

      <Container className="mt-5">
        <Formu />
      </Container>
    </CategoriesProvider>
    
  )
}

export default App
