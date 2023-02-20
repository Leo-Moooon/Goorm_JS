var timer = null;
var editing = false;
// editing: 포스팅이나 댓글 작성 중에는 새로고침을 막기 위해 현재 글을 작성 중이거나 댓글을 작성 중인지 체크하도록 만든 변수

// 새로고침 함수
var load = function() {
    if(!editing) {
        $.get('/load', function(data) {
            $("#wall").empty();
            $(data).each(function (i) {
                var id = this._id;

                $("#wall").prepend("<div class='item'> <div class='left'></div><div class='right'></div></div>");
                $("#wall .item:first .left").append("<img class='photo_thumb' src='" + this.picture + "'/>");
                $("#wall .item:first .right").append("<div class='author'><b>" + this.author + "</b> (" + this.date + ")&nbsp;&nbsp; <span class='text_button modify'>수정</span> <span class='text_button del'>삭제</span> <span class='text_button like'>좋아요</span></div>");
                $("#wall .item:first .right").append("<div class='contents " + id + "'>" + this.contents + "</div>");
                $("#wall .item:first .right").append("<div class='likes'>LIKE : " + this.like + "</div>");
                $("#wall .item:first .right").append("<div class='comments'></div>");

                $(this.comments).each(function(j) {
                    $("#wall .item:first .right .comments").append("<div class='comment_item'>" + this.author + ": " + this.comment + "</div>");
                });

                $("#wall .item:first .comments").append("<input class='input_comment' type='text' /> <input class='comment_button' type='button' value='COMMENT' />");

                id = this._id;

                $("#wall .item:first .input_comment").on("focus", function() { // focus: 해당 영역 클릭
                    editing = true;
                });

                $("#wall .item:first .input_comment").on("blur", function() { // blur: 영역 밖 클릭
                    editing = false;
                });

                $("#wall .item:first .input_comment").keypress(function(evt) {
                    if((evt.keyCode || evt.which) == 13) {
                        if(this.value !== "") {
                            comment(this.value, id);
                            evt.preventDefault();
                            $(this).val("");
                            editing = false;
                        }
                    }
                });

                $("#wall .item:first .comment_button").click(function(evt) {
                    comment($("#wall .item:first .input_comment").val(), id);
                    editing = false;
                });

                var cnt = 0;

                $("#wall .item:first .modify").click(function(evt) {
                    editing = true;
                    if(cnt == 0) {
                        var contents = $("#wall ." + id).html();
                        $("#wall ." + id).html("<textarea id='textarea_" + id +"' class='textarea_modify'>" + contents + "</textarea>");
                        cnt=1;
                    }
                    $("#textarea_" + id).keypress(function(evt) {
                        if((evt.keyCode || evt.which) == 13) {
                            if(this.value !== "") {
                                modify(this.value, id);
                                evt.preventDefault();
                                editing = false;
                            }
                        }
                    });
                });

                $("#wall .item:first .del").click(function(evt) {
                    delete(id);
                });

                $("#wall .item:first .like").click(function(evt) {
                    editing = false;
                    like(id);
                });
                });
            });
    }
};

var write = function(contents) {
    var postdata = {
        'author' : $("#author").val(),
        'contents' : contents,
        'picture' : $("#message").find(".photo").attr('src')
    };

    $.post('/write', postdata, function() {
        load();
    });
};

var modify = function(contents, id) {
    var postdata = {
        'author' : $("#author").val(),
        'contents' : contents,
        '_id' : id
    };

    $.post('/modify', postdata, function() {
        load();
    });
};

var comment = function(comment, id) {
    var postdata = {
        'author' : $('#author').val(),
        'comment' : comment,
        '_id' : id
    };

    $post('/comment', postdata, function() {
        load();
    });
};

var del = function(id) {
    var postdata = {
        '_id' : id
    };

    $.post('/del', postdata, function() {
        load();
    });
};

var like = function(id) {
    var postdata = {
        '_id' : id
    };

    $.post('/like', postdata, function() {
        load();
    });
};

$(document).ready(function() {
    $("#message textarea").on("focus", function() { // focus 이벤트: 해당 영역을 클릭했을 때
        editing = true;
    });

    $("#message textarea").on("blur", function() { // blur 이벤트: 영역 밖을 클릭했을 때
        editing = false;
    });

    $("message textarea").keypress(function(evt) {
        if((evt.keyCode || evt.which) == 13) { 
            if(this.value !== "") {
                write(this.value);
                evt.preventDefault();
                $(this).val("");
                editing = false;
            }
        }
    });

    $("#write_button").click(function(evt) {
        console.log($("#message textarea").val());
        write($("#message textarea").val());
        $("#message textarea").val("");
        editing = false;
    });

    load();
    timer = setInterval(load(), 5000);
});