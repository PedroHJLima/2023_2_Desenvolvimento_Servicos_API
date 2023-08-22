$(document).ready(
    function(){
        $("#minhaDiv").css("width","200px");
        $("#minhaDiv").css("height","300px");
        $("#minhaDiv").css("background-color","#f0f");
        $("#minhaDiv").css("color","white");
        $("#minhaDiv").html("<i>Olá</i>");
        //$("#minhaDiv").text("<i>Pessoal</i>");
    }
);

$(function(){
    $("#btnAlterar").click(function(){
        $("#minhaDiv").toggle();
      //  $("#minhaDiv").hide(3000,function(){
        //    $("#minhaDiv").show(1000);
        //});
        
    })
});