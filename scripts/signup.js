
document.addEventListener('DOMContentLoaded', function () {

    const recipeForm = document.querySelector('#signupForm');


    recipeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = recipeForm.action;
    });
});
