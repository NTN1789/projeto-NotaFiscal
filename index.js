function calcularImposto(valor, porcentagem) {
    return (valor * porcentagem / 100).toFixed(2);
}

function gerarNota() {

    const valorVenda = parseFloat(document.getElementById("valorVenda").value);
    const itens = document.getElementById("itens").value;
    const irpf = parseFloat(document.getElementById("irpf").value);
    const pis = parseFloat(document.getElementById("pis").value);
    const cofins = parseFloat(document.getElementById("cofins").value);
    const inss = parseFloat(document.getElementById("inss").value);
    const issqn = parseFloat(document.getElementById("issqn").value);

    if (isNaN(valorVenda) || isNaN(irpf) || isNaN(pis) || isNaN(cofins) || isNaN(inss) || isNaN(issqn)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

   
    const valorIRPF = calcularImposto(valorVenda, irpf);
    const valorPIS = calcularImposto(valorVenda, pis);
    const valorCOFINS = calcularImposto(valorVenda, cofins);
    const valorINSS = calcularImposto(valorVenda, inss);
    const valorISSQN = calcularImposto(valorVenda, issqn);

    const totalImpostos = (
        parseFloat(valorIRPF) +
        parseFloat(valorPIS) +
        parseFloat(valorCOFINS) +
        parseFloat(valorINSS) +
        parseFloat(valorISSQN)
    ).toFixed(2);


    const valorLiquido = (valorVenda - totalImpostos).toFixed(2);


    document.getElementById("notaFiscal").innerHTML = `
        <h3>Nota Fiscal de Serviço (NFS-e)</h3>
        <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>Itens Vendidos:</strong> ${itens}</p>
        <h4>Impostos Calculados:</h4>
        <p><strong>IRPF (${irpf}%):</strong> R$ ${valorIRPF}</p>
        <p><strong>PIS (${pis}%):</strong> R$ ${valorPIS}</p>
        <p><strong>COFINS (${cofins}%):</strong> R$ ${valorCOFINS}</p>
        <p><strong>INSS (${inss}%):</strong> R$ ${valorINSS}</p>
        <p><strong>ISSQN (${issqn}%):</strong> R$ ${valorISSQN}</p>
        <h4>Total de Impostos:</h4>
        <p><strong>Total:</strong> R$ ${totalImpostos}</p>
        <h4>Valor Líquido:</h4>
        <p><strong>Valor Líquido Recebido:</strong> R$ ${valorLiquido}</p>
    `;
}