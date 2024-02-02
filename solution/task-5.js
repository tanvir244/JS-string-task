// Task-5 
let language = "we loVe JaVa as coFFee driNk";
let iterators1 = language.split(' ');
let tokens = [];
console.log(iterators1); 


for(let iterators2 of iterators1){
    // ===
    let upperCase;
    let lowerCase;

    // ============
    let iterators3 = iterators2.split('');
    upperCase = iterators3[0].toUpperCase();

    // ============
    let afterFirstLetter = iterators2.slice(1);
    if(afterFirstLetter.length >= 1){
        for(let i = 1; i <= afterFirstLetter.length; i++){
             lowerCase = afterFirstLetter.toLowerCase();
        }
    }
    const concatination = upperCase.concat(lowerCase);
    tokens.push(concatination);
}
let finalResult = tokens.join(' ');
console.log(finalResult);
    