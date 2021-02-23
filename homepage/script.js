// const id = document.getElementById("top-banner");
// const id = 4;
// console.log(id);
//
// const games = [
//   {id:1, name:"ピクミン3 デラックス",iconSrc:"pikumin-icon.jpg",bannerSrc:"/img/pikumin-banner.jpg"},
//   {id:2, name:"あつまれ　どうぶつの森",iconSrc:"",bannerSrc:""},
//   {id:3, name:"脳を鍛える大人のNintendo Switchトレーニング",iconSrc:"",bannerSrc:""},
//   {id:4, name:"世界のアソビ大全51",iconSrc:"",bannerSrc:""},
//   {id:5, name:"ポケットモンスターソード・シールド",iconSrc:"",bannerSrc:""}
// ];

// <% games.forEach((game)=>{ %>
//
//   <a href="#"><%= game.name %></a>
// <% }); %>
// module.exports = function(){
//   console.log("Hello World!");
//   // console.log(document);
// }

$(function(){
  const games = [
  {id:1, name:"ピクミン3 デラックス",iconSrc:"public/img/pikumin-icon.jpg",bannerSrc:"public/img/pikumin-banner.jpg",keyword:"pikumin"},
  {id:2, name:"あつまれ　どうぶつの森",iconSrc:"public/img/domori-icon.jpeg",bannerSrc:"public/img/domori-banner.jpg",keyword:"domori"},
  {id:3, name:"脳を鍛える大人の<br>Nintendo Switch<br>トレーニング",iconSrc:"public/img/notore-icon.jpg",bannerSrc:"public/img/notore-banner.jpg",keyword:"notore"},
  {id:4, name:"世界のアソビ大全51",iconSrc:"public/img/asobi-icon.jpg",bannerSrc:"public/img/asobi-banner.jpg",keyword:"asobi"},
  {id:5, name:"ポケットモンスター<br>ソード・シールド",iconSrc:"public/img/pokemon-icon.jpg",bannerSrc:"public/img/pokemon-banner.jpg",keyword:"pokemon"}
  ];


  games.forEach(function(game){
    $(`.game-titles `).append(
      '<div class = '+`"container ${game.keyword}"`+'></div>'
    );
    // console.log('<div class = '+`container ${game.keyword}`+'></div>');


    $(`.${game.keyword}`).append(
      '<img class = "game-icon" src = '+game.iconSrc+' alt = "画像を読み込めません"> '+
      '<span href="#">'+ game.name + '</span>'
    );
  });

  let index = $(`.${games[0].keyword}`).index();
  // const display = function(index){
  //   $("#top-banner img").attr('src',games[index].bannerSrc);
  //   $(".bar-part").eq(index).addClass("extend");
  // };

  // let i = 0;
  let extendingBar;

  let extendingId = $("li.extend").index();
  function changeDisplay(index){
    $(".bar-part").eq(extendingId).removeClass("extend");
    $("#top-banner img").attr('src',games[index].bannerSrc);
    $(".bar-part").eq(index).addClass("extend");
  }

  $(".bar-part").on("webkitAnimationEnd", function(){
    extendingId = $("li.extend").index();
    let nextId = extendingId + 1;
    nextId %= games.length;
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
