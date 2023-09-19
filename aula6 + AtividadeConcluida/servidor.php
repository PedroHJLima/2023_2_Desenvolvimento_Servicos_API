<?php
    header("Content-type: application/json");

    if(isset($_REQUEST["buscar"])){
        try {
            $conn = mysqli_connect("localhost", "root", "", "loja_2023_2");
            if( $conn ){
                $result = mysqli_query($conn, "SELECT * FROM produtos");
                $linhas = array();
                while( $row = mysqli_fetch_assoc($result) ){
                    $linhas[] = $row;
                }
                mysqli_close($conn);
                echo '{ "produtos" : '. json_encode($linhas) .' }';
            }else{
                echo '{ "resposta" : "Erro ao conectar com o banco de dados" }';
            }
        }catch (\Throwable $th) {
            echo '{ "resposta" : "Erro ao conectar com o banco de dados" }';
        }
    }

    if(isset($_REQUEST["inserir"])){
        try {
            $conn = mysqli_connect("localhost", "root", "", "loja_2023_2");
            if( $conn ){
                $nomeProd = $_POST["nome"];
                $precoProd = $_POST["preco"];
                if (is_numeric($precoProd)){
                $sql = "INSERT INTO produtos(nome,preco) VALUES ('$nomeProd', $precoProd);";
                $result = mysqli_query($conn, $sql); 
                $id = mysqli_insert_id($conn);
    
                mysqli_close($conn);
                echo '{"id": '.$id.'}';
                }else{
                    echo '{"Alerta" : "Apenas numeros no segundo espaço"}';
                };
            }else{
                echo '{ "resposta" : "Erro ao conectar com o banco de dados" }';
            };
        }catch (\Throwable $th) {
            echo '{ "resposta" : "Erro ao conectar com o banco de dados" }';
        };
    };

    if(isset($_REQUEST["deletar"])){
        try {
            $conn = mysqli_connect("localhost", "root", "", "loja_2023_2");
            if( $conn ){
                $id = $_POST["id"];
                $sql = "DELETE FROM produtos WHERE id=$id;";
                $result = mysqli_query($conn, $sql); 
    
                mysqli_close($conn);
            }else{
                echo '{ "resposta" : "Erro após conectar com o banco de dados" }';
            }
        }catch (\Throwable $th) {
            echo '{ "resposta" : "Erro ao conectar com o banco de dados" }';
        }
    }

?>