function boasvindas() {
 console.log("Bem-Vindas ao  Sistema Escolar!")
}
boasvindas();
boasvindas();

function montrarCurso(){
    console.log("Curso:desenvolvimentode sistemas");
    console.log("instituição:Escoladetecnologia");
}
montrarCurso();

function saudarAluno(nome){
    console.log("ola," + nome + "! seja bem-vindo!");
}

saudarAluno("matheus");
saudarAluno("Thiago");
saudarAluno("vitor");

function montrarAluno(nome,curso){
console.log("Nomedoaluno : " + nome);
console.log("curso: " + Curso);
console.log("............................................................");
}
montrarAluno("Matheus","Desenvolvimento web");
montrarAluno("thiago","Estetica");
montrarAluno("vitor","Radiologia")

function calcularMedia(nota1,nota2){
    let media = (nota1+nota2)/2;
    return media
    console.log("mediadoaluno:"+media);
};
calcularMedia(80,60);
console.log("-----------------------------");

function adicionarpontos(nota,pontosextras){
    let notaatualizada = nota + pontosextras;
    console.log("notasatualizadas:"+ notasatualizadas);
}
adicionarpontos(65,10);
console.log("..................................");

function verifiaraprovados(media){
    if(media>=60){
        return "Aprovado!"
        console.log("alunoreprovado!");
}else{
    return "Reprovado!"    
    console.log("alunoreprovado");
}
}
verificaraprovaçao(85);
verificaraprovaçao(45);
verificaraprovaçao(60);

function classificaraluno(nota){
    if( nota >= 90 && nota<=100){
        console.log("excelente")
    }else if( nota>= 70 && nota < 90){
        console.log("Bom")
    }else if(nota >=60 && nota < 70){
        console.log("Regular")
    }else if(nota>=0 && nota <60){
        console.log("Insuficiente")
    }else{
        console.log("Nota Inválida")
    }
}

classificaraluno(95);
classificaraluno(80);
classificaraluno(65);
classificaraluno(45);

function calcularMensalidade(valor){
    let desconto = valor * 0.10
    let precoFinal = valor - desconto
    return precoFinal
}
let valorFinal = calcularMensalidade(500);
console.log(valorFinal);

//exercício 10 e extra
function avaliarAluno(nome, n1, n2){
    let mediafinal = calcularMedia(n1, n2)
    let situacao = verificarAprovacao(mediafinal)
    console.log("Nome: " + nome)
    console.log("Média: " + mediafinal)
    console.log("Situação: " + situacao)
    
}
avaliarAluno("matheus", 80,70)