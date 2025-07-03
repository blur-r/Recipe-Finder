const BASE_URL = 'https://api.spoonacular.com';
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

// Helper function to build URLs with query parameters and API key
function buildUrl(endpoint, params = {}) {
    const url = new URL(BASE_URL + endpoint);
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            url.searchParams.append(key, value);
        }
    });
    url.searchParams.append('apiKey', API_KEY);
    return url.toString();
}

async function searchRecipes(ingredients, diet) {
    const ingredientString = ingredients.join(',');

    const url = buildUrl('/recipes/complexSearch', {
        includeIngredients: ingredientString,
        diet: diet || undefined,
        number: 20,
        addRecipeInformation: true,
    });

    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch recipes');

    const data = await response.json();
    return data.results;
}

async function getRandomRecipes(number = 5) {
    const url = buildUrl('/recipes/random', {
        number,
    });

    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch random recipes');

    const data = await response.json();
    return data.recipes; // an array of recipe objects
}

async function getRecipeDetails(id) {
    const url = buildUrl(`/recipes/${id}/information`);

    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch recipe details');

    const data = await response.json();
    return data;
}

async function getPopularRecipes(query = 'rice', number = 20) {
    const url = buildUrl('/recipes/complexSearch', {
        query,
        sort: 'popularity',
        number,
        addRecipeInformation: true,
    });

    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch popular recipes');

    const data = await response.json();
    return data.results;
}

export {
    searchRecipes,
    getRecipeDetails,
    getRandomRecipes,
    getPopularRecipes
};
