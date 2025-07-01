import Header from "../components/Header";
import Hero from "../sections/hero";
import HowItWorks from "../sections/HowItWorks";
import RandomRecipe from "../sections/RandomRecipe";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <HowItWorks />
            <RandomRecipe />
        </>
    )
}

export default Home;