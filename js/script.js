let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
let mostrarFilmes = document.querySelector("#mostrar-filme");
let listaFilmes = document.querySelector("#lista-filmes");

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("https://www.omdbapi.com/?apikey=74a491af&s="+inputBuscarFilme.value, {mode: "cors"})
        .then((resp)=> resp.json())
        .then((resp)=> {
            console.log(resp)
            resp.Search.forEach((item) => {
                console.log(item); 
                let filme=new Filme(
                item.imdbID,
                item.Title,
                item.Year,
                null,
                null,
                item.Poster,
                null,
                null,
                null,
                null
            );
            filmes.push(filme);
        });
        listarFilmes(filmes);
    })
    }
return false;
}

let btnDetalhesFilme = async (id)=>{
    fetch("https://www.omdbapi.com/?apikey=74a491af&i="+id)
    .then((resp)=> resp.json())
    .then((resp)=> {
        let filme=new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.Runtime,
            resp.Poster,
            resp.Plot,
            resp.Director,
            resp.Actors.split(","),
            resp.Awards,
            resp.imdbRating
        )
        console.log(filme);
        document.querySelector("#mostrar-filme").appendChild(filme.getDetalhesFilme());
        document.querySelector("#mostrar-filme").style.display="flex";
        document.querySelector("#lista-filmes").style.display="none";

        document.querySelector("#btn-fechar").onclick =() =>{
            document.querySelector("#lista-filmes").style.display="flex";
            document.querySelector("#mostrar-filme").innerHTML="";
            document.querySelector("#mostrar-filme").style.display="none";
        }
    });
}

let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.style.display="flex";
    listaFilmes.innerHTML = "";
    document.querySelector("#mostrar-filme").innerHTML="";
    document.querySelector("#mostrar-filme").style.display="none";
    //console.log(listarFilmes);
    if(filmes.length > 0){
        filmes.forEach(async(filme) => {
            console.log(filme);
                listaFilmes.appendChild(await filme.getCard());
                filme.getBtnDetalhes().onclick=()=>{
                    listaFilmes.style.display = 'none';
                    btnDetalhesFilme(filme.id);
                }
        });
    }

}

