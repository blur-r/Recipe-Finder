function RecipeCard() {

    return (
        <>
            <div className="recipe-card">
                <img src="/images/Frame 427318634.png" alt="Recipe Image" className="recipe-image" />
                <div className="recipe-details">
                    <div className="tags">
                        <span className="tag">Quick</span>
                        <span className="tag">Vegan</span>
                    </div>
                    <div className="title-time">
                        <div className="title">Jollof Rice</div>
                        <div className="time"><p><i className="fas fa-stopwatch"></i> 25 Minutes</p></div>
                    </div>

                    <a href="#" className="view-button">View Recipe</a>
                </div>
            </div>
        </>
    )
}

export default RecipeCard