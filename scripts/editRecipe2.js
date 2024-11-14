
document.addEventListener('DOMContentLoaded', function () {

    const recipeForm = document.querySelector('#recipeForm');


    recipeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let a=confirm("Are you sure you want to this recipe?");
        if(a){
            window.location.href = recipeForm.action;
        }
        else{
            event.preventDefault();
        }
        
    });
});
