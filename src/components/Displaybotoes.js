function ItemBotoes(props) {
    return (
        <div>
            <img class={props.class} src= {props.src}/>
        </div>
    )
}

function Displaybotoes() {

    const newlst = [
        {class: "bot1 botesquerdo", src: "./img/home 1.png"},
        {class: "bot1", src: "./img/search-outline 1.png"},
        {class: "bot1", src: "./img/add-circle-outline 1.png"},
        {class: "bot1", src: "./img/heart-outline 1.png"},
        {class: "bot1 botdireito", src: "./img/person-outline 1.png"}
    ]

    return (
        <div class="displaybotoes">
            {newlst.map(item => {return <ItemBotoes class={item.class} src={item.src}/>})}
        </div>
    );

}

export default Displaybotoes;