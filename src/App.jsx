import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homee";
import Recipedetails from "./pages/RecipeDetail";
import Favorites from "./pages/Favorites";
import SearchResults from "./pages/SearchResults";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recipe/:id" />
            <Route path="/recipe/" element={<Recipedetails />} />
        </Routes>
    )
}

export default App;