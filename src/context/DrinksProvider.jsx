import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext();

const DrinksProvider = ({children}) => {

    const[drinks, setDrinks] = useState([])

    const getDrinks= async datos => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.name}&c=${datos.category}`

            const { data } = await axios(url)

            setDrinks(data.drinks)

        } catch (err) {
            console.log(err);
        }
    }

    return(
        <DrinksContext.Provider
            value={{
                getDrinks,
                drinks
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