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

function calcular(){
    //Sempre com .value para pegar o valor e não o elemento
    valor01 = document.getElementById("txtValue01").value;
    valor02 = document.getElementById("txtValue02").value;
    //Os dois fazem a mesma verificação
    if(valor01 != "" && valor02.length > 0){
        //ParseFloat garante que o valor recebido não seja uma string (mesmo que seja uma string numerica)
        v1 = parseFloat(valor01);
        v2 = parseFloat(valor02);
        var numero = {
            n1 : v1, 
            n2 : v2,
            //Declaração base de função
            somar: function(){
                return this.n1 + this.n2;
            },
            subtrair: function(){
                return this.n1 - this.n2;
            }
        };

        document.getElementById("pResult").innerHTML = "Soma: " + numero.somar() + "<br>Subtração: " + numero.subtrair();
    }
}