
let brainStation23 = "Brain Station 23 is a software development company.";
let perLetter = brainStation23.split('');

let num = 1;
for(const letter of perLetter){
    if(letter === "a"){
        console.log(num)
        num++;
    }
}
