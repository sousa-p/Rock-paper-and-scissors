const playerPoints = document.querySelector('#playerPoints');


function roundResultPlayer (enemyObjPlayed, playerObjPlayed) {
    if (enemyObjPlayed < playerObjPlayed && enemyObjPlayed  != playerObjPlayed - 2 || enemyObjPlayed - 2 == playerObjPlayed)
        return 'win';
    if (enemyObjPlayed == playerObjPlayed)
        return 'draw';
    return 'lose';
}


function addPointsPlayer () {
    playerPoints.innerText = Number(playerPoints.innerText) + 1;
}