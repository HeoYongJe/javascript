//1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력 하는 조건식을 완성하라
var x = 15;
// 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라. 
if (10 < x && 20 > x) {  
  console.log(x); 
}

//2.for문을 사용하여 0부터 10미만의 정수 중에서 짝수 만을 작은 수부터 출력하시오.
for(let i = 0; i < 10 ; i++){
  if(i % 2 == 0 ? '참' : '거짓' )
  console.log(i);
}

//3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수 만을 작은 수부터 문자열로 출력하시오
let str = '';
for(let i = 0; i < 10; i++){
  if (i % 2 === 0) str += i;
}
console.log(str);

//4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수 만을 큰수부터 출력하시오.
for(let i = 10; i > 0; i--){
  if (i % 2)
  console.log(i);
}

for(var i=0;i < 10; --i){
  if(i % 2 !== 0)console.log(i)
}

var add = 0;

for(var i = 0; i < 10; i++){
  add +=i; 
}
console.log(add);

var dice =[0,0];
for(var i=0;i<7;i++){
  for(var j=0;j<7;j++){
    if(i + j === 6)console.log(dice = [i,j]);
  };
};

