// 실습: for, for-in, while문을 이용하여 10부터 1까지 역순으로 출력하는 프로그램을 만들어보자.

    // for
    for(var i = 10; i > 0; i--){
        console.log(i);
    }

    // for - in
    a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    var result = '';

    for(i in a) {
        console.log(a[i]);
    }

    // while
    var i = 10;
    while(i > 0) {
        console.log(i);
        i--;
    }