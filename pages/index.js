import {useState} from 'react';

function Contador(params) {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador+1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

function Home(){
    return <Contador/>
}

export default Home