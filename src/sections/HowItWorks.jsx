

function HowItWorks() {
    return (
        <>
            <section className="how-it-works">
                <h1 style={{ textAlign: "center" }}>How It Works</h1>
                <div className="steps">
                    <div className="step">
                        <div className="step-icon">
                            <i class="fas fa-plus"></i>
                        </div>
                        <h2>
                            Add Your Ingredients
                        </h2>
                        <p>
                            Simply type in the ingredients you have in your kitchen
                        </p>
                    </div>

                    <div className="step">
                        <div className="step-icon">
                            <i class="fas fa-search"></i>
                        </div>
                        <h2>
                            Get Matching Recipes
                        </h2>
                        <p>
                            Our smart algorithm finds recipes that match your ingredients
                        </p>
                    </div>

                    <div className="step">
                        <div className="step-icon">
                            <i class="fas fa-utensils"></i>
                        </div>
                        <h2>
                            Start Cooking
                        </h2>
                        <p>
                            Follow step by step instruction and enjoy your delicious meal
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HowItWorks