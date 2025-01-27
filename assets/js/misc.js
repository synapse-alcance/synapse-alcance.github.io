document.addEventListener("DOMContentLoaded", function () {
    var whatsappButton = document.getElementById('whatsapp-button');
    whatsappButton.style.bottom = '15px'; // Change the distance from bottom as needed
});

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
};