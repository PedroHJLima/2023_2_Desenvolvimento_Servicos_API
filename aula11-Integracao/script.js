function adicionar(){
    nome = document.getElementById("txtNome").value;
    if(nome.length == 0){
        alert("O campo nome é obrigatório!")
    }else{
        ajax = new XMLHttpRequest();

        ajax.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                //alert(nome + "Cadastrado com sucesso!");
                buscarProdutos();
            }
        };

        ajax.open("POST", "http://localhost:8001/produtos", true);
        ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        preco = document.getElementById("txtPreco").value;
        qtd = document.getElementById("txtQuantidade").value;

        ajax.send("nome= " +nome+"& preco = "+preco+"& quantidade = "+qtd);
        alert(nome+preco+qtd);
    }
}

function buscarProdutos(){
    ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            obj = JSON.parse(this.responseText);
            obj.forEach(prod => {
                if(document.getElementById("p" + prod.id) == null){
                    linha = tblProdutos.insertRow(-1);
                    linha.id = "p"+prod.id;
                    cellId = linha.insertCell(0);
                    cellNome = linha.insertCell(1);
                    cellPreco = linha.insertCell(2);
                    cellQtd = linha.insertCell(3);
                    cellExcluir = linha.insertCell(4);

                    cellId.innerHTML = prod.id;
                    cellNome.innerHTML = prod.nome;
                    cellPreco.innerHTML = prod.preco;
                    cellQtd.innerHTML = prod.quantidade;
                    cellExcluir.innerHTML = "<button onclick='excluir("+prod.id+")'>Excluir</button>";
                }
            });
        }
    }

    ajax.open("GET","http://localhost:8001/produtos",true);
    ajax.send();
}

function excluir(idProd){
    ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            buscarProdutos();
        }
    }

    ajax.open("DELETE","http://localhost:8001/produtos",true);
    ajax.send();
}