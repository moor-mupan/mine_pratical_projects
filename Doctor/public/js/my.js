var $img_box = $('#facilities .img_box');
var $modal = $('.modal');
$img_box.click(function () {
    $modal.css({
        background:'rgba(0,0,0,0.5)',
    });
});
var $img_box_one = $('#facilities .img_box_one');
var $myModal_one = $('.myModal_one');
$img_box_one.click(function () {
    $myModal_one.css({
        display:'block'
    });
    $myModal_one.click(function () {
        $(this).css({
            display:'none'
        })
    });
});
var $img_box_two = $('#facilities .img_box_two');
var $myModal_two = $('.myModal_two');
$img_box_two.click(function () {
    $myModal_two.css({
        display:'block'
    });
    $myModal_two.click(function () {
        $(this).css({
            display:'none'
        })
    });
});
var $img_box_thr = $('#facilities .img_box_thr');
var $myModal_thr = $('.myModal_thr');
$img_box_thr.click(function () {
    $myModal_thr.css({
        display:'block'
    });
    $myModal_thr.click(function () {
        $(this).css({
            display:'none'
        })
    });
});
var $img_box_four = $('#facilities .img_box_four');
var $myModal_four = $('.myModal_four');
$img_box_four.click(function () {
    $myModal_four.css({
        display:'block'
    });
    $myModal_four.click(function () {
        $(this).css({
            display:'none'
        })
    });
});
var $img_box_five = $('#facilities .img_box_five');
var $myModal_five = $('.myModal_five');
$img_box_five.click(function () {
    $myModal_five.css({
        display:'block'
    });
    $myModal_five.click(function () {
        $(this).css({
            display:'none'
        })
    });
});
var $img_box_six = $('#facilities .img_box_six');
var $myModal_six = $('.myModal_six');
$img_box_six.click(function () {
    $myModal_six.css({
        display:'block'
    });
    $myModal_six.click(function () {
        $(this).css({
            display:'none'
        })
    });
});
var $img_box_seven = $('#facilities .img_box_seven');
var $myModal_seven = $('.myModal_seven');
$img_box_seven.click(function () {
    $myModal_seven.css({
        display:'block'
    });
    $myModal_seven.click(function () {
        $(this).css({
            display:'none'
        })
    });
});
var $img_box_eight = $('#facilities .img_box_eight');
var $myModal_eight = $('.myModal_eight');
$img_box_eight.click(function () {
    $myModal_eight.css({
        display:'block'
    });
    $myModal_eight.click(function () {
        $(this).css({
            display:'none'
        })
    });
});
//图片效果

$('#h').css({
    color:'#000000'
})
$('#h').click(function () {
    $('nav li a').css({
        color:'#ffffff'
    })
    $(this).css({
        color:'#000000'
    })
})
$('#s').click(function () {
    $('nav li a').css({
        color:'#ffffff'
    })
    $(this).css({
        color:'#000000'
    })
})
$('#a').click(function () {
    $('nav li a').css({
        color:'#ffffff'
    })
    $(this).css({
        color:'#000000'
    })
})
$('#p').click(function () {
    $('nav li a').css({
        color:'#ffffff'
    })
    $(this).css({
        color:'#000000'
    })
})
$('#t').click(function () {
    $('nav li a').css({
        color:'#ffffff'
    })
    $(this).css({
        color:'#000000'
    })
})
$('#c').click(function () {
    $('nav li a').css({
        color:'#ffffff'
    })
    $(this).css({
        color:'#000000'
    })
})
//平滑到顶部函数
function fun() {
    var $body = $(document.body)
    var $html = $(document.documentElement)
    var offset = $body.scrollTop() + $html.scrollTop()
    if(offset===0) {
        return
    }
    var totalTime = 300
    var intervalTime = 1
    var itemOffset = offset/(totalTime/intervalTime)
    var intervalId = setInterval(function () {
        offset -= itemOffset
        if(offset<=0) {
            offset = 0
            clearInterval(intervalId)
        }
        $('html,body').scrollTop(offset)
    }, intervalTime)
    //使用动画: 平滑滚动到顶部
    // $('body,html').animate({scrollTop:0},300)
}
//使用动画实现平滑移动
$('#h').click(function () {
    $('body,html').animate({scrollTop:0},500)
})
$('#s').click(function () {
    $('body,html').animate({scrollTop:532},500)
});
$('#a').click(function () {
    $('body,html').animate({scrollTop:1075},500)
});
$('#p').click(function () {
    $('body,html').animate({scrollTop:1698},500)
});
$('#t').click(function () {
    $('body,html').animate({scrollTop:2349},500)
});
$('#c').click(function () {
    $('body,html').animate({scrollTop:2902},500)
});
$('#icon_first i').click(function () {
    $('body,html').animate({scrollTop:532},500)
});