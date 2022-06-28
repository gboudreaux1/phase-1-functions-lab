// Code your solution in this file!

function distanceFromHqInBlocks (blockNumber) {
    if (blockNumber > 42) {
      return blockNumber - 42;
    } else {
      return 42 - blockNumber;
    }
  }

  function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
  }

  function distanceTravelledInFeet(initial,final) {
    if (initial < final) {
        return (final - initial) * 264;
        
    }
     else {
        return (initial - final) * 264;
    }
    
  }
  function calculatesFarePrice(initial,final) {
    const distance = distanceTravelledInFeet(initial,final);
    if (distance <= 400) { 
        return 0;
        
    } else if(distance > 400 && distance <= 2000) {
        return 2.56;
    } else if (distance > 2000 && distance < 2500){
        return 25;
    }else {
        return 'cannot travel that far';
    }
    
  }