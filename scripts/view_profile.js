const del1=document.querySelector('#delete_button1');
const del2=document.querySelector('#delete_button2');

const recipe1=document.querySelector('#recipe1');
const recipe2=document.querySelector('#recipe2');

del1.addEventListener('click', function(){
    let a=confirm("Are you sure to delete this recipe?");
    if(a){
        recipe1.remove();
    }
});

del2.addEventListener('click', function(){
    let a=confirm("Are you sure to delete this recipe?");
    if(a){
        recipe2.remove();
    }
});