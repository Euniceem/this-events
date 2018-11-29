//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navElem = document.getElementsByClassName('navi');
for (var i = 0; i<navElem.length; i++){
    navElem[i].addEventListener('click', showMenu)
}

function showMenu(){
    var childElem = this.querySelectorAll('.inner')[0];
    if(childElem.style.display === 'block'){
        childElem.style.display = 'none'
    } else{
        childElem.style.display = 'block'
    }
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var restElem = document.getElementsByClassName('name');
for(var i = 0; i<restElem.length; i++){
    restElem[i].addEventListener('click', secretMenu);
}

function secretMenu(){
    var secretElem = this.querySelectorAll('.menu')[0]
    if(secretElem.style.display === 'block'){
        secretElem.style.display = 'none'
    } else{
        secretElem.style.display = 'block'
    }
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/

var thumbsElem = document.getElementsByClassName('thumb');

for(var i = 0; i<thumbsElem.length; i++){
    thumbsElem[i].addEventListener('click', dislike)
    
    var counter = document.createElement('div');
    counter.className = 'hater';
    thumbsElem[i].appendChild(counter);
}

function dislike(){
    var dislikeElem = this.querySelectorAll('.hater')[0];
    dislikeElem.innerHTML++
}

