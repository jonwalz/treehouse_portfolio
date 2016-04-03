(function (){
    var scrollPosition = 0;
    var navbar = document.getElementById('main-nav');

    window.addEventListener('scroll', function(){
        scrollPosition = window.scrollY;
        console.log(navbar);

        if (scrollPosition > 10) {
            navbar.style.backgroundColor = 'black';
        }
        else {
            navbar.style.backgroundColor = '';
        }
    });


}());