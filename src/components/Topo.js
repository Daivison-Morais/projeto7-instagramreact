
function IconesItem(props){
    return (
        <div><img class={props.class} src={props.src}/></div>
    );

}
function Topo (){

    const newitens = [
        {class: "icone1", src: "./img/paper-plane-outline 2.png"},
        {class:"icone2", src:"./img/compass-outline 1.png"},
        {class:"icone3", src:"./img/heart-outline 1.png"},
        {class: "icone4", src: "./img/person-outline 1.png"}
    ] 

    return (
        <div class="topo">
            <div class="iconeinstagram">
                <img class="iconedoinstagram" src="./img/logo-instagram 1.png" />
                <div class="barrinhavertical"></div>
                <img class="logoinstagram" src="./img/logo.png" />
            </div>
            <img class="logoinstagramsozinha" src="./img/logo.png" />
            <div class="barradepesquisa">
                <div class="pesquisa">Pesquisar</div>
            </div>
            <div class="quatroicones">
                {newitens.map(item => {return <IconesItem class={item.class} src={item .src}/>}) } 
            </div>
            <div class="barrahorizontal"></div>
        </div>
    );
  }
  export default Topo;