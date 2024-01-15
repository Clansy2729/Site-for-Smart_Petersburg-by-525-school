//коммент для появления файла на сайте
function sendEmail(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
   
   Window.open("mailto:kraken2000abvgd@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body));
    
    
}


