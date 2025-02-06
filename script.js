document.getElementById("cadastrar").addEventListener("click", function() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;

    const dados = [{
      "Nome": nome,
      "Email": email,
      "CPF": cpf
    }];

    const ws = XLSX.utils.json_to_sheet(dados);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Cadastro");

    XLSX.writeFile(wb, "cadastro.xlsx");
  });