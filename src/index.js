import reactDOOM from 'react-dom';

function Topo () {
    return (
    <div>
        <h1>Meu site massa</h1>
    </div>)
}

function Conteudo (){
return (
    <div>
        <p>qualquer coisa</p>
        <p>qualquer coisa</p>
        <p>teste coisa</p>
    </div>
)
}

//JSX via js escreve html
function App() {
    return (
        <div>
            {Topo ()}
           
            {Conteudo ()}
        </div>
    );
}



reactDOOM.render(<App />, document.querySelector(".root"))
