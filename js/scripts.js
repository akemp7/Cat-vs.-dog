$(document).ready(function() {
  $("button#catbutton").click(function() {
    $("ul#list1").prepend("<li>how r u?</li>");
    $("ul#list2").prepend("<li>am good</li>");
  });
});

$(document).ready(function() {
  $("button#dogbutton").click(function() {
    $("ul#list1").prepend("<li>Meow</li>");
    $("ul#list2").prepend("<li>Ruff</li>");
  });
});

$(document).ready(function() {
  $("img#cat").click(function() {
    $("#img1").toggle(2000);
  });
});

$(document).ready(function() {
  $("img#dog").click(function() {
    $("#img2").toggle(2000);
  });
});
