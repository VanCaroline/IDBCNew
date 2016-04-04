
    function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 250,
                header = document.querySelector("container");
            if (distanceY > shrinkOn) {
                classie.add(header,"smaller");
                $( "nav" ).css("background-color", "white");
                $("#LogoImage").attr("src", "../img/LogoBlue.png");
                $("#LogoImage").css("width","120px");
                $("#LogoImage").css("height","80px");
                $("#LogoImage").css("margin-top","3px");



            } else {
                if (classie.has(header,"smaller")) {
                    classie.remove(header,"smaller");
                    $( "nav" ).css("background-color", "transparent");
                    $("#LogoImage").attr("src", "img/Logo.png");
                    $("#LogoImage").css("width","210px");
                    $("#LogoImage").css("height","120px");



                }
            }
        });
    }
    window.onload = init();

