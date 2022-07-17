import Displayfototexto from "./Displayfototexto";
import Displaysugtud from "./Displaysugtud";
import Displaypossugestoes from "./Displaypossugestoes";
import Textofim from "./Textofim";

function Coluna2() {
    return (
        <div class="coluna2">
            <Displayfototexto />
            <Displaysugtud />
            <Displaypossugestoes />
            <Textofim/>
        </div>
    );
}

export default Coluna2;