document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('#task_form').onsubmit = ()=>{
        let newTask = document.querySelector('#task').value ;

        const li =document.createElement('li');
        li.innerHTML = newTask;
        document.querySelector('#tasks').append(li);
        return false;
    };
});