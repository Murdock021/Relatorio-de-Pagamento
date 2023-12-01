# Ranking de Pagadores

Este código JavaScript gera um ranking das empresas com base na média de pagamentos efetuados ao longo do tempo, utilizando uma matriz `tabelaPagamentos` que armazena o status de pagamento de cada empresa em diferentes períodos.

## Funcionalidades

### `calcularMediaPagamentos(empresa)`

Esta função calcula a média de pagamentos efetuados para uma empresa específica.

- **Parâmetro:**
  - `empresa`: Índice da empresa na matriz `tabelaPagamentos`.

- **Retorno:**
  - Média de pagamentos efetuados pela empresa.

### `gerarRanking()`

Esta função gera o ranking das empresas com base em suas médias de pagamentos.

- **Retorno:**
  - Array de objetos contendo a empresa e sua respectiva média de pagamentos.

## Como Usar

1. **Modificar a matriz `tabelaPagamentos`:** 
   - Adicione ou remova empresas conforme necessário.
   - Atualize os valores booleanos para representar os pagamentos.

2. **Execução do Código:**
   - Execute o código em um ambiente que suporte JavaScript (Node.js, navegador, etc.).

3. **Obtenha o Ranking:**
   - O ranking é gerado automaticamente ao executar a função `gerarRanking()`.
   - O resultado é exibido no console.

## Exemplo de Uso

```javascript
const ranking = gerarRanking();
console.log("Ranking de Pagadores:");
ranking.forEach((empresa, index) => {
  console.log(`${index + 1}. ${empresa.empresa} - Média: ${empresa.media.toFixed(2)}`);
});
