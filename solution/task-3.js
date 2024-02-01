
let monstarlabBD = "Monstarlab has supported the growing young talent base in Bangladesh";
let perLetter = monstarlabBD.split('');

let num = 1;
for(const letter of perLetter){
    if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
        console.log(num);
        num++;
    }
}