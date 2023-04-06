import { useContext, useState } from "react";
import LabeledInput from "./LabeledInput";
import PrimaryButton from "./PrimaryButton";
import { GamesContext } from "../App";

function AddGameSection() {
    const [title, setTitle] = useState('');
    const [creator, setCreator] = useState('');
    const [console, setConsole] = useState('');
    const [from, setFrom] = useState('');
    const [url, setUrl] = useState('');

    const [games, setGames] = useContext(GamesContext);

    function addNewGame(e) {
        e.preventDefault();
        let gameToAdd = {
            title: title,
            creator: creator,
            console: console,
            from: from,
            url: url
        }
        setGames([gameToAdd, ...games]);
        setTitle('');
        setCreator('');
        setConsole('');
        setFrom('');
        setUrl('');
    }

    return ( 
        <section className="addGameSection">
            <form>
                <LabeledInput label='Title' type='text' placeholder='Goat Simulator' action={setTitle} value={title} />
                <LabeledInput label='Creator' type='text' placeholder='Coffe Stain Studios' action={setCreator} value={creator} />
                <LabeledInput label='Console' type='text' placeholder='PC' action={setConsole} value={console} />
                <LabeledInput label='From' type='text' placeholder='Malek' action={setFrom} value={from} />
                <LabeledInput label='url' type='text' placeholder='url' action={setUrl} value={url} />
                <PrimaryButton title='ADD' action={addNewGame} />
            </form>
        </section>
     );
}

export default AddGameSection;