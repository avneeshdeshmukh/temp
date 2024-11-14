
document.addEventListener('DOMContentLoaded', function () {

    const recipeForm = document.querySelector('#loginForm');


    recipeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = recipeForm.action;
    });
});
