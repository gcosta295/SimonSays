const srcArr = ['sounds/drop.mp3', 'sounds/meow.mp3', 'sounds/lego.mp3', 'sounds/duolingo.mp3'];

function playSound(num){
    const audio = new Audio(srcArr[num]);
    audio.play();
}

function start (){
    PName = "input"
    HPoints = 0;
    PPoints = 0;
    const LNums = [];
    gameTF = true;
    game(PName, HPoints, PPoints, LNums, gameTF)
}

function game (PName, HPoints, PPoints, LNums, gameTF){
    while (gameTF==true){
          RNum = Math.floor(Math.random() *4);
          LNums.push(RNum);
          for (i = 0; i <= LNums.length; i++){
              if (LNums[i]==0){
                playSound(0);
              }
              if (LNums[i]==1){
                playSound(1);
              }
              if (LNums[i]==2){
                playSound(2);
              }
              if (LNums[i]==3){
                playSound(3);
              }
          }
          for (i = 0; i <= LNums.length; i++){
              TempNum = LNums[i];
              addEventListener("click", function() {
              alert("Hello World!");
              });
              if (TempNum != ClickInput){
                gameTF=false;
                  break;
              }
              if (gameTF == true){
                  PPoints +=10;
              }
          }
      }
}