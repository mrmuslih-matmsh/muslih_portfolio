
$(document).ready(function(){

    $('#menu').click(function(){

        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');

    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        
        if($(window).scrollTop()>0){
            $('.top').show();
        } else{
            $('.top').hide();
        }

    });

    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
    
        $('html,body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
    
        500,'linear'
    
        );
    
        });

});

var typed = new Typed(".auto_type_qualification",{
    strings:["BSc(Hons) Computer Science in Software Engineering","HND in Software Engineering","Diploma in IT","Diploma in English","NVQ 4 in Graphic Design"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".auto_type_skills",{
    strings:["Web Development","UI UX Design","Wordpress","SEO","Mysql","Java","Figma","Firebase"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".post",{
    strings:["Web Developer","UI UX Designer","Wordpress Developer","Database Administrator"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

function showBigImage(imageSrc) {
    var modal = document.getElementById('bigImageModal');
    var bigImage = document.getElementById('bigImage');

    bigImage.src = imageSrc;
    modal.style.display = 'block';
}

function closeBigImageModal() {
    var modal = document.getElementById('bigImageModal');
    modal.style.display = 'none';
}







