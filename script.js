document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelector('#submit').disabled = true;
    
    document.querySelector('#task').onchange = () => {       //onke
        document.querySelector('#submit').disabled = false;
    };
    
    document.querySelector('#task_form').onsubmit = () => {
        let newTask = document.querySelector('#task').value;

        const li = document.createElement('li');
        li.innerHTML = newTask;
        
        document.querySelector('#tasks').append(li);
        document.querySelector('#task').value = '';
        
        document.querySelector('#submit').disabled = true;

        return false;
    };
});