// 要素の位置情報
// https://www.sejuku.net/blog/47309

const pos = $("#btn").offset();
// console.log(pos.top, pos.left);

// 要素のpixel size 
// https://pisuke-code.com/jquery-width-height-get-methods/

const elem = $("#btn");
const elW = elem.width();
const elH = elem.height();

// console.log(elem.width());
// console.log(elem.height());

const btnCenterX = (pos.left+elW/2); 
const btnCenterY = (pos.top+elH/2); 


// pop text at starting game

$("#btn").on("click", function(){
  $("#btn p").css("font-size","3rem")
  $("#btn p").fadeOut(2000);
});


// クリックイベント

const btn = document.querySelector("#btn");

// if 

btn.onclick = function(e){
  if(e.pageX > btnCenterX-50 && e.pageX < btnCenterX+50 && e.pageY > btnCenterY-50 && e.pageY < btnCenterY+50 && e.detail <= 9){
    console.log(e.pageX, e.pageY, e.detail, "あたぁ");
    $(".hit_count").append("あたぁ！！").css("color", "red").css("font-size", "2rem"); 

  } else if(e.pageX > btnCenterX-50 && e.pageX < btnCenterX+50 && e.pageY > btnCenterY-50 && e.pageY < btnCenterY+50 && e.detail > 9){
    console.log(e.pageX, e.pageY, "お前はもう死んでいる");
    $(".hit_count").empty();
    $(".hit_count").append("お前はもう死んでいる…").css("font-size","2rem").css("font-weight", "bold");
    $(".hit_count").fadeOut(4000);

    // 遅延実行
    // https://ziyudom.com/js-delay/

    setTimeout(function(){
      $('#btn').css('background-image', 'url(img/heart_win.jpg)');
      $('#next a').css('opacity','100');
    },4000);


    
  } else {
    console.log(e.pageX, e.pageY, e.ditail);
    $(".hit_count").append("あたぁ！！").css("color", "red")
  }
}


