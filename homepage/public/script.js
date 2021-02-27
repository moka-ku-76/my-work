$(function(){

  let index = 0;
  console.log(index)
  // １つ目を表示
  $("#top-banner img:first").addClass("display");
  //１つ目のバーを伸ばす
  $(".bar li:first").addClass("extend");

  let extendingBar;
  let iconPrifix = "-icon.jpg";
  let bannerPrifix = "-banner.jpg";
  let img_dir = "img/";

  // 表示するトピックを調整
  let numOfDisplay = 5;

  let extendingId = $(".bar li.extend").index();
  let displayingId = $("#top-banner img.display").index();


  function changeDisplay(index){
    extendingId = $(".bar li.extend").index();
    displayingId = $("#top-banner img.display").index();
    $(".bar-part").eq(extendingId).removeClass("extend");
    $("#top-banner img").eq(displayingId).removeClass("display");
    console.log("displayingId:"+displayingId)
    $(".bar-part").eq(index).addClass("extend");
    $("#top-banner img").eq(index).addClass("display");
    console.log("index:"+index)
  }

  $(".bar-part").on("webkitAnimationEnd", function(){
    extendingId = $("li.extend").index();
    let nextId = extendingId + 1;
    nextId %= numOfDisplay;
    $(".bar-part").eq(index).css("background","#C0C0C0");
    changeDisplay(nextId);
  });


  $(".game-titles div").hover(
    function(){//マウス乗った時
      $(this).css("color","red");
      extendingId = $("li.extend").index();
      index = $(this).index();
      $(".bar-part").eq(index).css("background","red");
      $(".bar-part").eq(index).css("--color","red");
      var test = $(".bar-part").eq(index).css("--color");
      console.log(test);
      if(extendingId === index){
        $(".bar-part").eq(index).css("animation-play-state","paused");
        setTimeout(function(){
          $(".bar-part").eq(index).css("animation-play-state","running");
        },1000);
      }else{
        changeDisplay(index);
      }
    },
    function(){//マウス乗ってない時
      $(this).css("color","black");
      $(".bar-part").eq(index).css("background","#C0C0C0");
      $(".bar-part").css("--color","black");
    }
  );
});

// const id = document.getElementById("top-banner");
// const id = 4;
// console.log(id);
//


// <% games.forEach((game)=>{ %>
//
//   <a href="#"><%= game.name %></a>
// <% }); %>
// module.exports = function(){
//   console.log("Hello World!");
//   // console.log(document);
// }

// const games = [
// {id:1, name:"ピクミン3 デラックス",iconSrc:"public/img/pikumin-icon.jpg",bannerSrc:"public/img/pikumin-banner.jpg",keyword:"pikumin"},
// {id:2, name:"あつまれ　どうぶつの森",iconSrc:"public/img/domori-icon.jpeg",bannerSrc:"public/img/domori-banner.jpg",keyword:"domori"},
// {id:3, name:"脳を鍛える大人の<br>Nintendo Switch<br>トレーニング",iconSrc:"public/img/notore-icon.jpg",bannerSrc:"public/img/notore-banner.jpg",keyword:"notore"},
// {id:4, name:"世界のアソビ大全51",iconSrc:"public/img/asobi-icon.jpg",bannerSrc:"public/img/asobi-banner.jpg",keyword:"asobi"},
// {id:5, name:"ポケットモンスター<br>ソード・シールド",iconSrc:"public/img/pokemon-icon.jpg",bannerSrc:"public/img/pokemon-banner.jpg",keyword:"pokemon"}
// ];


// games.forEach(function(game){
//   $(`.game-titles `).append(
//     '<div class = '+`"container ${game.keyword}"`+'></div>'
//   );
//   // console.log('<div class = '+`container ${game.keyword}`+'></div>');
//
//
//   $(`.${game.keyword}`).append(
//     '<img class = "game-icon" src = '+game.iconSrc+' alt = "画像を読み込めません"> '+
//     '<span href="#">'+ game.name + '</span>'
//   );
// });
//
// let index = $(`.${games[0].keyword}`).index();
// const display = function(index){
//   $("#top-banner img").attr('src',games[index].bannerSrc);
//   $(".bar-part").eq(index).addClass("extend");
// };
