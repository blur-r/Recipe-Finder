function RandomRecipe() {
    return (
        <>
            <section className="random-recipe">
                <h1>Random Recipe</h1>
                <div className="random-recipe-container">
                    <div className="random-recipe-img">
                        <img src="/images/Frame 427318634.png" alt="" />
                    </div>

                    <div className="random-recipe-text">
                        <h2>Spaghetti Bolognese  </h2>
                        <p>Random Recipe Card sits in between the homepage preview and full detail page in terms of content depth — it should feel engaging and informative, but still compact enough to fit in a homepage section that auto-refreshes.</p>
                        <div className="timer-serving">
                            <p><i class="fas fa-stopwatch"></i> 25 Minutes</p>
                            -
                            <p><i class="fas fa-utensils"></i> 5 Servings</p>
                        </div>
                        <div className="random-recipe-buttons">
                            <button className="random-recipe-button">Vegetarian</button>
                            <button className="random-recipe-button">Vegan</button>
                            <button className="random-recipe-button">Gluten-Free</button>
                        </div>
                        <div className="last-container">
                            <button className="start-cooking">Start Cooking</button>
                            <i class="fas fa-heart"></i>
                        </div>
                    </div>
                </div>




            </section>
        </>
    )
}

export default RandomRecipe