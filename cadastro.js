function valida(){
    if(validaEmail() && validaIdade() && validaNome() && validaSalario() && validaTelefone() 
    && validaSobrenome() && validaFoto() && validaSenha() && validaObs()) {
        window.alert('Cadastro realizado com sucesso!!!')
    }
    else window.alert('Cadastro Inválido !!!')
}

function validaSobrenome(){
    var sobrenome = document.querySelector("#sobrenome").value;
    if(vazio(sobrenome) == true){
        return false
    }
    else if(sobrenome.includes(' ')){
        return false
    }
    else if(verificaNumero(sobrenome) == false){
        return false
    }
    else return true
}
function validaNome(){
    var nome = document.querySelector("#nome").value;
    if(vazio(nome) == true){
        return false
    }
    else if(nome.includes(' ')){
        return false
    }
    else if(verificaNumero(nome) == false){
        return false
    }
    else return true
}
function validaTelefone(){
    var tel = document.querySelector("#telefone").value;
    if(vazio(tel) == true){
         return false 
    }
    else if(tel.length < 10 || tel.length > 11){
        return false
    }
    else return true
    
}
function validaEmail(){
    var email = document.querySelector("#email").value;
    if(vazio(email) == true){
        return false
    }
    else if(email.includes('@') == false){
        return false
    }
    else return true
}
function validaSalario(){
    var salario = document.querySelector("#salario").value;
    salario = parseFloat(salario)
    if(vazio(salario) == true){
        return false
    }
    else if(salario > 100000.0 || salario < 400.0){
        return false
    }
    else return true
}
function validaIdade(){
    var idade = document.querySelector("#idade").value;
    idade = parseInt(idade)
    if(vazio(idade) == true){
        return false
    }
    else if(idade < 10 || idade > 100){
        return false
    }
    else return true
}
function validaSenha(){
    var senha = document.querySelector('#senha').value;
    if(vazio(senha) == true){
        return false
    }
    else if(senha.length < 8){
        return false
    }
    else return true
}
function validaFoto(){
    var foto = document.querySelector('#foto').value;
    if(vazio(foto) == true){
        return false
    }
    else return true
}
function validaObs(){
    var obs = document.querySelector('#observacoes').value;
    if(obs.length > 200){
        return false
    }
    else return true
}
function vazio(e){
    if(e.length === 0){
        return true
    }
    else{
        return false
    }
}
function verificaNumero(str){
    if(str.includes('0')) return false
    else if(str.includes('1')) return false
    else if(str.includes('2')) return false
    else if(str.includes('3')) return false
    else if(str.includes('4')) return false
    else if(str.includes('5')) return false
    else if(str.includes('6')) return false
    else if(str.includes('7')) return false
    else if(str.includes('8')) return false
    else if(str.includes('9')) return false
    else return true
}




