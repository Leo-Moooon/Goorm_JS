var crudApp = new function() {

    this.myClass = [
        {ID:'1', Class_Name: '운영체제', Category: '전공필수', Credit: 3},
        {ID:'2', Class_Name: '컴퓨터구조론', Category: '전공선택', Credit: 4},
        {ID:'3', Class_Name: '심리학의 이해', Category: '교양필수', Credit: 2},
    ]

    // 선택할 수 있는 항목 미리 정의
    this.Category = ['전공필수', '전공선택', '교양필수', '교양선택'];

    // Table Header에 담길 데이터를 확장성을 위해 배열에 담기
    this.col = [];
}

// 위의 데이터들을 토대로 실제 테이블을 만들어주는 메소드
this.creatTable = () => {
    // 데이터를 만들고 데이터를 채우는 코드

    // col에 th에 해당하는 데이터를 넣어주는 코드
        // myClass 속 객체 먼저 순회
    for (var i = 0; i < this.myClass.length; i++) {
        // 각 객체들 속의 key값들 순회
        for(var key in this.myClass[i]){
            // key를 col 배열에 담기
            if(this.col.indexOf(key) === -1 ) this.col.push(key);
        }
    }
    
}