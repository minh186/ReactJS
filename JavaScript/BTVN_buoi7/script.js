// B1:
// for(let i=1; i<=500; i++){
//     console.log(i);
// }



// B2: 
// for(let i=1; i<=300; i++){
//     if(i%2==0 && i%3 == 0){
//         console.log(i);
//     }
// }



// B3:
// let sum = 0;
// for(let i=-30; i<=50; i++){
//     if(i%2==0){
//         sum += i;
//     }
// }
// console.log(sum);



// B4:
// let gt = 1; 
// let n = Number(prompt('Nhập n: '));
// for(let i=1; i<=n; i++){
//     gt = gt * i;
// }
// console.log('n! = ' + gt);



// B5:
// let a = 100;
// let b = -100;
// let min = 100;
// a = Number(prompt('Nhập a: '));
// while(b<=a){
//     b = Number(prompt('Nhập b(b>a): '));
// }
// let x = Number(prompt('Nhập x: '));
// for(let i=a; i<=b; i++){
//     if(i%x == 0){
//         min = i;
//         break;
//     }
// }
// if(min == 100){
//     console.log('Không có số nào trong khoảng [a,b] chia hết cho x');
// }else{
//     console.log('Số nhỏ nhất trong khoảng [a,b] chia hết cho x: ' + min);
// }



// B6:
// let n = 0;
// let S = 0;
// while(n<2){
//     n = Number(prompt('Nhập n(n>=2): '));
// } 
// for(let i=1; i<=n; i++){
//     S += (1/(i*(i+1)));
//     console.log(S);
// }
// console.log('S = ' + S);



// B7:
// let n = Number(prompt('Nhập n: '));
// let count = 0;
// for(let i=1; i<=n; i++){
//     if(n%i==0){
//         count++;
//     }
// }
// console.log('Số ước của n: ' + count);



// B8:
// let count = 0;
// let n = Number(prompt('Nhập n: '));
// for(let i=2; i<n; i++){
//     if(n%i == 0){
//         count += 1;
//     }
// }
// if(count==0){
//     console.log("n là số nguyên tố");
// } else {
//     console.log('n không phải là là số nguyên tố');
// }



// B9:
// let s = '';
// while(isNaN(s)){
//     s = Number(prompt('Nhập chuỗi s(Chỉ gốm chữ số): '));
// }
// let i = Number(prompt("Nhập số I: "));
// while(s.length < i){
//     s = '0' + s;
// }
// console.log(s);



// B10:
// let m = 0;
// let n = 0;
// let max;
// let so_be;
// while(m<=0){
//     m = Number(prompt('Nhập m(m>0): '));
// }
// while(n<=0){
//     n = Number(prompt('Nhập n(n>0): '));
// }
// so_be = (m<n?m:n);
// for(let i=so_be; i>=1; i--){
//     if(m%i == 0 && n%i == 0){
//         max = i;
//         break;
//     }
// }
// console.log('Ước chung lớn nhất của 2 số là: ' + max);



// B11:
// let m = 0;
// let n = 0;
// let min;
// while(m<=0){
//     m = Number(prompt('Nhập m(m>0): '));
// }
// while(n<=0){
//     n = Number(prompt('Nhập n(n>0): '));
// }
// for(let i=1; i<=(m*n); i++){
//     if(i%m == 0 && i%n == 0){
//         min = i;
//         break;
//     }
// }
// console.log('Bội chung nhỏ nhất của 2 số là: ' + min);



// B12:
// let correct = Number(Math.floor(Math.random() * 20) + 1);
// console.log('correct = ' + correct);
// let answer = 0;
// let wrong = 5;
// while(answer<1 || answer>20){
//     answer = Number(prompt('Answer(1 <= answer <= 20)(Bạn có 5 lần): '));
// }
// while(answer!=correct){
//     alert('Đoán sai');
//     wrong--;
//     if(wrong == 0){
//         alert('Bạn đã thua cuộc.');
//         break;
//     }
//     answer = Number(prompt('Mời bạn nhập lại(bạn còn ' + wrong + ' lần): '));
// }
// if(answer == correct){
//     alert('Đoán đúng.');
// }



// B13:
// let n = 0;
// while(n<2 || n>10){
//     n = Number(prompt('Nhập n(2 <= n <= 10): '));
// }
// console.log('Bảng cửu chương của ' + n + ': ');
// for(let i=1; i<=10; i++){
//     console.log(n + " * " + i + ' = ' + (n*i));
// }



// B14:
// let n = 0;
// let str = '';
// while(n<2){
//     n = Number(prompt('Nhập n(n>=2): '));
// }
// for(let i=1; i<=n; i++){
//     str += "    *";
// }
// for(let i=1; i<=n; i++){
//     console.log(str);
//     console.log('');
// }



// B15:
// let m = 0;
// let n = 0;
// let str = '';
// while(m<2){
//     m = Number(prompt('Nhập m(m>=2): '));
// }
// while(n<2){
//     n = Number(prompt('Nhập n(n>=2): '));
// }

// for(let i=1; i<=n; i++){
//     str = '';
//     for(let j=1; j<=m; j++){
//         str += "    *";
//     }
//     console.log(str);
//     console.log('');
// }



// B16:
// let n = 0;
// let str = '';
// while(n<3){
//     n = Number(prompt('Nhập n(n>=3): '));
// }
// for(let i=1; i<=n; i++){
//     str += '  *';
//     console.log(str);
// }
