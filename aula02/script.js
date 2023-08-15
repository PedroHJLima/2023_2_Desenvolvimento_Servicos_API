function validar(){
    var valor = document.getElementById("txtValor").value;
    var pInfo = document.getElementById("info");

    if(valor.length == 0){
        pInfo.innerHTML = "O campo valor deve ser preenchido!";
        return false;
    }else{
        if(isNaN(valor)){
            pInfo.innerHTML = "Valor inválido";
            return false;
        }else{
            if(valor < 0 || valor > 10){
                pInfo.innerHTML = "Valor inválido";
                return false;
            }else{
                return true;
            }
        }
    }

}