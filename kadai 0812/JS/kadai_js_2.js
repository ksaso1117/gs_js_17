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

// クリック音(unavailable)
// https://syncer.jp/html5-javascript-hello-button

function sound()
{
	var id = 'sound-file' ;
	if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
	{
		document.getElementById( id ).currentTime = 0;
	}

  document.getElementById( id ).play() ;
}


// クリックイベント

const btn = document.querySelector("#btn");

// if 

btn.onclick = function(e){
  if(e.pageX > btnCenterX-50 && e.pageX < btnCenterX+50 && e.pageY > btnCenterY-50 && e.pageY < btnCenterY+50 && e.detail <= 9){
    console.log(e.pageX, e.pageY, e.detail, "miss");
    $(".hit_count").append("Miss!!").css("color", "red").css("font-size", "2rem"); 

  } else if(e.pageX > btnCenterX-50 && e.pageX < btnCenterX+50 && e.pageY > btnCenterY-50 && e.pageY < btnCenterY+50 && e.detail > 9){
    console.log(e.pageX, e.pageY, "北斗有情猛翔破");
    $(".hit_count").empty();
    $(".hit_count").append("北斗有情猛翔破！！").css("font-size","2rem").css("font-weight", "bold");
    $(".hit_count").fadeOut(4000);

    // 遅延実行
    // https://ziyudom.com/js-delay/

    setTimeout(function(){
      $('#btn').css('background-image', 'url(img/souther_win.jpg)');
      $('#next a').css('opacity','100');
    },4000);


    
  } else {
    console.log(e.pageX, e.pageY, e.ditail);
    $(".hit_count").append("あたぁ！！").css("color", "red")
    setTimeout(function(){
      $('#btn').css('background-image', 'url(img/souther_lost.jpg)');
    },4000);
    // setTimeout("location.reload()",5000); 

  }
}



