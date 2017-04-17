 export function scoreStorage () {
  // 21u – 22u: KLJ
  // 22u – 23u: JIN '99
  // 23u – 0u: Kriko-m, Tereken, Akabe
  // 0u– 01u: Bermijn, D’olmen, Dobo
  // 1u- 2u: Chiro Gewest Rondom
  // 2u-3u: Vincies, Kristoffel, Martinus
  // 3u-4u: Kriko & Tarsicius

  let _scores = [
    {id: 0, name: 'KLJ', score: 0, active: true},
    {id: 1, name: 'JIN \'99', score: 0, active: true},
    {id: 2, name: 'Kriko-m, Tereken, Akabe', score: 0, active: true},
    {id: 3, name: 'Bermijn, D\'olmen, Dobo', score: 0, active: true},
    {id: 4, name: 'Chiro Gewest Rondom', score: 0, active: true},
    {id: 5, name: 'Vincies, Kristoffel, Martinus', score: 0, active: true},
    {id: 6, name: 'Kriko & Tarsicius', score: 0, active: true}
  ];

  function init(){
     let storedScores = JSON.parse(localStorage.getItem('scores'));

     if(storedScores){
       _scores = storedScores;
       console.log(storedScores)
     }
  }

  function addPointToScore (id) {
    _scores[id].score = _scores[id].score + 1;
    setStoredScores();
  }

  function getScores () {
    return _scores;
  }

  function disableLast (){
    let lowestScore = {score: 99999};
    for (var i = 0; i < _scores.length; i++) {
      if( _scores[i].score < lowestScore.score && _scores[i].active === true) {
        lowestScore = _scores[i];
      }
    }
    _scores[lowestScore.id].active = false;
    localStorage.setItem('scores',JSON.stringify(_scores));
    return lowestScore.id;
  }

  function setStoredScores(){
    localStorage.setItem('scores',JSON.stringify(_scores));
  }

  init();

  return {
    addPointToScore: addPointToScore,
    getScores: getScores,
    disableLast: disableLast
  };


}
