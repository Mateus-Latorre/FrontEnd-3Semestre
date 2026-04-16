
async function cadastrarContato(objetoContato) {
    console.log(objetoContato);

    const resposta = await fetch("http://localhost:3000/contatos",
    {
        method: "POST",
        body: JSON.stringify(objetoContato),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    });

    return await resposta;
}

async function buscarEndereco(cep) {

 if(cep.trim().length < 8){
         alert("O campo CEP deve conter 8 números!");
         return false;
     }

    try {
        aguardandoCampos();
        let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let dados = await retorno.json();
        // console.log(dados);
        console.log(dados.logradouro);
        console.log(dados.bairro);
        console.log(dados.localidade);
        console.log(dados.uf);

        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.uf;
    } catch (error) {
        console.log(error);
    }


}

     function aguardandoCampos(){
         document.getElementById("rua").value = "Aguardando...";
         document.getElementById("bairro").value = "Aguardando...";
         document.getElementById("cidade").value = "Aguardando...";
         document.getElementById("estado").value = "Aguardando...";
     }

function validarFormulario() {
    let quantidadeErros = 0;

    let nome = document.getElementById('nome').value;
    
    if(nome.trim().length == 0){
        formError("nome");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!");
    }
    else{
        reiniciaBorda("nome");
    }

    let sobrenome = document.getElementById('sobrenome').value;
    
    if(sobrenome.trim().length == 0){
        formError("sobrenome");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("sobrenome");
    }
     let email = document.getElementById('email').value;
     if(email.trim().length == 0){
         formError("email");
         quantidadeErros++;
         // alert("O campo sobrenome é obrigatório!");
     }
     else{
         reiniciaBorda("email");
     }
     let pais = document.getElementById('pais').value;
     if(pais.trim().length == 0){
         formError("pais");
         quantidadeErros++;
         // alert("O campo sobrenome é obrigatório!");
     }
     else{
         reiniciaBorda("pais");
     }
     let ddd = document.getElementById('ddd').value;
     if(ddd.trim().length == 0){
         formError("ddd");
         quantidadeErros++;
         // alert("O campo sobrenome é obrigatório!");
     }
     else{
         reiniciaBorda("ddd");
     }
     let telefone = document.getElementById('telefone').value;
     if(telefone.trim().length == 0){
         formError("telefone");
         quantidadeErros++;
         // alert("O campo sobrenome é obrigatório!");
     }
     else{
         reiniciaBorda("telefone");
     }
     let cep = document.getElementById('cep').value;
     if(cep.trim().length == 0){
         formError("cep");
         quantidadeErros++;
         // alert("O campo sobrenome é obrigatório!");
     }
     else{
         reiniciaBorda("cep");
     }
     let rua = document.getElementById('rua').value;
     if(rua.trim().length == 0){
         formError("rua");
         quantidadeErros++;
         // alert("O campo sobrenome é obrigatório!");
     }
     else{
         reiniciaBorda("rua");
     }
     let numero = document.getElementById('numero').value;
     if(numero.trim().length == 0){
         formError("numero");
         quantidadeErros++;
         // alert("O campo sobrenome é obrigatório!");
     }
     else{
         reiniciaBorda("numero");
     }
     let apto = document.getElementById('apto').value;
     if(apto.trim().length == 0){
         formError("apto");
         quantidadeErros++;
         // alert("O campo sobrenome é obrigatório!");
     }
     else{
         reiniciaBorda("apto");
     }
     let bairro = document.getElementById('bairro').value;
     if(bairro.trim().length == 0){
         formError("bairro");
         quantidadeErros++;
         // alert("O campo sobrenome é obrigatório!");
     }
     else{
         reiniciaBorda("bairro");
     }
     let cidade = document.getElementById('cidade').value;
     if(cidade.trim().length == 0){
         formError("cidade");
         quantidadeErros++;
         // alert("O campo sobrenome é obrigatório!");
     }
     else{
         reiniciaBorda("cidade");
     }
     let estado = document.getElementById('estado').value;
     if(estado.trim().length == 0){
         formError("estado");
         quantidadeErros++;
         // alert("O campo sobrenome é obrigatório!");
     }
     else{
         reiniciaBorda("estado");
     }
     let anotacoes = document.getElementById('anotacoes').value;
     if(anotacoes.trim().length == 0){
         formError("anotacoes");
         quantidadeErros++;
         // alert("O campo anotacoes é obrigatório!");
     }
     else{
         reiniciaBorda("anotacoes");
     }

    if(quantidadeErros > 0){
        alert("Existem " + quantidadeErros + " erros no formulário!");
        quantidadeErros = 0;
    }
    else{
        let objetoContato = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            pais: pais,
            ddd: ddd,
            telefone: telefone,
            cep: cep,
            rua: rua,
            numero: numero,
            apto: apto,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            anotacoes: anotacoes,
        }
        let cadastrado = cadastrarContato(objetoContato);
        
        reiniciaTodasAsBordas();

    }
}

function formError(idCampo){
    document.getElementById(idCampo).style.border = "2px solid red";
}

function reiniciaBorda(idCampo){
    document.getElementById(idCampo).style.border = "transparent";
}

function reiniciaTodasAsBordas(){
    document.getElementById("nome").style.border = "transparent";
    document.getElementById("sobrenome").style.border = "transparent";
    document.getElementById("email").style.border = "transparent";
    document.getElementById("pais").style.border = "transparent";
    document.getElementById("ddd").style.border = "transparent";
    document.getElementById("telefone").style.border = "transparent";
    document.getElementById("cep").style.border = "transparent";
    document.getElementById("rua").style.border = "transparent";
    document.getElementById("numero").style.border = "transparent";
    document.getElementById("apto").style.border = "transparent";
    document.getElementById("bairro").style.border = "transparent";
    document.getElementById("cidade").style.border = "transparent";
    document.getElementById("estado").style.border = "transparent";
    document.getElementById("anotacoes").style.border = "transparent";
}

