
var params = new URLSearchParams(window.location.search);

document.querySelector(".login").addEventListener('click', () => {
    toHome();
})

function toHome(){
    location.href = '/home?' + params;
}