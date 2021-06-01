var tabLink = document.querySelectorAll('.tab-menu a');
var tabContent = document.querySelectorAll('#tab-content > div');
var originTarget = '#tabs-1';
var tabTarget = originTarget.replace('#','');


for(var i = 0; i < tabLink.length; i++){
    tabLink[i].addEventListener('click', function(e){
        e.preventDefault();

        var originTarget = e.target.getAttribute('href');
        var tabTarget = originTarget.replace('#','');

        for(var j = 0; j < tabContent.length; j++){
            tabContent[j].style.display = 'none';
        }
        document.getElementById(tabTarget).style.display ='block';

        for(var x = 0; x < tabLink.length; x++){
            tabLink[x].classList.remove('active');
            e.target.classList.add('active');
        }
    });
}

document.getElementById('tabs-1').style.display ='block';



