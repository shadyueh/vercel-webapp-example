function Contador(params) {
    let contador = 5;

    function adicionarContador() {
        contador = contador + 1;
        console.log(contador);
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