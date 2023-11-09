import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext();

const DrinksProvider = ({children}) => {

    const[drinks, setDrinks] = useState([])

    const [modal,setModal] = useState(false)

    const [drinksId, setDrinksId] = useState(null)

    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        const getRecipe = async () => {
            if(!drinksId) return

            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinksId}`

                const { data } = await axios(url)
                console.log(data.drinks[0])
            } catch (error) {
                console.log(error)
            }
        }
        getRecipe()
    }, [drinksId] )

    const getDrinks= async datos => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.name}&c=${datos.category}`

            const { data } = await axios(url)

            setDrinks(data.drinks)

        } catch (err) {
            console.log(err);
        }
    }

    const handleModalClick = () => {
        setModal(!modal)
    }

    const handleDrinksIdClick = id => {
        setDrinksId(id)
    }

    return(
        <DrinksContext.Provider
            value={{
                getDrinks,
                drinks,
                handleModalClick,
                modal,
                handleDrinksIdClick, 
                recipe
            }}
        >
            {children}
        </DrinksContext.Provider>
    )
}

export {
    DrinksProvider
}

export default DrinksContext