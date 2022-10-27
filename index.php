<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>   
    <title>Document</title>
</head>
<body>
    <div class="container-top">
        <div class="logo">
            <img src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0" alt="" sizes="300" srcset="">
        </div>
    
        <div class="selected">

            <span class="info">Estado:</span>

            <select name="user_current" id="estado">
                <?php

                $estado = ["Selecione...", "São Paulo", "Paraná", "Bahia", "Belo Horizonte", "Rio Grande do Sul"];

                foreach ($estado as $key) { ?>
                    <option value="<?php echo $key; ?>" id="dado" name="user_current"><?php echo $key ?></option>;
                <?php } ?>
            </select>

            <span class="info">Cidade:</span>

            <select id="cidade">
                    <?php
                    $cidade = ["Selecione...", "Santos", "Curitiba", "Recife", "Belo Hozironte", "Foz do Iguaçu"];
                    foreach ($cidade as $key) { ?>
                        <option value="<?php echo $key; ?>" id="dado" name="user_current"><?php echo $key ?></option>;
                    <?php } ?>
            </select>
        
        </div>

        <div class="submit">
            <input type="submit" id="submit">
        </div>

 
    </div>

    <div class="content">
       <div class="primary">
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print</p>
       </div>   

       <div class="secundary">
            <p id="conteudo"> </p>
       </div>

       <div class="ternary">
            <p id="dica"> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print</p>
       </div>
    </div>

    <script>
        $("#estado").on("change", function(){
            var estado = $("#estado").val();
            
            document.querySelector('#conteudo').innerText = "O estado de " + estado + " é rico em turismo " ;
        });

        $("#cidade").on("change", function(){
            var cidade = $("#cidade").val();

            document.querySelector('#conteudo').innerText = cidade
        });
    </script>

</body>
</html>