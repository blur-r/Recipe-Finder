import heroImg from '../assets/unsplash_uQs1802D0CQ.png';

function Hero() {
    return (
        <>
            <div className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
                <h1>Find Recipes with what you have</h1>
                <p>Enter the Ingredient you have and get delicious Recipes Instantly. No more Wondering what to cook.</p>
                <form action="">
                    <input type="search" placeholder="Enter your ingredients" />
                    <button type="submit">Search</button>
                </form>
                <div className="filter-buttons">
                    <button className="filter-button">Vegetarian</button>
                    <button className="filter-button">Vegan</button>
                    <button className="filter-button">Glutton-free</button>
                </div>

            </div >
        </>
    )
}

export default Hero;