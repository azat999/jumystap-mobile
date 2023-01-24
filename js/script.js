

const btn = document.querySelector('.btn');
btn.onclick = function() {
    alert('Sorry! Azat Po has not yet learned the backend =(')
}

$('.mobile-menu').on('click',function(e) {
    e.preventDefault();
    $('.menu-btn').toggleClass('menu-active');
    $('.topnav').toggleClass('menu-active');
});
