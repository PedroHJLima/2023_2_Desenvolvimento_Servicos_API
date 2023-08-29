var xhttp = new XMLHttpRequest();

function buscarInfos(){
    divInfos.innerHTML = "Carregando...";

    $("#divInfos").html = "Carregando...";
    console.log("Carregando...");
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            resposta = this.responseText;
            divInfos.innerHTML = resposta;
            console.log(resposta);
        }
        if(this.readyState == 4 && this.status == 404){
            alert("Página não encontrada");
        }
    };

    xhttp.open("GET","info.txt",true);
    xhttp.send();
}

function gerarNumeros(){
    divNumeros.innerHTML = "Carregando..."
    console.log("Carregando...");
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            divNumeros.innerHTML = this.responseText;
        }
        if(this.readyState == 4 && this.status == 404){
            alert("Página não encontrada");
        }
    };

    valor = document.getElementById("txtNumero").value;
    xhttp.open("GET","servidor.php?numero="+valor,true);
    xhttp.send();
}