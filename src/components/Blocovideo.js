function ItemBlocoVIdeo(props){
    return (
        <div class="blocovideo">
                <div class="topovideo">
                    <div><img class="img1" src={props.src} /></div>
                    <div class="meowed">{props.name}</div>
                    <div>
                        <img class="trespontos" src="./img/ellipsis-horizontal 1.png" />
                    </div>
                </div>
                <div>
                    <img class="postimagem" src={props.src2} />
                </div>
                <div class="posimagem">
                    <div class="displayfileira1">
                        <div class="fileira1">
                            <div><img src="./img/heart-outline 1.png" /></div>
                            <div><img src="./img/chatbubble-outline 1.png" /></div>
                            <div><img src="./img/paper-plane-outline 2.png" /></div>
                        </div>
                        <div class="ultimoicone"><img src="./img/book.png" /></div>
                    </div>

                    <div class="fileira2">
                        <div><img class="imgposimagem" src={props.src3}/></div>
                        <div>curtido por</div>
                        <div class="respondeai">{props.quemcurtiu}</div>
                        <div class="esse">e</div>
                        <div class="outras">outras {props.npeople} pessoas</div>
                    </div>
                </div>
            </div>
    )
}

function Blocovideo() {
    return (
        <div>
            <ItemBlocoVIdeo src ="./img/Rodrigo.jpg" name ="dayan" src2="./img/gato-telefone 1.png" src3="./img/Dilza.jpg" quemcurtiu="dilza" npeople="101.523"/>

            <ItemBlocoVIdeo src ="./img/sara.jpg" name ="Sara" src2="./img/dog 1.png" src3="./img/adorableanimals 1.png" quemcurtiu="adorableanimals" npeople="1.523"/>

            <ItemBlocoVIdeo src ="./img/Dilza.jpg" name ="dilza" src2="./img/DaivSan.jpg" src3="./img/adorableanimals 1.png" quemcurtiu="adorableanimals" npeople="1.523"/>
            
        </div>

    );
}
export default Blocovideo;