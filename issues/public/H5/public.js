mySwiper1 = ""
var imgs_1 = []
for (let i = 0; i < 192; i++) {
    imgs_1[i] = new Image;
    imgs_1[i].src = "/Press/H5/asset/qhy/" + 'qhy_' + padding(i,3) + ".jpg";
}
var imgs_2 = []
for (let i = 0; i < 477; i++) {
    imgs_2[i] = new Image;
    imgs_2[i].src = "/Press/H5/asset/wk/" + 'wk_' + padding(i,3) + ".jpg";
}
var imgs_3 = []
for (let i = 0; i < 606; i++) {
    imgs_3[i] = new Image;
    imgs_3[i].src = "/Press/H5/asset/zgf/" + 'zgf_' + padding(i,3) + ".jpg";
}

window.onload = function () {
    var winHeight = window.innerHeight;
    var winWidth = window.innerWidth;
    
    //DOM 1================================================================

    var canvas_dom_1 = document.getElementById("canvas_1_page");
    var out_warp_1 = document.getElementById("inner_swiper_1");
    
    //修正尺寸 dom1
    // if (winWidth > 435 || winHeight > 961){
    //     canvas_dom_1.width = 390;
    //     canvas_dom_1.height = 850;
    // }else{
    //     canvas_dom_1.width = winWidth;
    //     canvas_dom_1.height = (winWidth / 16) * 8.5;
    // }
    canvas_dom_1.width = winWidth;
    canvas_dom_1.height = (winWidth / 16) * 8.5;

    var context_1 = document.getElementById("canvas_1_page").getContext('2d');

    var mySwiper2 = new Swiper('#swiper-container2', { //第1个采访
        direction: 'vertical',
        grabCursor : true,
        nested: true,
        resistanceRatio: 0,
        slidesPerView: 'auto',
        freeMode:true,
        noSwiping:true,
        freeMode: {
            enabled:true,
            momentumRatio:0.1,
            momentumVelocityRatio:0.2,
        },
        on:{
            touchMove:function () {
                context_1.drawImage(imgs_1[getCurrentFrame(out_warp_1, imgs_1.length, winHeight)], 0, 0, canvas_dom_1.width , (canvas_dom_1.width / 16) * 9);
            }
        }
    });

    //DOM 1================================================================

    //DOM 2================================================================

    var canvas_dom_2 = document.getElementById("canvas_2_page");
    var out_warp_2 = document.getElementById("inner_swiper_2");
    
    //修正尺寸
    canvas_dom_2.width = winWidth;
    canvas_dom_2.height = (winWidth / 16) * 8.5;
    var context_2 = document.getElementById("canvas_2_page").getContext('2d');

    var mySwiper3 = new Swiper('#swiper-container3', { //第2个采访
        direction: 'vertical',
        grabCursor : true,
        nested: true,
        resistanceRatio: 0,
        slidesPerView: 'auto',
        freeMode:true,
        noSwiping:true,
        freeMode: {
            enabled:true,
            momentumRatio:0.1,
            momentumVelocityRatio:0.2,
        },
        on:{
            touchMove:function () {
                context_2.drawImage(imgs_2[getCurrentFrame(out_warp_2, imgs_2.length, winHeight)], 0, 0, canvas_dom_2.width , (canvas_dom_2.width / 16) * 9);
            }
        }
    });

    //DOM 2================================================================


    //DOM 3================================================================

    var canvas_dom_3 = document.getElementById("canvas_3_page");
    var out_warp_3 = document.getElementById("inner_swiper_3");
    
    //修正尺寸
    canvas_dom_3.width = winWidth;
    canvas_dom_3.height = (winWidth / 16) * 8.5;
    var context_3 = document.getElementById("canvas_3_page").getContext('2d');

    var mySwiper4 = new Swiper('#swiper-container4', { //第3个采访
        direction: 'vertical',
        grabCursor : true,
        nested: true,
        resistanceRatio: 0,
        slidesPerView: 'auto',
        freeMode:true,
        noSwiping:true,
        freeMode: {
            enabled:true,
            momentumRatio:0.1,
            momentumVelocityRatio:0.2,
        },
        on:{
            touchMove:function () {
                context_3.drawImage(imgs_3[getCurrentFrame(out_warp_3, imgs_3.length, winHeight)], 0, 0, canvas_dom_3.width , (canvas_dom_3.width / 16) * 9);
            }
        }
    });

    //DOM 3================================================================

    mySwiper1 = new Swiper('#swiper-container1', {
        direction: 'vertical',
        grabCursor : true,
        on:{
            slideNextTransitionEnd:function(){
                context_1.drawImage(imgs_1[0], 0, 0, canvas_dom_1.width , (canvas_dom_1.width / 16) * 9);
                context_2.drawImage(imgs_2[0], 0, 0, canvas_dom_2.width , (canvas_dom_2.width / 16) * 9);
                context_3.drawImage(imgs_3[0], 0, 0, canvas_dom_3.width , (canvas_dom_3.width / 16) * 9);
            }
        }
    });
}

// toolkit
function padding(num, length) {
    if((num + "").length >= length) {
        return num;
    }
    return padding("0" + num, length)
}

function getCurrentFrame(out_warper, arraylength, winHeight){
    // 获取正确的帧率
    if (((0 - out_warper.getBoundingClientRect().top) / (out_warper.clientHeight - winHeight)) > 1) {
        return arraylength - 1
    }else if (((0 - out_warper.getBoundingClientRect().top) / (out_warper.clientHeight - winHeight)) < 0) {
        return 0
    }else{
        return parseInt(((0 - out_warper.getBoundingClientRect().top) / (out_warper.clientHeight - winHeight)) * arraylength)
    }
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

// ---------------------------------------------------------------------------------
function startplay() {
    let video_dom = document.getElementById("video_1")
    let video_v = document.getElementById("video_player")
    video_dom.style.height="100vh"
    video_dom.style.zIndex = 99999;
    video_dom.style.top = "0vh"
    video_dom.style.left = "0vw";

    let video_button = document.getElementById("video_pause")
    video_button.style.zIndex = 999999;

    let video_map = document.getElementById("have_video_map")
    video_map.style.zIndex = 1;

    video_v.play();
}

function stopplay() {
    let video_dom = document.getElementById("video_1")
    let video_v = document.getElementById("video_player")
    video_dom.style.height="100vh"
    video_dom.style.zIndex = 0;
    video_dom.style.top = "0vh"
    video_dom.style.left = "0vw";
    let video_button = document.getElementById("video_pause")
    video_button.style.zIndex = 1;

    let video_map = document.getElementById("have_video_map")
    video_map.style.zIndex = 999;

    video_v.pause();
}

function jumptopage(num) {
    mySwiper1.slideTo(num, 100)
}

function onClick_to_menu() {
    mySwiper1.slideTo(1,500)
}