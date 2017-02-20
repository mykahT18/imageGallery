var animation = document.querySelector('.globe');


function spinner(event){

    event.preventDefault();    
    var target = event.target;

    if(animation.classList.contains('spin')){
    	animation.classList.remove('spin');
    

    } else {
    	animation.className += ' spin';
	} 

}

    var el = document.querySelector('.globe');
    el.addEventListener('click', spinner); 
