function Statusitem(props) {
    return (
        <div class="caixastatus">
            <div class="circulostatus">
                <img class="bordacolorida" src="./img/stories_background.jpg" />
            </div>
            <div><img class="foto1" src={props.src}/></div>
            <div><img class="foto2" src={props.src2}/></div>
            <div class="textostatus">
                <div>{props.name}</div>
            </div>
        </div>
    )
}

function Blocostatus() {

    
const newItens = [
    { src:"./img/DaivSan.jpg", src2: "./img/chevron-forward-circle 1.png ", name: "Sandla"}, 
    { src:"./img/Rodrigo.jpg", name: "Rodrigo"},
    { src:"./img/Jonas.jpg", name: "Jonas"},
    { src:"./img/Din.jpg", name: "Din"},
    { src:"./img/sara.jpg", name: "Sara"},
    { src:"./img/Dilza.jpg", name: "Dilza"},
    { src:"./img/Marcelo.jpg", name: "Marcelo"},
    { src:"./img/Samira.jpg", name: "Samira"}
]


    return (
        <div class="blocostatus">
           {newItens.map(item => {return <Statusitem src={item.src} src2={item.src2} name={item.name}/>
})}
        </div>
    );
}

export default Blocostatus;