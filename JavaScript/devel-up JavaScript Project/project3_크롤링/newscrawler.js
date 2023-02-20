// 모듈 가져오기
const axios = require('axios');
const cheerio = require('cheerio');

function crawler(){
    const url = `https://www.melon.com/chart/index.htm`;

    // axios로 get요청 보내기
    axios.get(url)
        .then(res => {

            // console.log(res);
            // console.log(res.status); // 잘 처리되었으면 200이라고 뜰 것임
            if(res.status == 200){
                // 크롤링하는 코드
                let crawledMusic = [];

                // [ [title: "....", artist: "....", img: "...."], [title: "....", artist: "....", img: "...."], [title: "....", artist: "....", img: "...."] ]

                // res.data에 있는 tag를 cheerio로 검색하여 변수에 담기
                const $ = cheerio.load(res.data);
                const $musicList = $(' #lst50 ');

                $musicList.each(function(i){
                    crawledMusic[i] = {
                        title: $(this).find(' div > div > div.ellipsis.rank01 > span > a ').text(),
                        artist: $(this).find(' div > div > div.ellipsis.rank02 > a ').text(),
                        img: $(this).find(' div > a > img ').attr('src')
                    };
                });
                console.log(crawledMusic);

            } else {
                console.log("서버 응답오류") //404일 경우 예외처리
            };
        });
}

crawler();

// td > div.wrap > div.wrap_song_info > div.ellipsis.rank01 > span > a

//  td > div.wrap > div.wrap_song_info > div.ellipsis.rank02 > a

// td > div.wrap > a > img



// #lst50 > td:nth-child(6) > div > div > div.ellipsis.rank01 > span > a

// #lst50 > td:nth-child(6) > div > div > div.ellipsis.rank02 > a

// #lst50 > td:nth-child(4) > div > a > img


