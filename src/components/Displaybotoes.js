function ItemBotoes(props) {
    return (
        <div>
            <img class={props.class} src= {props.src}/>
        </div>
    )
}

function Displaybotoes() {
    return (
        <div class="displaybotoes">
            <ItemBotoes class="bot1 botesquerdo" src="./img/home 1.png"/>
            <ItemBotoes class="bot1" src="./img/search-outline 1.png"/>
            <ItemBotoes class="bot1" src="./img/add-circle-outline 1.png"/>
            <ItemBotoes class="bot1" src="./img/heart-outline 1.png"/>
            <ItemBotoes class="bot1 botdireito"src="./img/person-outline 1.png"/>
        </div>
    );

}

export default Displaybotoes;