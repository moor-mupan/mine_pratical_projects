/**
 * Created by Administrator on 2018/4/5 0005.
 */
$(function () {
    //1.点击qq头像弹出列表
    var $qq_img = $('.qq_img>img');
    var $left_list = $('.left_list');
    //click_count为点击次数
    var click_count = 0;
    $qq_img.click(function () {
        click_count++;
        if(click_count % 2 === 0){
            $left_list.addClass('hide');
        }else{
            $left_list.removeClass('hide');
        }
    });

    //2.点击右侧弹出设置列表
    var $drop_down_box = $('.drop_down_box>img');
    var $right_list = $('.right_list');
    $drop_down_box.click(function () {
        click_count++;
        if(click_count % 2 === 0){
            $right_list.addClass('hide');
        }else{
            $right_list.removeClass('hide');
        }
    });

    //3.点击搜索框弹出搜索页面
    var $header_input = $('.header_input>input');
    var $search_input = $('.search_input');
    var $close_img = $('.search_input>img');
    var $mid_search = $('.mid_search');
    $header_input.click(function () {
        $search_input.removeClass('hide');
        $mid_search.removeClass('hide');
        $qq_img.addClass('hide');
        $header_input.addClass('hide');
        $close_img.click(function () {
            $search_input.addClass('hide');
            $mid_search.addClass('hide');
            $qq_img.removeClass('hide');
            $header_input.removeClass('hide');
        });
    });

    //4.点击图标切换页面（暗1、亮2）
    var $mesage_list1 = $('.mesage_list1');
    var $mesage_list2 = $('.mesage_list2');
    var $link_man1 = $('.link_man1');
    var $link_man2 = $('.link_man2');
    var $cloud_service1 = $('.cloud_service1');
    var $cloud_service2 = $('.cloud_service2');
    var $A1 = $('.A1');
    var $A2 = $('.A2');
    var $A3 = $('.A3');
    var $header_two = $('.header_two');
    $link_man1.click(function () {
        $A2.removeClass('hide');
        $A1.addClass('hide');
        $A3.addClass('hide');
        $mesage_list2.addClass('hide');
        $mesage_list1.removeClass('hide');
        $link_man1.addClass('hide');
        $link_man2.removeClass('hide');
        $cloud_service1.removeClass('hide');
        $cloud_service2.addClass('hide');
        $link_man1.css('background-image','url("../images/0045.jpg")')

    });
    $mesage_list1.click(function () {
        $A1.removeClass('hide');
        $A2.addClass('hide');
        $A3.addClass('hide');
        $mesage_list1.addClass('hide');
        $mesage_list2.removeClass('hide');
        $link_man1.removeClass('hide');
        $link_man2.addClass('hide');
        $cloud_service1.removeClass('hide');
        $cloud_service2.addClass('hide');
    });
    $cloud_service1.click(function () {
        $A3.removeClass('hide');
        $A2.addClass('hide');
        $A1.addClass('hide');
        $mesage_list1.removeClass('hide');
        $mesage_list2.addClass('hide');
        $link_man1.removeClass('hide');
        $link_man2.addClass('hide');
        $cloud_service1.addClass('hide');
        $cloud_service2.removeClass('hide');
    });

    //5.点击最小化或关闭图标，隐藏整个界面
    var $min_box = $('.min_box');
    var $close_box = $('.close_box');
    var $MAX_BOX = $('.MAX_BOX');
    $min_box.click(function () {
        $MAX_BOX.addClass('hide');
    });
    $close_box.click(function () {
        $MAX_BOX.addClass('hide');
    });
    //6.点击最大化图标 全屏显示
    var $big_box = $('.big_box');
    var $mid_box = $('.mid_box');
    var $header = $('header');
    var $section = $('section');
    var $left = $('.left');
    var $right = $('.right');
    var $header_width = $('header').width();
    var $section_width = $('section').width();
    var $left_width = $('.left').width();
    var $right_width = $('.right').width();
    var $body_width = $('body').width();
    var $body_height =$('body').height();
    //6.1点击最大化图标 全屏显示
    $big_box.click(function () {
        $big_box.addClass('hide');
        $mid_box.removeClass('hide');
        $MAX_BOX.css({
            "width":"1366",
            "margin":"0 auto",
        });
        $header.css({
            "width":"1366",
            "margin":"0 auto"
        });
        $section.css({
            "width":"1366",
            "margin":"0 auto"
        });
        $right.css({
            "width":"1166",
            "margin":"0"
        })
        //6.2点击缩小图标
        $mid_box.click(function () {
            $mid_box.addClass('hide');
            $big_box.removeClass('hide');
            $MAX_BOX.addClass('w');
            $header.addClass('w');
            $section.addClass('w');
            $MAX_BOX.width(800);
            $header.width(800);
            $section.width(800);
            $right_width = $section.width() - $left_width;
            $right.width($right_width);
        });
    });

    // 7.点击进行好友、群、多人聊天切换
    var $many_friend = $('.many_friend');
    var $many_qun = $('.many_qun');
    var $many_man = $('.many_man');
    var $one = $('.one');
    var $two = $('.two');
    var $thr = $('.thr');
    $many_friend.click(function () {
        $one.removeClass('hide');
        $two.addClass('hide');
        $thr.addClass('hide');
    });
    $many_qun.click(function () {
        $two.removeClass('hide');
        $one.addClass('hide');
        $thr.addClass('hide');
    });
    $many_man.click(function () {
        $thr.removeClass('hide');
        $one.addClass('hide');
        $two.addClass('hide');
    });

    //8.点击显示好友、群的详细列表
    //8.1好友点击
    var $fml = $('.fml');
    var $lv = $('.lv');
    var $hy = $('.hy');
    var $gk = $('.gk');
    var $fcgk = $('.fcgk');
    var $xxtx = $('.xxtx');
    var $cztx = $('.cztx');
    var $gztx = $('.gztx');
    var $dxtx = $('.dxtx');
    var $ts = $('.ts');
    var $msr = $('.msr');
    //8.2显示
    var $fml_ul = $('#fml');
    var $lv_ul = $('#lv');
    var $hy_ul = $('#hy');
    var $gk_ul = $('#gk');
    var $fcgk_ul = $('#fcgk');
    var $xxtx_ul = $('#xxtx');
    var $cztx_ul = $('#cztx');
    var $gztx_ul = $('#gztx');
    var $dxtx_ul = $('#dxtx');
    var $ts_ul = $('#ts');
    var $msr_ul = $('#msr');
    $fml.click(function () {
        click_count++;
        if(click_count % 2 === 0){
            $fml_ul.addClass('hide');
        }else{
            $fml_ul.removeClass('hide');
        }
    });
    $lv.click(function () {
        click_count++;
        if(click_count % 2 === 0){
            $lv_ul.addClass('hide');
        }else{
            $lv_ul.removeClass('hide');
        }
    });
    $hy.click(function () {
        click_count++;
        if(click_count % 2 === 0){
            $hy_ul.addClass('hide');
        }else{
            $hy_ul.removeClass('hide');
        }
    });
    $gk.click(function () {
        click_count++;
        if(click_count % 2 === 0){
            $gk_ul.addClass('hide');
        }else{
            $gk_ul.removeClass('hide');
        }
    });
    $fcgk.click(function () {
        click_count++;
        if(click_count % 2 === 0){
            $fcgk_ul.addClass('hide');
        }else{
            $fcgk_ul.removeClass('hide');
        }
    });
    $xxtx.click(function () {
        click_count++;
        if(click_count % 2 === 0){
            $xxtx_ul.addClass('hide');
        }else{
            $xxtx_ul.removeClass('hide');
        }
    });
    $cztx.click(function () {
        click_count++;
        if(click_count % 2 === 0){
            $cztx_ul.addClass('hide');
        }else{
            $cztx_ul.removeClass('hide');
        }
    });
    $gztx.click(function () {
        click_count++;
        if(click_count % 2 === 0){
            $gztx_ul.addClass('hide');
        }else{
            $gztx_ul.removeClass('hide');
        }
    });
    $dxtx.click(function () {
        click_count++;
        if(click_count % 2 === 0){
            $dxtx_ul.addClass('hide');
        }else{
            $dxtx_ul.removeClass('hide');
        }
    });
    $ts.click(function () {
        click_count++;
        if(click_count % 2 === 0){
            $ts_ul.addClass('hide');
        }else{
            $ts_ul.removeClass('hide');
        }
    });
    $msr.click(function () {
        click_count++;
        if(click_count % 2 === 0){
            $msr_ul.addClass('hide');
        }else{
            $msr_ul.removeClass('hide');
        }
    });
    //8.3群点击
    var $wdq = $('#wdq');
    var $wdq_list = $('#wdq_list');
    $wdq.click(function () {
        click_count++;
        if(click_count % 2 ===0){
            $wdq_list.addClass('hide');
        }else{
            $wdq_list.removeClass('hide');
        }
    });
    //8.4多人聊天
    var $drlt = $('#drlt');
    var $drlt_list = $('#drlt_list');
    $drlt.click(function () {
        click_count++;
        if(click_count % 2 ===0){
            $drlt_list.addClass('hide');
        }else{
            $drlt_list.removeClass('hide');
        }
    });




});
