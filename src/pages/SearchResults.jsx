import { useRecipeContext } from '../context/AppContext';
import RecipeCard from '../components/RecipeCard';
import Headerr from '../components/Headerr';


// const navigate = useNavigate();

function SearchResults() {
    const { searchCache, searchQuery } = useRecipeContext();

    return (
        <>
            <Headerr />
            <div className='con'>
                <div className="results">
                    <h1>Showing recipes for: {searchQuery ? searchQuery : 'your ingredients'}</h1>
                </div>

                <div className="results-container">
                    {searchCache.length > 0 ? (
                        searchCache.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))
                    ) : (
                        <p>No recipes found. Try searching for something else.</p>
                    )}
                </div>
            </div>

        </>
    )
}

export default SearchResults