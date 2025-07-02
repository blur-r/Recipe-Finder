import Header from "../components/Headerr";
import Hero from "../sections/Hero";
import HowItWorks from "../sections/HowItWorks";
import RandomRecipe from "../sections/RandomRecipe";
import PopularPicks from "../sections/PopularPicks";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <HowItWorks />
            <RandomRecipe />
            <PopularPicks />
        </>

    )
}

export default Home;