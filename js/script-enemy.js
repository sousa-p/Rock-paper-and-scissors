const enemyDiv    = document.querySelector('#enemy');
const enemyPoints = document.querySelector('#enemyPoints');


function isTheValidPlay (sortedPlay) {
    if (sortedPlay  < 3)
        return true;
    return false;
}


function generateRandomPlayEnemy () {
    while (true) {
        let sortedPlay = Math.floor(Math.random() * 10);
        if (isTheValidPlay(sortedPlay)) {
            return sortedPlay;
        }
    }
}


function addPointsEnemy () {
    enemyPoints.innerText = Number(enemyPoints.innerText) + 1;
}