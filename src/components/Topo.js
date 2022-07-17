
function IconesItem(props){
    return (
        <div><img class={props.class} src={props.src}/></div>
    );

}
function Topo (){
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
                <IconesItem class="icone1" src="./img/paper-plane-outline 2.png"/>
                <IconesItem class="icone2" src="./img/compass-outline 1.png"/>
                <IconesItem class="icone3" src="./img/heart-outline 1.png"/>
                <IconesItem class="icone4" src="./img/person-outline 1.png"/>

            </div>
        </div>
    );
  }
  export default Topo;