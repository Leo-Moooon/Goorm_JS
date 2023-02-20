/** 자바스크립트의 자료형
 * Number
 * String
 * Boolean
 * Array
 */

    /** (1) Number
     * Description: 숫자와 관련된 모든 자료형을 가진다.
     * 10진수, 8진수, 16진수와 소수점이 있는 실수 및 지수를 사용할 수 있다.
     */
    var int_data = 1;
    var float_data1 = Number('1.0');
    var float_data2 = new Number('4.1254');
    
    typeof int_data // "number"
    typeof float_data1; // "number"
    typeof float_data2; // "object"

    console.log((255).toString(10)); // 255
    console.log((255).toString(16)); // ff
    console.log((255).toString(8)); // 377
    console.log((255).toString(2)); // 1111_1111

    /** (2) String
     * Description: 문자열 값을 가지는 자료형으로, 큰 따옴표 작은 따옴표 모두 사용 가능하다.
     * 사용자가 일정한 규칙을 가지고 알아서 따옴표를 사용하면 된다.
     */
    var character1 = 'a';
    var character2 = 'b';
    var string1 = "Double Quotations";
    var string2 = 'Single Quotations';
    var string3 = new String("String Object");

    typeof string1; // string 
    typeof string3; // object
    
    string2[4]; // 1

    console.log(string2.charAt(4)); // 1
    console.log(string3[1]); // t
    console.log(string1.length); // 17
    console.log(string1.toUpperCase()); // DOUBLE QUOTATIONS
    console.log(string2.toLowerCase()); // single quotation
    console.log(string3.indexOf('g')); // 5
    console.log(string3.indexOf('x')); // -1

    /** (3) Boolean
     * Description: 참 또는 거짓을 값으로 가지는 자료형이다.
     * true / false
     */
    var result1 = new Boolean();
    var result2 = true;

    typeof result1; // object
    typeof result2; // boolean

    console.log(Boolean("test")); // true
    console.log(Boolean("")); // false
    console.log(Boolean({})); // true


    /** (4) Array 
     * Description: 배열 자료형으로, 배열 연산을 할 수 있는 다양한 메소드를 지원하는 객체이다.
    */
    var array1 = [1, 2, 3];
    var array2 = new Array(1, 2);
    array2.push(3); // 3
    var array3 = new Array(3);
    array3; // [undefined X 3]

    typeof array1;

    array1.toString(); // "1, 2, 3"
    array1.valueOf(); // [1, 2, 3]
    array1.length; // 3
    array1[1]; // 2

    console.log(array2.push("new1")); // 4
    console.log(array2.push("new2")); // 5

    array2; // [1, 2, 3, "new1", "new2"]

    array2.pop(); // new2

    console.log(array2); // [1, 2, 3, "new1"]
    
    array3 = new Array(4, 2, 1, 3, 0); // [4, 2, 1, 3, 0]

    console.log(array3.sort()); // [0, 1, 2, 3, 4]