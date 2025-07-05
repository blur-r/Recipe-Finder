import Header from "../components/Headerr";
import Hero from "../sections/Heroo";
import HowItWorks from "../sections/HowItWorks";
import RandomRecipe from "../sections/RandomRecipe";
import PopularPicks from "../sections/PopularPicks";

function Home() {
    return (
        <>
            <Hero />
            <HowItWorks />
            <RandomRecipe />
            <PopularPicks />
        </>

    )
}

export default Home;