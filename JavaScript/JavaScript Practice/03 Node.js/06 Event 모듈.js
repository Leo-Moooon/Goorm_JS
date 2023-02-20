/** Event 모듈
 * 이벤트 이름: 카멜 표기법이 정석
 * API 문서: https://nodejs.org/api/events.html
 * 
 * 이벤트리스너: 이벤트가 발생할 때 대응하여 동작하는 콜백 함수 
 */

/** event 객체의 메소드
 * emitter.addListener(event, listener): on() 메소드와 동일하다. 이벤트를 생성하는 메소드
 * emitter.on(event, listener): addListener()과 동일하다. 이벤트를 생성하는 메소드
 * emitter.once(event, listner): 이벤트를 한 번만 연결한 후 제거
 * emitter.removeListener(event, listener): 특정 이벤트의 특정 이벤트 핸듣ㄹ러 제거. 이 메소드로 리스너를 제거 시 리스너 배열의 인덱스가 갱신된다.
 * emitter.removeAllListeners([event]): 모든 이벤트 핸들러를 제거한다.
 * emitter.setMaxListeners(n): n으로 한 이벤트에 최대허용 개수를 정해준다. node.js는 기본값으로 한 이벤트에 10개의 이벤트 핸들러를 작성할 수 있는데, 11개 이상을 원할 시 n값을 넘겨주면 되고, 0을 넘겨주면 연결 개수 제한이 사라진다.
 * emitter.emit(eventName[, ...args]): 이벤트를 발생시킨다.
 */


/** 이벤트 생성(이벤트 핸들러 연결)
 * 이벤트를 추가하려면 emitter에 이벤트를 연결할 객체, event에 이벤트 이름, litener에 이벤트 핸들러를 작성하면 된다.
 * addlistener() 메소드와 on() 메소드는 동일하니 익숙한 것을 사용하면 된다.
 */

    // 예제
/*
    var EventEmitter = require('events');

    var custom_event = new EventEmitter();

    custom_event.on('call', function() {
        console.log('이벤트 콜');
    });

    custom_event.emit('call');
*/

/** 이벤트 제거
 * addlistenr() 메소드나 on() 메소드를 통해 연결된 이벤트 핸들러를 제거하기 위해 사용된다. 
 * removeListener()를 사용하면 특정 이벤트 리스너를 제거할 수 있고, removeAllListeners()를 사용하면
 * 모든 이벤트 리스너를 제거한다.
 * removeAllListeners([eventname])을 사용하면 해당 이벤트의 모든 리스너를 제거할 수 있다.
 */

    // 예제 : 위와 비슷한 상황이지만, 리스너를 모두 삭제했기에 콘솔에 아무것도 찍히지 않는다.

    var EventEmitter = require('events');

    var custom_event = new EventEmitter();

    custom_event.on('call', function() {
        console.log('이벤트 콜');
    });

    custom_event.removeAllListeners();

    custom_event.emit('call');