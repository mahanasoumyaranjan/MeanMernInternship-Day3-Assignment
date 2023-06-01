const toggleBtn = document.querySelector('.toggle-btn');
const listContainer = document.querySelector('.list-container');
const descVisibilityToggleBtns = document.querySelectorAll('.toggle-visibility')

toggleBtn.addEventListener('click', () => {
    //when clicked show the hidden items
    listContainer.classList.toggle('flex');
})

descVisibilityToggleBtns.forEach((btn)=>{
    btn.addEventListener('click',function(e){
        e.target.parentNode.querySelector('.description').classList.toggle('hidden');
    })
})
