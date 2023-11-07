import { useState, useEffect, createContext } from "react";

const CategoriesContext = createContext();

const CategoriesProvider = ({children}) => {

    return(
        <CategoriesContex.Provider
            value={{}}
        >
            {children}
        </CategoriesContex.Provider>
    )
}

export {
    CategoriesProvider
}

export default CategoriesContext