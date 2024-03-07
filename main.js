function Arma(nome, danoBase) {
    this.nome = nome;
    this.danoBase = danoBase;
};

function Machado(nome, escala, danoBase) {
    Arma.call(this, nome, danoBase);
    this.nome = nome;
    this.escala = escala;
    this.danoTotal = danoBase * escala;
};

function Espada(nome, escala, danoBase) {
    Arma.call(this, nome, danoBase);
    this.nome = nome;
    this.escala = escala;
    this.danoTotal = danoBase * escala;
};

const machado1 = new Machado("Machado1", 1.2, 100);
const espada1 = new Espada("Espada1", 1.5, 120);
const espada2 = new Espada("Espada2", 1.4, 140);

console.log(machado1);
console.log(espada1);
console.log(espada2);