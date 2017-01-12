$(document).ready(function() {

  $("button#hello").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Woof!</li>");
  });

  $("button#goodbye").click(function() {
    $("ul#cat").prepend("<li>Prrrrrr!</li>");
    $("ul#dog").prepend("<li>Ruff, ruff!</li>");
  });

  $("button#love").click(function() {
    $("ul#cat").prepend("<li>Hiiiiissssssss!</li>");
    $("ul#dog").prepend("<li>Grrrrrrrrrrrrrrrr.</li>");
  });
  $("button").click(function(){
    $("ul#cat").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function(){
      $(this).remove();
    });
  });
});
