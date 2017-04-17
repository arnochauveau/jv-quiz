import angular from 'angular';

export function keyCaptureService(scoreStorage){

  let _keys = {
    'a': 0,
    'z': 1,
    'e': 2,
    'r': 3,
    't': 4,
    'y': 5,
    'u': 6
  };

  function keyPressed(event) {
    console.log(event.key);

    if(event.key === 'Delete'){
    let lastId = scoreStorage.disableLast();
    removeKey(lastId);

    }

    if(_keys.hasOwnProperty(event.key)){
      scoreStorage.addPointToScore(_keys[event.key]);
    }
  }

  function removeKey(index){
    for(let key in _keys) {
        if(_keys[key] == index) {
            delete _keys[key];
        }
    }
  }

  return {keyPressed};
}
