
const tabelaPagamentos = [
    [1, 1, 0, 0],     // Empresa A
    [0, 0, 0, 1],     // Empresa B
    [1, 0, 1, 1, 1],  // Empresa C
    [0, 1, 0],        // Empresa F
    [1, 0, 1, 1],     // Empresa I
  ];
  
  function calcularMediaPagamentos(empresa) {
    const totalPagamentos = tabelaPagamentos[empresa].length;
    const pagamentosEfetuados = tabelaPagamentos[empresa].reduce(
      (soma, status) => soma + status,
      0
    );
    return pagamentosEfetuados / totalPagamentos;
  }
  
  function gerarRanking() {
    const empresas = ['A', 'B', 'C', 'F', 'I'];
    const ranking = empresas.map((empresa, index) => {
      const media = calcularMediaPagamentos(index);
      return { empresa: `Empresa ${empresa}`, media };
    });
  
    ranking.sort((a, b) => b.media - a.media); 
    return ranking;
  }
  

  const ranking = gerarRanking();
  console.log("Ranking de Pagadores:");
  ranking.forEach((empresa, index) => {
  console.log(`${index + 1}. ${empresa.empresa} - Média: ${empresa.media.toFixed(2)}`);
  });
  