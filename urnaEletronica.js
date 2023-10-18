function urnaEletronica() {

    // Aqui vai todo o código do programa

    
    console.log('Iniciar o programa');

   // prompt ("digite seu nome")
    

    let
    totalVotosCandidato1 = 0, 
    totalVotosCandidato2 = 0,
    totalVotosCandidato3 = 0,
    totalVotosBranco5 = 0,
    totalVotosNulo8 = 0,
    encerrarVotação0 = 0;



        do {

            //instruções
            console.log('|1|Candidato1');
            console.log('|2|Candidato2');
            console.log('|3|Candidato3');
            console.log('|5|Branco');
            console.log('|8|Nulo');
            console.log('|0|Encerrar a votação');

    
        }while(votos === 0) 

//  console.clear(); Limpa o console
    function votos() {
        votos = parseIntprompt('digite seu voto');
        
   
        switch (votos) {
            case 1:
                totalVotosCandidato1++;
                console.log('O candidato 1 recebeu um voto')
                break;

            case 2:
                totalVotosCandidato2++;
                console.log('O candidato 2 recebeu um voto')
                break;  
        
            case 3:
                totalVotosCandidato3++;
                console.log('O candidato 3 recebeu um voto')
                break;
            
            case 5:
                totalVotosBranco5++;
                console.log('O voto foi branco')
                break;
            
            case 8:
                totalVotosNulo8++;
                console.log('O voto foi nulo')  
                break;  

            case 0:
                encerrarVotação0++;
                console.log('Votação encerrada')
                break;

        default:
            return; 
    
        }
    }  

    function calcular() {

        let 

            do {

                // Instruções
                if (totalVotosCandidato1 >= totalVotosCandidato2 && totalVotosCandidato1 >= totalVotosCandidato3) {
                console.log('O candidato 1 é o eleito');
                } else if (totalVotosCandidatos2 >= totalVotosCandidato1 && totalVotosCandidato2 > totalVotosCandidato3) { 
                console.log('O candidato 2 é o eleito'); 
                }else if (totalVotosCandidato3 >= totalValorCandidato1 && totalVotosCandidato3 > totalCandidato2) {
                console.log('O candidato 3 é o eleito');
                }else if (totalVotosBranco5 >= totalVotosCandidato1) {
                console.log('O canditado 1 é o eleito por votos em branco');
                }else if (totalVotosBranco5 >totalVotosCandidato2) {
                console.log('O candidato 2 é o eleito por votos em branco');
                }else if (totalVotosBranco5 >= totalVotosCandidato3) {
                console.log('O candidato 3 é o eleito por votos em branco');
                }else (totalVotosNulo8 > totalVotosCandidato1 && totalVotosNulo8 > totalVotosCandidato2 && totalVotosNulo8 > totalVotosCandidato3)
                console.log('Nenhum candidato foi eleito') 
            
            }while (valor >= 0);
        
        }
    
}