
    function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 250,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                classie.add(header,"smaller");
                $( "nav" ).css("background-color", "white");
                $("#LogoImage").attr("src", "images/LogoBlue.png");



            } else {
                if (classie.has(header,"smaller")) {
                    classie.remove(header,"smaller");
                    $( "nav" ).css("background-color", "transparent");
                    $("#LogoImage").attr("src", "images/Logo.png");


                }
            }
        });
    }
    window.onload = init();

