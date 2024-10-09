function kaannos() {
    var kieli =document.getElementById('lang').value
    if (kieli== 'english')
    {
        return "Hello World!";
    }
    else if (lang == 'swedish')
    {
        return "Hej Världen!";
    }
    else
    {
        return "Hola Mundo!";
    }
};