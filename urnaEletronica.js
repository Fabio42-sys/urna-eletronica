function dataHoraAtual() {

    const dataHora = new Date();
    const dia = dataHora.getDate();
    const mes = dataHora.getMonth() + 1;
    const ano = dataHora.getFullYear();
    const hora = dataHora.getHours();
    const min = dataHora.getMinutes();
    const seg = dataHora.getSeconds();
    const ms = dataHora.getMilliseconds();

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg} ${ms}`;

}

async function verificarUrnaAtual() {

    let hashUrnaAtual;
    let hashValido;

    await  fetch('urnaEletronica.js')
        .then(Response =>  Response.text())
        .then(Response => CryptoJS.SHA256(Response).toString())
        .then(Response => hashUrnaAtual = Response);

    await fetch('hashValido')
        .then(Response => Response.text())
        .then(Response => hashValido = Response);

    return {
        hashUrnaAtual: hashUrnaAtual,
        hashValido: hashValido,
        status: hashUrnaAtual === hashValido
    } 

}

// Executa antes das funções.

const dados = JSON.parse(localStorage.getItem('dados'));

    document.getElementById('tela').innerHTML = `Nome: ${dados.nome} <br>`;
    document.getElementById('tela').innerHTML += `Idade: ${dados.idade} <br>`;
    document.getElementById('tela').innerHTML += `Time: ${dados.time} <br>`;
    
// Essa é a função responsavel por gravar os dados ( Usando a "const dados = {}" você pode colocar mais de um chave (key) ).

function gravaDados() {

    const dados = {
        Candidato1: {
            Nome: document.getElementById('nome').value,
            Numero: document.getElementById('numero').value,
        },
        Candidato2: {
            Nome: document.getElementById('nome').value,
            Numero: document.getElementById('numero').value,
        },
        Candidato3: {
            Nome: document.getElementById('nome').value,
            Numero: document.getElementById('numero').value,
        },
        Candidato4: {
            Nome: document.getElementById('nome').value,
            Numero: document.getElementById('numero').value,
        },
        Candidato5: {
            Nome: document.getElementById('nome').value,
            Numero: document.getElementById('numero').value,
        }
    }

// Aqui usando a chave (key) dados nós apresentamos os valores (nome, idade e time) na tela do usuario.
    document.getElementById('tela').innerHTML = `Nome: ${dados.nome} <br>`;
    document.getElementById('tela').innerHTML += `Idade: ${dados.idade} <br>`;
    document.getElementById('tela').innerHTML += `Time: ${dados.time} <br>`;

// Aqui é apresentado na tela do usuario o valor que foi guardado no local-storage.

    localStorage.setItem('dados', JSON.stringify(dados));

}

// Com esta função nós apagamos os dados que foram gravados tanto na tela do usuario quando o local-storage da maquina.

function apagarDados() {

    localStorage.removeItem('nome');
    document.getElementById('tela').innerHTML = '';

}

async function urnaEletronica() {

    confirm('Você deseja iniciar o processo de votação?');

    // declaração de variáveis
    let voto;
    let votosCandidato1 = 0;
    let votosCandidato2 = 0;
    let votosCandidato3 = 0;
    let votosBrancos = 0;
    let votosNulos = 0;
    let totalVotos = 0;

    let nomeGanhador;
    let votosGanhador;
    let ganhador = true;

    let nomeCandidato1;
    let nomeCandidato2;
    let nomeCandidato3;

    let senhaMesario;
    let nomeCandidatos;
    let confirmacaoVoto = true;
    let encerrarVotacao;
    let confirmarSenha;
    let dataHoraInicial, dataHoraFinal;

    console.log('Início do programa');

    console.log('* CONFIGURAÇÃO DA URNA *');

    senhaMesario = parseInt(prompt('Defina a senha do mesário:'));
    confirmarSenha = confirm('Deseja REALMENTE usar esta senha para o controle do mesario? Digite [OK] para Sim ou [Cancelar] para Não');

        if(confirmarSenha) {
            alert('A senha foi adicionada');
        } else {
            alert('Digite uma senha');
        }

    do {

        nomeCandidato1 = prompt('Digite o nome do candidato 1:');
        nomeCandidatos = confirm('Deseja REALMENTE usar este nome na votação? Precione [Ok] para Sim ou [Cancelar] para Não');


        if (nomeCandidatos) {
            alert('O nome foi adicionada!');
        } else {
            alert('Re-escreva o nome');
        }

    } while (!nomeCandidatos);

    do {

        nomeCandidato2 = prompt('Digite o nome do candidato 2:');
        nomeCandidatos = confirm('Deseja REALMENTE usar este nome na votação? Precione [Ok] para Sim ou [Cancelar] para Não');


        if (nomeCandidatos) {
            alert('O nome foi adicionada!');
        } else {
            alert('Re-escreva o nome');
        }

    } while (!nomeCandidatos);

    do {

        nomeCandidato3 = prompt('Digite o nome do candidato 3:');
        nomeCandidatos = confirm('Deseja REALMENTE usar este nome na votação? Precione [Ok] para Sim ou [Cancelar] para Não');


        if (nomeCandidatos) {
            alert('O nome foi adicionada!');
        } else {
            alert('Re-escreva o nome');
        }

    } while (!nomeCandidatos);

    // laço de votação

    dataHoraInicial = dataHoraAtual();

    do {

        console.clear();
        console.log(`Candidato 1: ${nomeCandidato1}`);
        console.log(`Candidato 2: ${nomeCandidato2}`);
        console.log(`Candidato 3: ${nomeCandidato3}`);
        console.log(`Brancos 5:`);

        voto = parseInt(prompt('Digite sua opção de voto:'));

            if (voto === 1) {             
                console.log('Você selecionou o candidato 1, deseja REALMENTE votar nele?');
                confirmacaoVoto = confirm('Deseja votar no candidato selecionado?');
                if (confirmacaoVoto) {
                    alert('O voto foi computado');
                    totalVotos++;
                    votosCandidato1++;
                    await audioConfirmacao()
                } else {
                    alert('Digite outro voto')
                }
            } else if (voto === 2) {       
                console.log('Você selecionou o candidato 2, deseja REALMENTE votar nele?');
                confirmacaoVoto = confirm('Deseja votar no candidato selecionado?');
                if (confirmacaoVoto) {
                    alert('O voto foi computado');
                    totalVotos++;
                    votosCandidato2++;
                    await audioConfirmacao();
                } else {
                    alert('Digite outro voto')
                }
            } else if (voto === 3) {         
                console.log('Você selecionou o candidato 3, deseja REALMENTE votar nele?');
                confirmacaoVoto = confirm('Deseja votar no candidato selecionado?');
                if (confirmacaoVoto) {
                    alert('O voto foi computado');
                    totalVotos++;
                    votosCandidato3++;
                    await audioConfirmacao();
                } else {
                    alert('Digite outro voto')
                }
            } else if (voto === 5) {               
                console.log('Você selecionou para votar em branco, deseja REALMENTE votar em branco?');
                confirmacaoVoto = confirm('Deseja votar em branco?');
                if (confirmacaoVoto) {
                    alert('O voto foi computado');
                    totalVotos++;
                    votosBrancos++;
                    await audioConfirmacao();
                } else {
                    alert('Digite outro voto')
                }
            } else if (senhaMesario) {
                encerrarVotacao = confirm('Deseja REALMENTE encerrar a votação? Precione [Ok] para Sim ou [Cancelar] para Não');
                if(encerrarVotacao){
                    alert('Votação encerrada');
                } else {
                    alert('Continue a votação');
                }
            } else {
                votosNulos++;
            }

    } while (!encerrarVotacao);



    // apresenta os resultados
    console.clear();
    console.log('* BOLETIM DE URNA - RESULTADOS *');
    console.log('Total de votos: ' + totalVotos);
    console.log(`Total de votos do(a) Candidato(a) ${nomeCandidato1}: ${votosCandidato1} voto(s) (${(votosCandidato1 / totalVotos * 100).toFixed(2)}%)`);

    console.log(`Total de votos do(a) Candidato(a) ${nomeCandidato2}: ${votosCandidato2} voto(s) (${(votosCandidato2 / totalVotos * 100).toFixed(2)}%)`);

    console.log(`Total de votos do(a) Candidato(a) ${nomeCandidato3}: ${votosCandidato3} voto(s) (${(votosCandidato3 / totalVotos * 100).toFixed(2)}%)`);

    console.log(`Total de votos Brancos: ${votosBrancos}  voto(s)  (${(votosBrancos / totalVotos * 100).toFixed(2)}%)`);

    console.log(`Total de votos Nulos: ${votosNulos}  voto(s)  (${(votosNulos / totalVotos * 100).toFixed(2)}%)`);

    // determina o ganhador
    if (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) {
        nomeGanhador = nomeCandidato1;
        votosGanhador = votosCandidato1 + votosBrancos;
    } else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) {
        nomeGanhador = nomeCandidato2;
        votosGanhador = votosCandidato2 + votosBrancos;
    } else if (votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2) {
        nomeGanhador = nomeCandidato3;
        votosGanhador = votosCandidato3 + votosBrancos;
    } else {
        ganhador = false;
    }

    // apresenta o ganhador
    console.log('------');

    if (ganhador) {
        console.log('O ganhador nesta urna foi o candidato ' + nomeGanhador + ' com ' + votosGanhador + ' voto(s) absoluto(s) (' + (votosGanhador / totalVotos * 100).toFixed(2) + '%)');
    } else {
        console.log('Não houve ganhador nesta urna (empate entre dois ou mais candidatos).');
    }

    dataHoraFinal = dataHoraAtual();

    console.log(`Data/hora de inicio da votação: ${dataHoraInicial}`);
    console.log(`Data/hora de encerramento da votação: ${dataHoraFinal}`);

    await verificarUrnaAtual().then(verificacao => {
        if (verificacao.status) {
            console.log('Hashes verificados, urna integra.');
        } else {
            console.log('URNA ADULTERADA, DEVE SER DESTACADA!');
            console.log(`Hash da urna: ${verificacao.hashUrnaAtual}`);
            console.log(`Hash esperado: ${verificacao.hashValido}`);
        }
            console.log('Fim do programa');
    })
    
}