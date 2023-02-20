// 모듈 가져오기
const axios = require('axios');
const cheerio = require('cheerio');

function crawler(){
    const url = `https://news.daum.net/`;

    // axios로 get요청 보내기
    axios.get(url)
        .then(res => {

            // console.log(res);
            // console.log(res.status); // 잘 처리되었으면 200이라고 뜰 것임
            if(res.status == 200){
                // 크롤링하는 코드
                let crawledNews = [];

                // [ [title: "....", summary: "....", img: "...."], [title: "....", summary: "....", img: "...."], [title: "....", summary: "....", img: "...."] ]

                // res.data에 있는 tag를 cheerio로 검색하여 변수에 담기
                const $ = cheerio.load(res.data);
                const $newsList = $('body > div.container-doc > main > section > div > div.content-article > div.box_g.box_news_issue > ul.list_newsissue > li');

                $newsList.each(function(i){
                    crawledNews[i] = {
                        title: $(this).find('li > div.item_issue > div.cont_thumb > strong > a').text(),
                        img: $(this).find('li > div.item_issue > a > img').attr('src')
                    };
                });
                console.log(crawledNews);

            } else {
                console.log("서버 응답오류") //404일 경우 예외처리
            };
        });
}

crawler();

// div.item_issue > div.cont_thumb > strong > a
//  div.item_issue > a > img