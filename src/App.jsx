import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homee";
import Recipedetails from "./pages/RecipeDetail";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" />
            <Route path="/favorites" />
            <Route path="/recipe/:id" />
            <Route path="/recipe/" element={<Recipedetails />} />
        </Routes>
    )
}

export default App;