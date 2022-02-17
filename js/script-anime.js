const options =  document.querySelectorAll('#container-player > .options');
addShakeInArray(options);


function addShakeInArray(elements) {
    for(let element = 0; element < elements.length; element++) {
        addShakeEvents(elements[element]);
    }
}


function addShakeEvents(element) {
    element.addEventListener('mouseover', () => {
        if (!isRunning) {
            element.setAttribute('data-anime', 'shake');
        }
    });
    element.addEventListener('mouseout', () => {
        if(!isRunning){
            element.removeAttribute('data-anime', 'shake');
        }
    });
}


function addSelectedShake(option) {
    options[option].setAttribute('data-anime', 'shake');
}


function removeSelectedShake(option) {
    options[option].removeAttribute('data-anime', 'shake');
}