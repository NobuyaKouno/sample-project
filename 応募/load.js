$(function(){
    var spans = $("#swing_text").children();
    for(var i = 0; i < spans.length; i++){
      e = spans[i];
      $(e).css("animation-name", "anime");
      $(e).css("animation-duration", "1.7s");
      $(e).css("animation-iteration-count", "infinite");
      $(e).css("animation-direction", "aleternate");
      $(e).css("alternate-timing-function", "ease");
      $(e).css("animation-delay", "" + (i / 5) + "s");
    }



