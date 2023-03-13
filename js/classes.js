class Ator
{
    constructor(id, nome){
        this.nome=nome;
        this.id=id;
    }
}

class Diretor
{
    constructor(id, nome){
        this.nome=nome;
        this.id=id;
    }
}

class Filme
{
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao){
        this.id=id; //identificador único
        this.titulo=titulo; //título do filme
        this.ano=ano; //ano de produção
        this.genero=genero; //categoria do filme (Acão, aventura, ...)
        this.duracao=duracao; // tempo de duração do filme
        this.sinopse=sinopse; //sinopse do enredo do filme
        this.cartaz=cartaz; //imagem do cartaz do filme
        this.direcao=direcao; //lista de diretores do filme
        this.elenco=elenco; // lista de atores do filme
        this.classificacao=classificacao; // classificação de faixa etária
        this.avaliacao=avaliacao; // rating
    }

    getCard = async () => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src",this.cartaz);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style","display:flex; justify-content: space-around;");
        let divGenero = document.createElement("div");
        divGenero.setAttribute("style","flex-grow:1;");
        let divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("style","flex-grow:1;");
        let divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("style","flex-grow:1");
        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divGenero.appendChild(document.createTextNode(this.genero));
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);
        return card;
    }
}