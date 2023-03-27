let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
let btnDetalhes = document.getElementById("#btn-detalhes");



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
        console.log(resp);
        let filme=new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.Runtime,
            resp.Poster,
            resp.plot,
            resp.Director,
            resp.Actors.split(","),
            resp.Awards,
            resp.imdbRating
        )

        document.querySelector("#mostrar-filmes").appendChild(filme.getDetalhesFilme());
        document.querySelector("#lista-filmes".style.display-"none");
        document.querySelector("mostar-filmes").style.display="flex";
    });
}

let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.style.display="flex";
    listaFilmes.innerHTML = "";
    document.querySelector("#mostrar-filmes").innerHTML="";
    document.querySelector("#mostrar-filmes").style.display="none";
    //console.log(listarFilmes);
    if(filmes.length > 0){
        filmes.forEach(async(filme) => {
            console.log(filme);
                listaFilmes.appendChild(await filme.getCard());
                filme.getBtnDetalhes().onclick=()=>{
                    btnDetalhesFilme(filme.id);
                }
        });
    }
}

/*let btnDetalhes.querySelectorAll(".btnDetalhes");
btnDetalhes.forEach(item)=>{
    item.addEventListenes("click",()={this.id})
}/*

/*
btnDetalhes.onclick = ()=>
{
    btnDetalhes.setAtribute("id",this.id);
    btnDetalhes.setAtribute("class","btnDetalhes");
}
*/
/*element.addEventListener.document.querySelector.btnDetalhes*/