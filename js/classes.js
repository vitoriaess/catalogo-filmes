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
        this.btnDetalhes = null
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

        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());

        return card;
    }

    setBtnDetalhes = () =>{
        this.btnDetalhes = document.createElement("button");
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id",this.id);
        this.btnDetalhes.setAttribute("class","btnDetalhesFilme");
    }
    
    getBtnDetalhes = () =>{
        return this.btnDetalhes;
    }

    getDetalhesFilme = ()=> {
        let detalhesFilme = document.createElement("div");
        detalhesFilme.setAttribute("class","detalhesFilme");
        detalhesFilme.setAttribute("src",this.getDetalhesFilme);

        let imgCartazDetalhes = document.createElement("img");
        imgCartazDetalhes.setAttribute("class","imagem-detalhe");
        imgCartazDetalhes.setAttribute("src", this.cartaz);
        detalhesFilme.appendChild(imgCartazDetalhes);

        let detalhesBody = document.createElement("div");
        detalhesBody.setAttribute("class", "detalhes-body");

        let hDetalhesTitle = document.createElement("h5");
        hDetalhesTitle.setAttribute("class", "detalhes-title");
        hDetalhesTitle.appendChild(document.createTextNode(this.titulo));

        let hDetalhesFilme = document.createElement("div");

        let divAno=document.createElement("div");
        hDetalhesFilme.appendChild(divAno);
        divAno.setAttribute("src", this.ano);

        let divGenero=document.createElement("div");
        hDetalhesFilme.appendChild(divGenero);
        divGenero.setAttribute("src", this.genero);

        let divDuracao=document.createElement("div");
        hDetalhesFilme.appendChild(divDuracao);
        divDuracao.setAttribute("src", this.duracao);

        let divDirecao=document.createElement("div");
        hDetalhesFilme.appendChild(divDirecao);
        divDirecao.setAttribute("src",this.direcao);

        let divElenco=document.createElement("div");
        hDetalhesFilme.appendChild(divElenco);
        divElenco.setAttribute("src",this.elenco);

        let divAvaliacao=document.createElement("div");
        hDetalhesFilme.appendChild(divAvaliacao);
        divAvaliacao.setAttribute("src",this.avaliacao);

        let divSinopse=document.createElement("div");
        hDetalhesFilme.appendChild(divSinopse);
        divSinopse.setAttribute("src",this.sinopse);

        let btnFechar = document.createElement("button");
        btnFechar.setAttribute("id","btn-fechar");
        btnFechar.appendChild(document.createTextNode("Fechar"));
        detalhesFilme.appendChild(btnFechar);

        let btnSalvar = document.createElement("button");
        btnSalvar.setAttribute("id","btn-salvar");
        btnSalvar.appendChild(document.createTextNode("Salvar"));
        detalhesFilme.appendChild(btnSalvar);

        detalhesFilme.appendChild(detalhesBody);
        detalhesFilme.appendChild(hDetalhesFilme);
        detalhesFilme.appendChild(btnFechar);
        detalhesFilme.appendChild(btnSalvar);

        return detalhesFilme;
    }

}