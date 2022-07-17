function ItemSugestao(props){
    return (
        <div class="displaypossugestoes">
                <div>
                    <img class="imgsugestoes" src={props.imgprinc} />
                </div>
                <div class="textosdassugestoes">
                    <div class="txt1">{props.thepeople}</div>
                    <div class="txt2">{props.infseguir}</div>
                </div>
                <div class="txt3">seguir</div>
            </div>
    );
}

function Displaypossugestoes (){
    return (
        <div>
            <ItemSugestao  imgprinc="./img/badvibesmemes 1.png" thepeople="bad.vibes.memes" infseguir="Segue voçê" />

            <ItemSugestao  imgprinc="./img/chibirdart 1.png" thepeople="chibirdart" infseguir="Segue voçê" />

            <ItemSugestao  imgprinc="./img/razoesparaacreditar 1.png" thepeople="razoesparaacreditar" infseguir="Segue voçê" />

            <ItemSugestao  imgprinc="./img/adorableanimals 1.png" thepeople="adorable_animals" infseguir="novo no instagram" />
            
            <ItemSugestao  imgprinc="./img/smallcutecats 1.png" thepeople="smallcutecats" infseguir="segue voçê" />

        </div>
    );
}

export default Displaypossugestoes;