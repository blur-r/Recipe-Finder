import Header from "../components/Headerr"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getRecipeDetails } from "../utils/api";
import { useRecipeContext } from "../context/AppContext";

function RecipeDetails() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const { addToFavorites, removeFromFavorites, isFavorite } = useRecipeContext();

    useEffect(() => {
        async function fetchRecipe() {
            try {
                const recipeDets = await getRecipeDetails(id);
                setRecipe(recipeDets);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchRecipe();
    }, [id]);

    if (loading) return <p>Loading Recipe details...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!recipe) return null;

    const isFav = isFavorite(recipe.id);

    return (
        <>

            <div className="recipe-details-page">
                <h1>
                    {recipe.title}
                </h1>
                <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
                <div className="img-btn">
                    <img src={recipe.image} alt={recipe.title} />
                    <button onClick={() => {
                        isFav ? removeFromFavorites(recipe.id) : addToFavorites(recipe);
                    }}>
                        {isFav ? "Remove from Favorites" : "Add to Favorites"}
                    </button>
                </div>

                <div className="recipe-detail">
                    <h2>Recipe Details</h2>
                    <div className="flex">
                        <p>Servings</p>
                        <p>{recipe.servings}</p>
                    </div>

                    <div className="flex">
                        <p>Dish Type</p>
                        <p>
                            {recipe.dishTypes && recipe.dishTypes.length > 4
                                ? recipe.dishTypes.slice(0, 2).join(', ')
                                : recipe.dishTypes?.join(', ') || 'N/A'}
                        </p>
                    </div>

                    <div className="flex">
                        <p>Prep Time</p>
                        <p>{recipe.readyInMinutes} Minutes</p>
                    </div>

                    <div className="tags">
                        {[...(recipe.diets || []), ...(recipe.dishTypes || [])]
                            .slice(0, 3)
                            .map((tag, i) => (
                                <span className="tag" key={i}>
                                    {tag.length > 12 ? `${tag.slice(0, 12)}...` : tag}
                                </span>
                            ))}
                    </div>

                </div>

                <div className="Ingredients">
                    <h2>Ingredients</h2>
                    <ul>
                        {recipe.extendedIngredients?.map((ing, i) => (
                            <li key={i}>{ing.original}</li>
                        ))}
                    </ul>
                </div>

                <div className="Instructions">
                    <h2>Instructions</h2>
                    <ul>
                        {recipe.analyzedInstructions?.[0]?.steps?.map((step, i) => (
                            <li key={i}>{step.step}</li>
                        )) || <p>No instructions available.</p>}
                    </ul>
                </div>

                <div className="nutritions">
                    <div className="nutrient">
                        <p>Calories</p>
                        <span>{recipe.nutrition?.nutrients?.find(n => n.name === 'Calories')?.amount || 'N/A'}kcal</span>
                    </div>
                    <div className="nutrient">
                        <p>Fat</p>
                        <span>{recipe.nutrition?.nutrients?.find(n => n.name === 'Fat')?.amount || 'N/A'}g</span>
                    </div>
                    <div className="nutrient">
                        <p>Protein</p>
                        <span>{recipe.nutrition?.nutrients?.find(n => n.name === 'Protein')?.amount || 'N/A'}g</span>
                    </div>
                </div>


            </div>







        </>
    )
}

export default RecipeDetails