import { createContext, useState, useContext, useEffect } from "react"

const AppContext = createContext()

export const useRecipeContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (recipe) => {
        setFavorites(prev => [...prev, recipe])
    }

    const removeFromFavorites = (recipeId) => {
        setFavorites(prev => prev.filter(recipe => recipe.id !== recipeId))
    }

    const isFavorite = (recipeId) => {
        return favorites.some(recipe => recipe.id === recipeId)
    }

    const [popularRecipes, setPopularRecipes] = useState([])
    const [randomRecipes, setRandomRecipes] = useState([])
    const [currentRecipe, setCurrentRecipe] = useState(null);
    const [searchCache, setSearchCache] = useState({});
    const cacheSearchResults = (key, data) => {
        setSearchCache(prev => ({
            ...prev,
            [key]: data,
        }));
    };

    const [searchQuery, setSearchQuery] = useState('');


    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        popularRecipes,
        setPopularRecipes,
        randomRecipes,
        setRandomRecipes,
        currentRecipe,
        setCurrentRecipe,
        searchCache,
        setSearchCache,
        cacheSearchResults,
        searchQuery,
        setSearchQuery
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}