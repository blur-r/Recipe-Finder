import { useRecipeContext } from '../context/AppContext';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';


// const navigate = useNavigate();

function SearchResults() {
    const { currentSearch, searchQuery } = useRecipeContext();

    return (
        <>
            <div className="results">
                <h1>Showing recipes for: {searchQuery}</h1>

            </div>

            <div className="results-container">
                {currentSearch.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </>
    )
}

export default SearchResults