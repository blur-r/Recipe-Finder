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
                            <p><i className="fas fa-stopwatch"></i> 25 Minutes</p>
                            -
                            <p><i className="fas fa-utensils"></i> 5 Servings</p>
                        </div>
                        <div className="random-recipe-buttons">
                            <span className="tag">Vegetarian</span>
                            <span className="tag">Vegan</span>
                            <span className="tag">Gluten-Free</span>

                        </div>
                        <div className="last-container">
                            <button className="start-cooking">Start Cooking</button>
                            <i className="fas fa-heart"></i>
                        </div>
                    </div>
                </div>




            </section>
        </>
    )
}

export default RandomRecipe