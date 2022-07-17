import Blocostatus from "./Blocostatus";
import Blocovideo from "./Blocovideo";
import Displaybotoes from "./Displaybotoes";

function Coluna1() {
    return (
        <div class="coluna1">
            <Blocostatus />
            <Blocovideo />
            <Displaybotoes />
        </div>
    );
}

export default Coluna1;