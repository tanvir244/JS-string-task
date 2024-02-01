
let lowerX = 'x';
let lowerY = 'y';
let lowerXY = [lowerX, lowerY];
console.log(lowerX, lowerY);

for(const lowerLetter of lowerXY){
    if(lowerLetter == 'x'){
        lowerXY[0] = 'X'; 
    }
    else{
        if(lowerLetter == 'y'){
            lowerXY[1] = 'Y';
        }
    }
}

let upperX = lowerXY[0];
let upperY = lowerXY[1];
console.log(upperX, upperY);
