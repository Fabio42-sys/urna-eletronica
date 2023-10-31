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


function urnaEletronica() {

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
    let Nulos

    let senhaMesario;
    let nomeCandidatos;
    let confirmaçaoVoto;
    let encerrarVotacao;
    let confirmarSenha
    let dataHoraInicial, dataHoraFinal;

    console.log('Início do programa');

    console.log('* CONFIGURAÇÃO DA URNA *');

        senhaMesario = parseInt(prompt('Defina a senha do mesário:'));
        confirmarSenha = confirm('Deseja REALMENTE usar esta senha para o controle do mesario? Digite [OK] para Sim ou [Cancelar] para Não');

    do {

        nomeCandidato1 = prompt('Digite o nome do candidato 1:');
        nomeCandidatos = confirm('Deseja REALMENTE usar este nome na votação? Precione [Ok] para Sim ou [Cancelar] para Não');


        if (nomeCandidato1) {
            alert('O nome foi adicionada!');
        } else {
            alert('Re-escreva o nome');
        }

    } while (!nomeCandidatos);

    do {

        nomeCandidato2 = prompt('Digite o nome do candidato 2:');
        nomeCandidatos = confirm('Deseja REALMENTE usar este nome na votação? Precione [Ok] para Sim ou [Cancelar] para Não');


        if (nomeCandidato2) {
            alert('O nome foi adicionada!');
        } else {
            alert('Re-escreva o nome');
        }

    } while (!nomeCandidatos);

    do {

        nomeCandidato3 = prompt('Digite o nome do candidato 3:');
        nomeCandidatos = confirm('Deseja REALMENTE usar este nome na votação? Precione [Ok] para Sim ou [Cancelar] para Não');


        if (nomeCandidato3) {
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

        totalVotos++;

        if (voto === 1) {
            votosCandidato1++;
            console.log('Você selecionou o candidato 1, deseja REALMENTE votar nele?');
            confirmaçaoVoto = confirm('Deseja votar no candidato selecionado?');
        } else if (voto === 2) {
            votosCandidato2++;
            console.log('Você selecionou o candidato 2, deseja REALMENTE votar nele?');
            confirmaçaoVoto = confirm('Deseja votar no candidato selecionado?');
        } else if (voto === 3) {
            votosCandidato3++;
            console.log('Você selecionou o candidato 3, deseja REALMENTE votar nele?');
            confirmaçaoVoto = confirm('Deseja votar no candidato selecionado?');
        } else if (voto === 5) {
            votosBrancos++;
            console.log('Você selecionou para votar em branco, deseja REALMENTE votar em branco?');
            confirmaçaoVoto = confirm('Deseja votar no candidato selecionado?');
        } else if (senhaMesario) {
            encerrarVotacao = confirm('Deseja REALMENTE encerrar a votação? Precione [Ok] para Sim ou [Cancelar] para Não');
        }else (voto !== Nulos) 
            votosNulos++;


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

}