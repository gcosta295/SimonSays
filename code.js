PName = "input";
HPoints = 0; //solo si es nuevo el usuario
PPoints = 0;
button0 = 0;
button1 = 1;
button2 = 2;
button3 = 3;
const LNums = [];
play = true;
while (play==true){
    RNum = Math.floor(Math.random() *4);
    LNums.push = RNum;
    for (i = 0; i <= LNums.length; i++){
        if (LNums[i]==button0){
            //prende apaga
        }
        if (LNums[i]==button1){
            //prende apaga
        }
        if (LNums[i]==button2){
            //prende apaga
        }
        if (LNums[i]==button3){
            //prende apaga
        }
    }
    for (i = 0; i <= LNums.length; i++){
        TempNum = LNums[i];
        ClickInput = 0;
        if (TempNum != ClickInput){
            play=false;
            break;
        }
        if (play == true){
            PPoints +=1;
        }
    }
}