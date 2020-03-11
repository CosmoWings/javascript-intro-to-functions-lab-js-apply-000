function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  string.toUpperCase();
  console.log(string);
}

function logWhisper(string){
  string.toLowerCase();
  console.log(string);
}
function sayHiToGrandma(string){
  let newString = string.slice(0);
  if (string === newString.toLowerCase()){
    return "I can't hear you!";
  }
  else if (string === newString.toUpperCase()){
    return "YES INDEED!";
  }
  else if (string === "I love you, Grandma."){
    return "I love you, too.";
  }
}
