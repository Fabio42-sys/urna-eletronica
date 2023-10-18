function urnaEletronica() {
    console.log('Iniciar o programa');
    
    let totalVotosCandidato1 = 0;
    let totalVotosCandidato2 = 0;
    let totalVotosCandidato3 = 0;
    let totalVotosBranco5 = 0;
    let totalVotosNulo8 = 0;
    let encerrarVotacao0 = false;
    
    console.log('|1|Candidato1');
    console.log('|2|Candidato2');
    console.log('|3|Candidato3');
    console.log('|5|Branco');
    console.log('|8|Nulo');
    console.log('|0|Encerrar a votação');
    
    while (!encerrarVotacao0) {
      let votos = prompt('Digite seu voto');
      
      switch (parseInt(votos)) {
        case 1:
            totalVotosCandidato1++;
            console.log('O candidato 1 recebeu um voto');
            break;
          
        case 2:
            totalVotosCandidato2++;
            console.log('O candidato 2 recebeu um voto');
            break;
          
        case 3:
            totalVotosCandidato3++;
            console.log('O candidato 3 recebeu um voto');
            break;
          
        case 5:
            totalVotosBranco5++;
            console.log('O voto foi branco');
            break;
          
        case 8:
            totalVotosNulo8++;
            console.log('O voto foi nulo');
            break;

        case 0:
            encerrarVotacao0++;
            if (encerrarVotacao0 = true) {
                console.log('Você deseja encerrar a votação?');
                prompt('Você deseja encerrar a votação?');
             }
            break; 


        default:
            console.log('Opção inválida. Tente novamente');
            break;
      }

    }
    
      console.log(' O resultado foi:');
      
    if (totalVotosCandidato1 > totalVotosCandidato2 && totalVotosCandidato1 > totalVotosCandidato3) {
        totalVotosBranco5 + totalVotosCandidato1
        console.log('O candidato 1 foi o eleito');
        console.log("A porcentagem dos votos do candidato 1 foram:"+ (totalVotosCandidato1/votos *100) + "%");
    }else if (totalVotosCandidato2 > totalVotosCandidato1 && totalVotosCandidato2 > totalVotosCandidato3) {
        totalVotosBranco5 + totalVotosCandidato2
        console.log('O candidato 2 foi o eleito');
        console.log("A porcentagem dos votos do candidato 2 foram:"+ (totalVotosCandidato2/votos *100) + "%");
    }else (totalVotosCandidato3 > totalVotosCandidato1 && totalVotosCandidato3 > totalVotosCandidato2 && totalVotosBranco5 + totalVotosCandidato3)
        totalVotosBranco5 + totalVotosCandidato3
        console.log('O candidato 3 foi o eleito');
        console.log("A porcentagem dos votos do candidato 3 foram:"+ (totalVotosCandidato3/votos *100) + "%");

}