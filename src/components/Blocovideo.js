import React from "react";

function ItemBlocoVIdeo(props) {

  const [nome, setNome] = React.useState("heart-outline") 
  const [somacurtida, setSomacurtida] = React.useState(props.npeople)
  const [porvoce, setPorvoce] = React.useState("")
  const [corycolor, setCorycolor] = React.useState("")
  

    function EhCurtido(){
     
     if (nome === "heart-outline") {
      setNome("heart")
      setSomacurtida(somacurtida + 1)  
      setPorvoce(<div class="respondeai">voçê,</div>)
      setCorycolor("danger")
     } else{
      setNome("heart-outline")
      setSomacurtida(somacurtida - 1) 
      setPorvoce("")
      setCorycolor("")
     }
   
    }
   

  return (
    <div class="blocovideo">
      <div class="topovideo">
        <div>
          <img class="img1" src={props.src} />
        </div>
        <div class="meowed">{props.name}</div>
        <div>
          <img class="trespontos" src="./img/ellipsis-horizontal 1.png" />
        </div>
      </div>
      <div>
        <img class="postimagem" onClick= {EhCurtido} src={props.src2} />
      </div>
      <div class="posimagem">
        <div class="displayfileira1">
          <div class="fileira1">
          <ion-icon name={nome} color = {corycolor} class="curtiu" onClick={EhCurtido} ></ion-icon>
          
            {/* <img class="curtiu" src="./img/heart-outline 1.png" /> */}
            <div>
              <img src="./img/chatbubble-outline 1.png" />
            </div>
            <div>
              <img src="./img/paper-plane-outline 2.png" />
            </div>
          </div>
          <div class="ultimoicone">
            <img src="./img/book.png" />
          </div>
        </div>

        <div class="fileira2">
          <div>
            <img class="imgposimagem" src={props.src3} />
          </div>
          <div>curtido por</div>
          {porvoce}
          <div class="respondeai">{props.quemcurtiu}</div>
          <div class="esse">e</div>
          <div class="outras">outras {somacurtida} pessoas</div>
        </div>
      </div>
    </div>
  );
}

function Blocovideo() {
  
  const newItens = [
    {
      src: "./img/Rodrigo.jpg",
      name: "dayan",
      src2: "./img/gato-telefone 1.png",
      src3: "./img/Dilza.jpg",
      quemcurtiu: "dilza",
      npeople: 101,
    },
    {
      src: "./img/sara.jpg",
      name: "Sara",
      src2: "./img/dog 1.png",
      src3: "./img/adorableanimals 1.png",
      quemcurtiu: "adorableanimals",
      npeople: 1023,
    },
    {
      src: "./img/Dilza.jpg",
      name: "Dilza",
      src2: "./img/DaivSan.jpg",
      src3: "./img/adorableanimals 1.png",
      quemcurtiu: "adorableanimals",
      npeople: 450,
    },
  ];

  return (
    <div>
      {newItens.map((item) => {
        return (
          <ItemBlocoVIdeo
            src={item.src}
            name={item.name}
            src2={item.src2}
            src3={item.src3}
            quemcurtiu={item.quemcurtiu}
            npeople={item.npeople}
          />
        );
      })}
    </div>
  );
}
export default Blocovideo;
