import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" />
            <Route path="/favorites" />
            <Route path="/recipe/:id" />
        </Routes>
    )
}

export default App;