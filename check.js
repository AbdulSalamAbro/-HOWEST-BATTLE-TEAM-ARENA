import { _heroData } from "./assets/js/data/heroes";
// Example function to log hero names
function logHeroNames() {
    _heroData.forEach(hero => {
        console.log(hero.name);
    });
}

// Call the function to log hero names
logHeroNames();
