import Header from "../components/Headerr"

function Recipedetails() {
    return (
        <>
            <Header />
            <div className="recipe-details">
                <h1>
                    Spicy Curry
                </h1>
                <p>A flavorful and aromatic Thai curry with a perfect balance of spices and creamy coconut milk.</p>
                <div className="img-btn">
                    <img src="/images/Frame 427318634.png" alt="" />
                    <button>Add to Favorites</button>
                </div>

                <div className="recipe-detail">
                    <h2>Recipe Details</h2>
                    <div className="flex">
                        <p>Servings</p>
                        <p>4</p>
                    </div>

                    <div className="flex">
                        <p>Dish Type</p>
                        <p>Main Course</p>

                    </div>

                    <div className="flex">
                        <p>Prep Time</p>
                        <p>20 Minutes</p>

                    </div>

                    <div className="tags">
                        <span className="tag">Quick</span>
                        <span className="tag">Vegan</span>
                        <span className="tag">Meat</span>
                    </div>

                </div>

                <div className="Ingredients">
                    <h2>Ingredient</h2>
                    <p>1 tbsp coconut oil, 1 onion, chopped, 2 cloves garlic, minced, 1 inch ginger, grated, 1 red bell pepper, sliced, 1 green bell pepper, sliced, 1 cup broccoli florets, 1 cup coconut milk, 2 tbsp red curry paste, 1 tbsp soy sauce, 1 tbsp lime juice, 1 tsp brown sugar, Fresh cilantro for garnish</p>
                </div>

                <div className="Instructions">
                    <h2>Instructions</h2>
                    <ul>
                        <li>Heat coconut oil in a large pan over medium heat. Add onion and cook until softened, about 5 minutes.</li>
                        <li>Add garlic and ginger, cook for another minute until fragrant.</li>
                        <li>Stir in red curry paste and cook for 1 minute.</li>
                        <li>Add bell peppers and broccoli, cook for 5 minutes.</li>
                        <li>Pour in coconut milk, soy sauce, lime juice, and brown sugar. Bring to a simmer and cook for 10 minutes, or until vegetables are tender. Garnish with fresh cilantro and serve with rice.</li>
                    </ul>

                </div>

                <div className="nutritions">
                    <div className="nutrient">
                        <p>Calories</p>
                        <span>300</span>
                    </div>
                    <div className="nutrient">
                        <p>Calories</p>
                        <span>300</span>
                    </div>
                    <div className="nutrient">
                        <p>Calories</p>
                        <span>300</span>
                    </div>
                    <div className="nutrient">
                        <p>Calories</p>
                        <span>300</span>
                    </div>

                </div>

            </div>







        </>
    )
}

export default Recipedetails