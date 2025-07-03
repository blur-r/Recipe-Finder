import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeContext } from '../context/AppContext';
import { searchRecipes } from '../utils/api';
import heroImg from '../assets/unsplash_uQs1802D0CQ.png';

function Hero() {
    const [searchVal, setSearchVal] = useState('');
    const [diet, setDiet] = useState('');

    const {
        searchCache,
        cacheSearchResults,
        setCurrentSearch,
        setSearchQuery,
    } = useRecipeContext();

    const navigate = useNavigate();


    const handleChange = (event) => {
        setSearchVal(event.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        const ingList = searchVal
            .split(',')
            .map(ing => ing.trim().toLowerCase())
            .filter(Boolean);

        const key = `${ingList.join(',')}:${diet || 'none'}`;

        if (searchCache[key]) {
            setCurrentSearch(searchCache[key]);
            const formattedQuery = ingList.join(', ');
            setSearchQuery(formattedQuery);
            navigate('/search');
        } else {
            const results = await searchRecipes(ingList, diet);
            cacheSearchResults(key, results);
            setCurrentSearch(results);
            const formattedQuery = ingList.join(', ');
            setSearchQuery(formattedQuery);
            navigate('/search');
        }
    };

    return (
        <div className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
            <h1>Find Recipes with what you have.</h1>
            <p>Enter the ingredients you have and get delicious recipes instantly. No more wondering what to cook.</p>

            <form onSubmit={handleSubmit}>
                <input
                    type="search"
                    placeholder="Enter your ingredients (e.g., chicken, rice)"
                    value={searchVal}
                    onChange={handleChange}
                />
                <button type="submit">Find Recipes</button>
            </form>

            <div className="filter-buttons">
                <button
                    className={diet === 'vegetarian' ? 'active' : ''}
                    onClick={() => setDiet('vegetarian')}
                >
                    Vegetarian
                </button>
                <button
                    className={diet === 'gluten free' ? 'active' : ''}
                    onClick={() => setDiet('gluten free')}
                >
                    Gluten-Free
                </button>

                <button
                    className={diet === 'ketogenic' ? 'active' : ''}
                    onClick={() => setDiet('ketogenic')}
                >
                    Ketogenic
                </button>


            </div>
        </div>
    );
}

export default Hero;
