import {useState} from 'react';

function Contador(params) {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador+1);
    }

    return (
        <div>
            <h1>Contador</h1>
            <p>Clique no botão para adicionar mais 1 ponto.</p>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

function Home(){
    return <Contador/>
}

export default Home