

const btn = document.querySelector("#btn");
btn.onclick = function(e){
  if(e.pageX > 200 && e.pageX < 400){
    alert("あたぁ")
  } else {
    alert("ひでぶ")
  }
}



btn.addEventListener('click', function(event){
  let count = event.detail;
  $(".hit_count").append(count)
});


// 16:00 8/14

// 要素の位置情報
// https://www.sejuku.net/blog/47309

const pos = $("#btn").offset();
console.log(pos.top, pos.left);

// 要素のpixel size
// https://pisuke-code.com/jquery-width-height-get-methods/

const elem = $("#btn");
const elW = elem.width()
const elH = elem.height()

console.log(elem.width());
console.log(elem.height());

// pop text at starting game

$("#btn").on("click", function(){
  $("#btn p").css("font-size","3rem")
  $("#btn p").fadeOut(2000);
});

// クリックアクション

const btn = document.querySelector("#btn");

btn.addEventListener('click', function(e){
  $(".hit_count").append("あたぁ！！").css("color", "red")
}, false);

// if 

btn.onclick = function(e){
  if(e.pageX > (pos.left+elW/2)-50 && e.pageX < (pos.left+elW/2)+50 && e.pageY > (pos.top+elH/2)-50 && e.pageY < (pos.top+elH/2)+50){
    console.log(e.pageX, e.pageY, e.detail, "あたぁ");
  
  } else if(e.pageX > (pos.left+elW/2)-50 && e.pageX < (pos.left+elW/2)+50 && e.pageY > (pos.top+elH/2)-50 && e.pageY < (pos.top+elH/2)+50 && e.detail > 9){
    console.log(e.pageX, e.pageY, e.ditail, "お前はもう死んでいる");
  
  } else {
    console.log(e.pageX, e.pageY, e.ditail);
  }
}






