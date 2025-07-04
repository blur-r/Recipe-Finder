import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useRecipeContext } from "../context/AppContext";
import { getRandomRecipes } from "../utils/api";


function RandomRecipe() {

    const {
        currentRecipe,
        setCurrentRecipe,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    } = useRecipeContext();

    const isFav = isFavorite(currentRecipe?.id);;

    const handleFavoriteClick = () => {
        if (isFav) {
            removeFromFavorites(currentRecipe.id);
        } else {
            addToFavorites(currentRecipe);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await getRandomRecipes();
                setCurrentRecipe(results[0]);
            } catch (error) {
                console.error("Failed to fetch random recipe:", error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 100000);

        return () => clearInterval(interval);
    }, [setCurrentRecipe]);
    return (
        <>
            <section className="random-recipe">
                <h1>Random Recipe</h1>
                <div className="random-recipe-container">
                    <div className="random-recipe-img">
                        <img src={currentRecipe?.image} alt={currentRecipe?.title} />
                    </div>

                    <div className="random-recipe-text">
                        <h2>{currentRecipe?.title}  </h2>
                        <p dangerouslySetInnerHTML={{ __html: currentRecipe?.summary || '' }} />
                        <div className="timer-serving">
                            <p><i className="fas fa-stopwatch"></i> {currentRecipe?.readyInMinutes} Minutes</p>
                            -
                            <p><i className="fas fa-utensils"></i> {currentRecipe?.servings} Servings</p>
                        </div>
                        <div className="random-recipe-buttons">
                            {[...(currentRecipe?.diets || []), ...(currentRecipe?.dishTypes || [])].slice(0, 3).map((tag, i) => (
                                <span key={i} className="tag">{tag}</span>
                            ))}

                        </div>
                        <div className="last-container">
                            <Link to={`/recipe/${currentRecipe?.id}`} className="start-cooking">
                                View Recipe
                            </Link>
                            <i className={isFav ? 'fas fa-heart active' : 'far fa-heart'} onClick={handleFavoriteClick}></i>
                        </div>
                    </div>
                </div>




            </section>
        </>
    )
}

export default RandomRecipe