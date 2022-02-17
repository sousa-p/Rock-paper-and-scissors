const enemyOptions    = document.querySelectorAll('#container-enemy > .options');
const intervalShake   = 1125;
const durationShake   = 1000;
const durationFinalShake = 1750;
let optionsMovesMaked    = 0;


function inicialEnemyMovesAnime(totalDuration, enemyPlay, objPlayed) {
    mkAllOptionsMoves();
    let anime = setInterval(() => { mkAllOptionsMoves(); }, intervalShake);

    setTimeout (() => {
        clearInterval(anime);
        optionsMovesMaked = 0;
        allMove(enemyPlay, durationFinalShake);

        setTimeout(() => {  //Call consequences and remove the selected shake
            consequencesOfTheResult(roundResultPlayer(enemyPlay, objPlayed));
            removeSelectedShake(objPlayed);
        }, durationFinalShake);
    }, totalDuration);
}


function mkAllOptionsMoves () {
    allMove(optionsMovesMaked, durationShake);
    optionsMovesMaked++;
}


function allMove(move, duration) {
    mkMove(move);
    removeMove(move, duration);
}


function mkMove (move) {
    enemyOptions[move].setAttribute('data-anime', 'shake');
}


function removeMove (move, duration) {
    setTimeout(() => {
        enemyOptions[move].removeAttribute('data-anime', 'shake');
    }, duration);
}