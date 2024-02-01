
let analyzenBD = "The multiverse of blending SCIENCE in ADVERTISING and ART in TECHNOLOGY since 2008.   Analyzen has evolved into a multiverse of reanalyzing creativity’s core";
let perLetter = analyzenBD.split('');

let num = 1;
for(const letter of perLetter){
    if(letter === 'a' || letter === 'A'){
        console.log(num)
        num++;
    }
}