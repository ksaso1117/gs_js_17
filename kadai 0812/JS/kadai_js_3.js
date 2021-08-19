
// 要素の位置情報
// https://www.sejuku.net/blog/47309

const pos = $("#btn").offset();
// console.log(pos.top, pos.left);

// 要素のpixel size 
// https://pisuke-code.com/jquery-width-height-get-methods/

const elem = $("#btn");
const elW = elem.width();
const elH = elem.height();

// 中心座標、逆端座標

const btnCenterX = (pos.left+elW/2); 
const btnCenterY = (pos.top+elH/2); 

const btnEndX = (pos.left+elW); 
const btnEndY = (pos.top+elH); 


// pop text at starting game

$("#btn").on("click", function(){
  $("#btn p").css("font-size","3rem")
  $("#btn p").fadeOut(2000);
});


// クリックイベント

const btn = document.querySelector("#btn");

// if 

// Critical hit counter
let CCounter = 0; 
let MCounter = 0; 

btn.onclick = function(e){

  // Critical hit area ランダム抽選
  const ranarea = Math.ceil(Math.random()*4); 
  console.log(ranarea); 

  // Critical hit
  function criHit() {
    CCounter++;
    console.log(e.pageX, e.pageY, "あたぁ", CCounter);
      $(".hit_count").append("あたぁ！！").css("color", "red").css("font-size", "2rem");
    console.count("critical"); 
  }

  // miss
  function invalHit(){
    MCounter++;
    console.log(e.pageX, e.pageY, MCounter);
      $(".hit_count").append("Miss！").css("color", "red"); 
    console.count("miss");
  }

  if(ranarea == 1){
    if(e.pageX > pos.left && e.pageX < btnCenterX && e.pageY > pos.top && e.pageY < btnCenterY){ 
      criHit();
    }
    else{
      invalHit();
    }
  }

  else if(ranarea == 2){
    if(e.pageX > btnCenterX && e.pageX < btnEndX && e.pageY > pos.top && e.pageY < btnCenterY){
      criHit();
    }
    else{
      invalHit();
    }
  }

  else if(ranarea == 3){
    if(e.pageX > pos.left && e.pageX < btnCenterX && e.pageY > btnCenterY && e.pageY < btnEndY){
      criHit();
    }
    else{
      invalHit();
    }
  }
  
  else if(ranarea == 4){
    if(e.pageX > btnCenterX && e.pageX < btnEndX && e.pageY > btnCenterY && e.pageY < btnEndY){
      criHit();
    }
    else{
      invalHit();
    }
  }
}

// 最終イベント not available...

if(CCounter > 4 && MCounter < 4){
  $(".hit_count").append("無想転生…").css("font-size","2rem").css("font-weight", "bold");
  $(".hit_count").fadeOut(4000);

  setTimeout(function(){
    $('#btn').css('background-image', 'url(img/raou_win2.png)');
  },4000);
} 

else if(CCounter < 4 && MCounter > 4){
  $(".hit_count").append("天に滅せい！！").css("font-size","2rem").css("font-weight", "bold");
  $(".hit_count").fadeOut(4000);

  setTimeout(function(){
    $('#btn').css('background-image', 'url(img/raou_lost.jpg)');
  },4000);
}




