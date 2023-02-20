// 클릭 시 해당 Url을 새 탭에서 열어주는 함수

function onAnchorClick(event) {
    chorme.tabs.create({
        selected: true,
        url: event.srcElement.href
    });
    return false;
};

// Top 10 Visited url 배열이 주어졌을 때 각각의 Url들을 typedUrls.html에 띄워주기
function buildPopupDom(divName, data) {
    var popupDiv = document.getElementById(divName);

    var ul = document.createElement('ul');
    popupDiv.appendChild(ul);

    for( var i = 0, ie = data.length; i < ie;  ++i) {
        var a = document.createElement('a');
        a.href = data[i];

        a.appendChild(document.createTextNode(data[i]));
        a.addEventListener('click', onAnchorClick);

        var li = document.createElement('li');
        li.appendChild(a);
        ul.appendChild(li);
    }
}

// 가장 핵심이 되는 함수
// Top 10 Visited Url 배열
function buildTypedUrlList(divName) {

    var ms = 1000 * 60 * 60 * 24 * 7; // 1주일을 ms로 환산
    var oneWeekAgo = (new Date).getTime() - ms;

    var numRequestsOutstanding = 0;

    // history를 찾아서
    chrome.history.search({
        startTime: oneWeekAgo, // 일주일 전 시각(ms)
        text: ''
    }, 
    function(historyItems) {
        
        // 해당하는 url을 찾고
        for(var i = 0; i < historyItems.length; ++i){
            var url = historyItems[i].url;

            // 클로저 개념 *** 어려움 ***
            var processVisitsWithUrl = function(url) {
                return function(visitItems) {
                    // 그 Url 중에서 유저가 직접 입력해서 들어간 url을 찾아서 세주는 함수
                    processVisits(url, visitItems);
                };
            };
            
            // Url에 대한 세부 방문정보
            chrome.history.getVisits({url: url}, processVisitsWithUrl(url));
            numRequestsOutstanding++;
        };
        if(!numRequestsOutstanding) {
            // 종료. 최종 배열 만들기 함수 호출
            onAllVisitsProceed();

        }
    });

    // url: 반복횟수
    var urlToCount = {};

    // 그 Url 중에서 유저가 직접 입력해서 들어간 url을 찾아서 세주는 함수
    var processVisits = function(url, visitItems) {
        for(var i = 0, ie = visitItems.length; i < ie; ++i) {
            if(visitItems[i].transition != 'typed') {
                continue;
            }
            if(!urlToCount[url]){
                urlToCount[url] = 0;
            }
            urlToCount[url]++;
        }

        if(!--numRequestsOutstanding) {
            // 종료. 최종 배열 만들기 함수 호출
            onAllVisitsProceed();
        }
    };

    // 종료. 최종 배열 만들기 함수 호출
    var onAllVisitsProceed = function() {
        urlArray = [];
        for(var url in urlToCount){
            urlArray.push(url);
        };
        
        urlArray.sort(function(a, b) {
            return urlToCount[b] - urlToCount[a];
        });

        // buildPopupDom을 이 안에서 호출
        buildPopupDom(divName, urlArray.slice(0, 10));  
    };
};

document.addEventListener('DOMContentLoaded', function(){
    // Top 10 Visited url 배열을 만들어주는 함수
    buildTypedUrlList('typedUrl_div'); // buildPopupDom을 이 안에서 호출
});