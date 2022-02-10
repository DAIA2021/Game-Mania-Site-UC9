// function mostrarPopup(){
//     window.alert("wello Word")
// }



let email = document.getElementById("campo-email")

function enviarEmail(){
    let emailDigitado = email.Value;
    console.log(emailDigitado)
}

// jquery...

$(document).ready(function(){

   $("#barras").click(function(){
       if($("#menu").hasClass("#menu-ativo")){
           $("#menu").removeClass("#menu-ativo")
       }else{
           $("#menu").addClass("menu-ativo")
       }
   })
     
})
    
//    {) fechamento da função abertura ( antes da function

// $(document).ready(function(){

//     $("#barras").click(function(){
//         $("#menu").toggleClass("#menu-ativo") 

// })
// })


// criação função carrosel

$(document).ready(function(){
   $("carrosel img:eq(0)").addClass("banner-ativo").show()

})

setInterval(slide,1000)
function slide(){
    
    if($(".banner-ativo").next().length){
        $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    }else{
        $(".banner-ativo").removeClass().hide()
        $("carrosel img:eq(0)").addClass("banner-ativo").show()

    }
}

   
