
    function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 250,
                header = document.querySelector("header"),
                ancho=$(window).width();
            
            if (ancho>760){



            if (distanceY > shrinkOn) {
                
                $( "#bar1" ).css("background-color", "white");
                $("#LogoImage").attr("src", "img/LogoBlue.png");
                $("#LogoImage").css("z-index", "10000000000");
                $("#LogoImage").css("width","120px");
                $("#LogoImage").css("height","80px");
                $("#LogoImage").css("margin-top","3px");
                $(".menu__link").css("color","#b5b5b5");
                $(".menu__link").css("z-index","10000000000");
                $(".menu__shylock").css("top","-30px");
                $("#switch").css("color","black");






            } else {
               {
                  
                    $( "#bar1" ).css("background-color", "transparent");
                    $("#LogoImage").attr("src", "img/Logo.png");
                    $("#LogoImage").css("width","210px");
                    $("#LogoImage").css("height","120px");
                    $(".menu__link").css("color","white");
                    $("#switch").css("color","black");



                }
            }
            }
        });
    }

    window.onload = init();

