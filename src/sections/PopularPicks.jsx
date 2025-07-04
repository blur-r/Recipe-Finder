import { useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import { useRecipeContext } from "../context/AppContext";
import { getPopularRecipes } from "../utils/api";

function PopularPicks() {

    const {
        popularRecipes,
        setPopularRecipes
    } = useRecipeContext();

    useEffect(() => {
        const fetchData = async () => {
            const cachedData = localStorage.getItem("popularRecipes");
            if (cachedData) {
                setPopularRecipes(JSON.parse(cachedData));
                return;
            }

            try {
                const results = await getPopularRecipes();
                setPopularRecipes(results);

                localStorage.setItem("popularRecipes", JSON.stringify(results));
            } catch (error) {
                console.error("Failed to fetch popular recipes:", error);
            }
        };

        fetchData();
    }, [setPopularRecipes]);

    return (
        <>
            <section className="popular-picks">
                <h1>Popular Picks</h1>
                <div className="recipe-cards">
                    {Array.isArray(popularRecipes) && popularRecipes.length > 0 ? (
                        popularRecipes.map(recipe => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))
                    ) : (
                        <p>No popular recipes found.</p>
                    )}
                </div>


            </section>


        </>
    )

}

export default PopularPicks