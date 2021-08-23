// Aula 01 - Introdução à lógica de programação

/*Se o despertador tocou Então
desligar o despertador
levantar da cama
caminhar até o banheiro
abrir o armáriopegar a escova de dentes
colocar o creme dental
escovar os dentes
guardar escova e creme dental
sair do banheiro
ir para a cozinha

Se tem café Então
fazer café
Senão
fazer suco

Se tem pão
colocar queijo e presunto
comer pão com queijo e presunto

Enquanto estiver comendo
acessar emails

sair da cozinha
ir para o quarto
trocar de roupa
ir para o trabalho*/

//Aula 04 - Variáveis

nomeCompleto = "Carlos Eduardo Silva  de Almeida"
apelido = "Dudu"
idade = 33
dataNascimento = "28/12/1987"
localNascimento = "Maceió - AL"
altura = 1.73
trabalhando = true
profissao = "advogado"

apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecido como " + apelido + ") e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " +
    localNascimento + ". Tenho " + altura + "m de altura e atualmente estou " + (trabalhando ? "empregado" : "desempregado") + " como " + (profissao) + " . "

console.log(apresentacao)

//Aula 05 - Operadores
//exercício 05.1

mesmoNome = (nomeFulano == nomeBeltrano)

//exercício 05.2

maiorDeIdade = (idade >= 18)

//exercício 05.3

valorComJuros = (valorBoleto * 1.1)

//exercício 05.4

mediaAritmetica = (banana + uva + laranja + caqui + abacate) / 5

//exercício 05.5

lucroBruto = receitaLiquidaVendas - custoProdutosVendidos
margemBruta = (lucroBruto / receitaLiquidaVendas) * 100

//exercício 05.6

saldo = 1000
saldo = saldo - 99.9
saldo = saldo + 2500
saldo = saldo - 0.1
saldo = saldo * 0.75
saldo = saldo / 2

console.log(saldo)

//Aula 06 - Condicionais

var altura = 1.73
var peso = 66

imc = peso / (altura * altura)

classificação = ""
grau = 0

if (imc < 18.50) {
    classificação = "magro"

} else if (imc < 25) {
    classificação = "normal"

} else if (imc < 30) {
    classificação = "acima do peso"
    grau = 1

} else if (imc < 40) {
    classificação = "obesidade 1"
    grau = 2

} else {
    classificação = "obesidade 2"
    grau = 3
}

console.log("seu imc é", imc)
console.log("você é considerado", classificação)

if (grau = 1) {
    console.log("Cuidado! Você está acima do peso recomendado pela OMS.")

    if (grau == 3) {
        console.log("É importante procurar um médico para avaliar sua saúde.")
    }
}

//Aula 08 - Estruturas de repetição
//exercício 08.1

membrosDaBanda = ["Guitarrista", "Baixista", "Baterista", "Tecladista", "Vocalista"]
index = 0

for (index = 0; index < membrosDaBanda.length; index++)

    console.info(membrosDaBanda[index])

//exercício 08.2

valores = [1, 3, 7, 5, 12, 18, 21, 28, 36, 69]

soma = 0
for (index = 0; index < valores.length; index++) {
    soma += valores[index]
}

media = soma / valores.length
console.log(media)

//exercício 08.3

meuNome = "Carlos"
nomeComum = false

nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia",
    "Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia",
    "Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina",
    "Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia",
    "Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda",
    "Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"
]

for (index = 0; index < nomesComuns.length; index++) {
    if (meuNome == nomesComuns[index]) {
        nomeComum = true
        break
    }
}

if (nomeComum) {
    console.log("É, nome comum :P")
} else {
    console.log("Diferentão, hein? XD")
}

//Aula 09 - Funções, procedimentos e comentários
//exercício 09.1
function imprimir(conteudo) {
    console.log(conteudo)
}

//exercício 09.2
//parte 1
primeiroNome = "CWI"
segundoNome = "Reset"

function mesmoNome(primeiroNome, segundoNome) {
    return primeiroNome == segundoNome
}

//parte 2
maiorDeIdade = (idade >= 18)

function maiorDeIdade(idade) {
    return idade >= 18
}

//parte 3
valorComJuros = (valorBoleto * 1.1)

function valorComJuros(valorBoleto) {
    return valorBoleto * 1.1
}

//Parte 4 e 5
mediaAritmetica = (banana + uva + laranja + caqui + abacate) / 5

function mediaAritmetica(itens) {
    soma = 0
}
for (index = 0; index < itens.length; index++) {
    soma += itens[index]
    return soma / itens.length
}

//Parte 6
lucroBruto = receitaLiquidaVendas - custoProdutosVendidos
margemBruta = (lucroBruto / receitaLiquidaVendas) * 100

function margemBruta(receitaLiquidaVendas, custoProdutosVendidos) {
    lucroBruto = receitaLiquidaVendas - custoProdutosVendidos
    return (lucroBruto / receitaLiquidaVendas) * 100
}


//Aula 10 - Juntando tudo

colaboradores = ['Antônio', 'Beatriz', 'Carlos', 'Daniela', 'Eduardo', 'Fernanda', 'Gabriel', 'Herlena']
idades = [69, 66, 58, 61, 60, 64, 59, 55]
temposDeTrabalho = [31, 29, 30, 26, 25, 24, 26, 29]

function verificarAposentadoria(nome) {

    colaborador = false
    idade = 0
    tempoTrabalho = 0


    for (posicao = 0; posicao < colaboradores.length; posicao++) {

        if (nome == colaboradores[posicao]) {
            colaborador = true
            idade = idades[posicao]
            tempoTrabalho = temposDeTrabalho[posicao]
        }
    }

    if (colaborador) {

        porIdade = (idade >= 65)
        porTempoDeTrabalho = (tempoTrabalho >= 30)
        porIdadeComTempoDeTrabalho = (idade >= 60 && tempoTrabalho >= 25)

        if (porIdade || porTempoDeTrabalho || porIdadeComTempoDeTrabalho) {
            console.log("Parabéns, já pode sair de férias eternas :)")
        } else {
            console.log("Infelizmente, ainda falta um tempo :(")
        }

    } else {
        console.log("Colaborador inválido :|")
    }
}

verificarAposentadoria('Antônio')
verificarAposentadoria('Beatriz')
verificarAposentadoria('Carlos')
verificarAposentadoria('Daniela')
verificarAposentadoria('Eduardo')
verificarAposentadoria('Fernanda')
verificarAposentadoria('Florisberto')
verificarAposentadoria('Gabriel')
verificarAposentadoria('Helena')
verificarAposentadoria('Hudnélson')