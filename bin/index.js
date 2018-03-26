function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const toss = () => {
  res = getRandomIntInclusive(0, 1);
  if (res){
    return "Heads";
  }
  else {
    return "Tails";
  }
}

const isHead = () => {
  res = getRandomIntInclusive(0, 1);
  if (res){
    return true;
  }
  else {
    return false;
  }
}

const isTail = () => {
  res = getRandomIntInclusive(0, 1);
  if (res){
    return true;
  }
  else {
    return false;
  }
}

module.exports = {
  toss   : toss,
  isTail : isTail,
  isHead : isHead
}
