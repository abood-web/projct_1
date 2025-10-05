   $(document).ready(function(){
// ================><===========
    $(window).on("scroll", function (){
        if ( $(window).scrollTop() >= 675) {
            $(".static").css({
                opacity : 1,
            });
        } else {
            $(".static").css({
                opacity : 0,
            });
        }
       
         console.log( $(window).scrollTop())
        // --------
        if ( $(window).scrollTop() <= 1) {
            $(".nav").addClass("animate__fadeInDown").css({
                 animationDelay: 2000,
            })
        } else {
            $(".nav").removeClass("animate__fadeInDown")
        }
        // --------------
        if ( $(window).scrollTop() <= 1) {
            $(".contenar1").addClass("animate__fadeInRight").css({
                 animationDelay: 2000,
            })
        } else {
            $(".contenar1").removeClass("animate__fadeInRight")
        }
        // --------------
        if ( $(window).scrollTop() >= 600 ) {
            $(".news-s").addClass("animate__fadeInUp").css({
                 animationDelay: 2000,
            })
        } else {
            $(".news-s").removeClass("animate__fadeInUp")
        }

        // ----------------
          if ( $(window).scrollTop() >= 164) {
            $(".animo1").addClass("animate__fadeInUp").css({
                 animationDelay: 2000,
            })
        } else {
            $(".animo1").removeClass("animate__fadeInUp")
        }
         // ----------------
          if ( $(window).scrollTop() >= 1320) {
            $(".gols").addClass("animate__fadeInRight").css({
                 animationDelay: 2000,
            })
        } else {
            $(".gols").removeClass("animate__fadeInRight")
        }
        //---------------------
        if ( $(window).scrollTop() >= 1880) {
            $(".says").addClass("animate__fadeInUp").css({
                 animationDelay: 2000,
            })
        } else {
            $(".says").removeClass("animate__fadeInUp")
        }
        // ----------------
        if ( $(window).scrollTop() >= 2755) {
            $(".im").addClass("animate__fadeInRight").css({
                 animationDelay: 2000,
            })
        } else {
            $(".im").removeClass("animate__fadeInRight")
        }
        // ----------------
        if ( $(window).scrollTop() >= 2676) {
            $(".contactto").addClass("animate__backInDown").css({
                 animationDelay: 2000,
            })
        } else {
            $(".contactto").removeClass("animate__backInDown")
        }
        // ----------------
        if ( $(window).scrollTop() >= 2676) {
            $(".canto").addClass("animate__backInDown").css({
                 animationDelay: 2000,
            })
        } else {
            $(".canto").removeClass("animate__backInDown")
        }
        // ----------------
        if ( $(window).scrollTop() >= 3261) {
            $(".form").addClass("animate__fadeInRight").css({
                 animationDelay: 2000,
            })
        } else {
            $(".form").removeClass("animate__fadeInRight")
        }
        // ----------------
        if ( $(window).scrollTop() >= 3596) {
            $(".fo").addClass("animate__fadeInRight").css({
                 animationDelay: 2000,
            })
        } else {
            $(".fo").removeClass("animate__fadeInRight")
        }
        // ----------------
        if ( $(window).scrollTop() >= 3700) {
            $(".ico").addClass("animate__bounceIn").css({
                 animationDelay: 2000,
            })
        } else {
            $(".ico").removeClass("animate__bounceIn")
        }
        

        })
    })



