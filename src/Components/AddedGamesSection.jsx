import { useContext } from "react";
import GameCard from "./GameCard";
import { GamesContext } from "../App";

function AddedGamesSection() {
    const [games] = useContext(GamesContext);

    return ( 
        <section className="addedGamesSection">
            <h2>ADDED GAMES</h2>
            {
                games.map((game, i) => <GameCard key={i} game={game} />)
            }
        </section>
     );
}

export default AddedGamesSection;