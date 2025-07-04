import { Link } from 'react-router-dom';
import { useRecipeContext } from '../context/AppContext';

function RecipeCard({ recipe }) {
    const {
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    } = useRecipeContext();

    if (!recipe) return null;
    const { id, image, title, readyInMinutes, diets, dishTypes } = recipe;

    const tags = [...(diets || []), ...(dishTypes || [])].slice(0, 3);

    const isFav = isFavorite(id);

    const handleFavoriteClick = () => {
        if (isFav) {
            removeFromFavorites(id);
        } else {
            addToFavorites(recipe);
        }
    };

    return (
        <div className="recipe-card">
            <span className="favorite-icon" onClick={handleFavoriteClick}>
                <i className={isFav ? 'fas fa-heart active' : 'far fa-heart'}></i>
            </span>

            <img src={image} alt={title} className="recipe-image" />

            <div className="recipe-details">
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag.length > 12 ? `${tag.slice(0, 12)}...` : tag}
                        </span>
                    ))}
                </div>

                <div className="title-time">
                    <div className="title">{title.length > 22 ? `${title.slice(0, 22)}..` : title}</div>
                    <div className="time">
                        <p><i className="fas fa-stopwatch"></i> {readyInMinutes} Minutes</p>
                    </div>
                </div>

                <Link to={`/recipe/${id}`} className="view-button">View Recipe</Link>
            </div>
        </div>
    );
}

export default RecipeCard;
