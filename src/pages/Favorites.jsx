import RecipeCard from "../components/RecipeCard";
import { useRecipeContext } from "../context/AppContext";
import Headerr from '../components/Headerr';


function Favorites() {

    const {
        favorites
    } = useRecipeContext();

    return (
        <>
            <Headerr />
            <div className="fav">
                <h1>
                    Favorites
                </h1>
                <p>
                    Your Saved Recipes in One Place
                </p>
                <div className="favs-container">
                    {favorites.length > 0 ? (
                        favorites.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))
                    ) : (
                        <p className="empty">You have not added any favorites</p>
                    )}

                </div>
            </div>
        </>
    )
}

export default Favorites