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

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
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