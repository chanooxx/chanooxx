var btnCollapse = document.getElementById('btn-collapse'),
    heading = document.getElementsByClassName('panel-heading'),
    question = document.getElementsByClassName('panel-question'),
    answer = document.getElementsByClassName('panel-body');


for(var i = 0; i < heading.length; i++){
    heading[i].addEventListener('click', function(ev){
        for(var j = 0; j < question.length; j++){
            question[j].classList.remove('active');
            ev.target.parentNode.classList.add('active');
            activateBody();
        }
    });
}

function activateBody(){
    for(var x = 0; x < answer.length; x++){
        answer[x].style.display = 'none';
    }
    var activepanel = document.querySelector('.panel-question.active .panel-body');

    activepanel.style.display = 'block';
}
activateBody();

btnCollapse.addEventListener('click', function(){
    for(var g = 0; g < answer.length; g++){
        answer[g].style.display = 'none';
    }
});