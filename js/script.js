let ator = new Ator(1, "JOHN WAYNE")
console.log(ator);

let diretor = new Diretor (1, "Alfred Hitchcock");
console.log(diretor);

let genero = ["Ação","Ficção científica"];
let sinopse = "O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a desconfiar da realidade. Thomas conhece os misteriosos Morpheus e Trinity e descobre que é vítima de um sistema inteligente e artificial chamado Matrix, que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia.";

let direcao = [
    new Diretor (1,"Lana Wachowski"),
    new Diretor (2,"Lilly Wachowski")
];

let elenco = [
    new Ator (1,"Keanu reeves"),
    new Ator (2,"Carrie-Anne Moss"),
    new Ator (3,"Laurence Fishburne")
];

let filme = new Filmes(
    1,
    "Matrix",
    1999,
    genero,
    136,
    sinopse,
    // link do poster/cartaz
    direcao,
    elenco,
    14,
    8,8
);

console.log(filme);