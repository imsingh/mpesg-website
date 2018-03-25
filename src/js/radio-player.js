var audio = new Audio("http://akalmultimedia.net:8000/Gurbani-Veechaar");
audio.load();
$(".fa-play").show();
$(".fa-pause").hide();

$(".trigger").click(function() {
  if (audio.paused == false) {
    audio.pause();
    $(".fa-play").show();
    $(".fa-pause").hide();
    $(".music-card").removeClass("playing");
  } else {
    audio.play();
    $(".fa-pause").show();
    $(".fa-play").hide();
    $(".music-card").addClass("playing");
  }
});
