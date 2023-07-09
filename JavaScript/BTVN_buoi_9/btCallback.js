// function printSlogan(){
//     let slogan = prompt('Nhập slogan: ');
//     let counter = 1;
//     setInterval(function(){
//         console.log(slogan + ' ' + counter);
//         counter++;
//     }, 5000);
// }

// printSlogan();


const texts = ['One Piece', 'Jujutsu Kaisen', 'Naruto', 'Dragonball'];
console.log(texts);
let textsLength = texts.map(item => item.length);
console.log(textsLength);
