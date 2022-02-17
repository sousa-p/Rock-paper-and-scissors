// objPlayed --> 0 = rock; 1 = paper; 2 = scissors
var isRunning = false;


function round (objPlayed) {
    if (!isRunning) {
        isRunning = true;
        let enemyPlay = generateRandomPlayEnemy();
        inicialEnemyMovesAnime(3375, enemyPlay, objPlayed);
        addSelectedShake(objPlayed);
    }
}


function whoAddPoints(playerResults) {
    if (playerResults == 'win')
        addPointsPlayer();

    if (playerResults == 'lose')
        addPointsEnemy();
}


function consequencesOfTheResult(playerResults) {
    whoAddPoints(playerResults);
    isRunning = false;
}