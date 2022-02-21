// function mostrarPopup(){
    //     window.alert("wello Word")
    // }
    
    $(document).ready(function(){
    
        $("#barras").click(function(){
           if($("#menu").hasClass("#menu-ativo")){
             $("#menu").removeClass("#menu-ativo")
           }else{
               $("#menu").addClass("menu-ativo")
           }
        })
    

        $("#carrosel img:eq(0)").addClass("banner-ativo").show()
    
        setInterval(slide, 1000)
    
        function slide(){
            if($(".banner-ativo").next().length ){
                $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
            }else{
                $(".banner-ativo").removeClass().hide()
                $("#carrosel img:eq(0)").addClass("banner-ativo").show()
            }
        }
         
     })
    
    let email = document.getElementById("campo-email")
    
    function enviarEmail(){
        let emailDigitado = email.Value;
        console.log(emailDigitado)
    }
    
    // jquery...
    
     
     
        
    //    {) fechamento da função abertura ( antes da function
    
     //$(document).ready(function(){
    
     //   $("#barras").click(function(){
     //       $("#menu").toggleClass("#menu-ativo") 
    
    //})
    //})
    
    
    // criação função carrosel
    
    //login funcionalidades
    
    let emaillogin = document.getElementById("campo-email");
    
    
    function enviarEmail(){
        let emailDigitado = emaillogin.Value;
        console.log (emailDigitado)
    }
       
    let senhalogin = document.getElementById("campo-senha");
    
    function enviarSenha(){
        let senhaDigitado = senhalogin.Value;
        console.log(senhaDigitado)
    }