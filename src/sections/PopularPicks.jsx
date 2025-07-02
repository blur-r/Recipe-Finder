import RecipeCard from "../components/RecipeCard"

function PopularPicks() {

    return (
        <>
            <section className="popular-picks">
                <h1>Popular Picks</h1>
                <div className="recipe-cards">
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                </div>


            </section>


        </>
    )

}

export default PopularPicks