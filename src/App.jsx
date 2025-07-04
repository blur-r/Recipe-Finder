import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homee";
import RecipeDetails from "./pages/RecipeDetail";
import Favorites from "./pages/Favorites";
import SearchResults from "./pages/SearchResults";
import { AppProvider } from "./context/AppContext";

function App() {
    return (
        <AppProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/recipe/:id" element={<RecipeDetails />} />
            </Routes>
        </AppProvider>
    )
}

export default App;