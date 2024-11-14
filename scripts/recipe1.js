
document.addEventListener('DOMContentLoaded', function () {

    const recipeForm = document.querySelector('#commentForm');


    recipeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const input = document.querySelector('#comment');
        const newComment = document.createElement('div');

        

        const htmlContent = `<div class="bg-gray-900 rounded-2xl flex align-baseline shadow-md p-5 border my-5" >
        <p class="text-gray-400 font-extrabold text-xl"><strong>User</strong></p>
        <div class="p-6 text-gray-200 flex">
        ${input.value}
    </div> 
        <div><img src="/images/delete_logo.png" alt="delete" style="height: 45px; margin-left:500px"></div>
    `;

        newComment.innerHTML = htmlContent;

        if(confirm("Do you want to submit this comment?")){
            recipeForm.append(newComment);

            input.value='';
        }
        

    });
});
