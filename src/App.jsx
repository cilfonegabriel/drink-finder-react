import { Container } from "react-bootstrap"
import Formu from "./components/Form"
import DrinksList from "./components/DrinksList"
import { CategoriesProvider } from "./context/CategoriesProvider"
import { DrinksProvider } from "./context/DrinksProvider"

function App() {

  return (
    <CategoriesProvider>
      <DrinksProvider>
        <header className="py-5">
          <h1>Drink Finder</h1>
        </header>

        <Container className="mt-5">
          <Formu />
          <DrinksList />
        </Container>
      </DrinksProvider>

    </CategoriesProvider>
    
  )
}

export default App
