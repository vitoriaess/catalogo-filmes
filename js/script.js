let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
/*let btnDetalhes = document.querySelector("#btn-detalhes");*/

let listarFilmes = async(filmes) => {
    let listaFilmes = document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";
    console.log(listaFilmes);
    if(filmes.length > 0){
        filmes.forEach(async(filme)=> {
            listaFilmes.appendChild(await filme.getCard());
        });
    }
}

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("https://www.omdbapi.com/?apikey=74a491af&s="+inputBuscarFilme.value)
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