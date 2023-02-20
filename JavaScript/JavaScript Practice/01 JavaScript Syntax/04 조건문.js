/** if, else: 해당 조건이 참일 때 해당 블록을 실행하는 구문
 * if 조건을 충족하지 못했을 때 차례대로 else if 구문으로 넘어가고,
 * else if 조건도 미 충족 시 else 구문으로 넘어간다.
 */

var a = 3;
var result = '';
if(a > 2) {
    result = 'a is greater than 2';
} else if( a == 2) {
    result = ' a is 2';
} else {
    result = 'a is smaller than 2';
}
console.log(result); // a is greater than 2

/** switch문
 * description: if와 비슷하지만 더 직관적이고 단순한 구조이다.
 * 논리연산이 아닌 값의 동일 여부로 분기를 나눈다.
 * 변수를 입력받았을 때 같은 값이 있는 바로 그 케이스로 넘어간다(차례차례 X)
 *   단, break문이 없을ㅇ 경우 그 아래 케이스도 실행하게 된다.
 */

var a = 1;
var result = '';

switch(a) {
    case 1:
        result = 'Number 1';
        break;
    case 2: 
        result = 'Number 2';
        break;
    default: 
        result = 'I do not know what number';
break;
}

console.log(result); // Number 1