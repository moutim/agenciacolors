let input = document.querySelector("#idade")
let formulario = document.querySelector("form")

formulario.addEventListener("submit", function(event){
    // tirando comportamento padrao de formulario. TODO FORM PRECISARA DISSO COM JS
    event.preventDefault();

    
    let status = document.querySelector(".status")

    let idade = parseFloat(input.value);

    let confirmacao = 2021 - idade

    if(confirmacao >= 18 ){
        window.location.href = "home.html";
    }else{
        status.textContent = "você não tem idade para entrar no site!"
    }
});