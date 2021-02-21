(function () {
  var rtUrl = window.location.href.match('rt=off');

  function RTisOFF() {
    var p = document.createElement("p");
    p.setAttribute("style", "background-color: rgba(23, 248, 23, 0.87); position: fixed; top: 88px; right: 9px; padding: 15px; font-size: 18px; font-weight: bold; z-index: 10000; box-shadow: 2px 2px 10px rgba(0,0,0,0.4);");
    var text = document.createTextNode("Rtoaster is OFF");
    document.body.appendChild(p).appendChild(text);
  }

  if(!rtUrl) {
    window.RT_INIT_ID = "RTA-833b-c3454bae4135";
  } else {
    window.RT_INIT_ID = "test";
    setTimeout(RTisOFF, 1000);
  }
  Rtoaster.init(window.RT_INIT_ID);
})();
