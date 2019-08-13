$(document).ready(function() {
  $("button#catbutton").click(function() {
    $("ul#list1").prepend("<li>how r u?</li>");
    $("ul#list2").prepend("<li>am good</li>");
  } );
});

$(document).ready(function() {
  $("button#dogbutton").click(function() {
    $("ul#list1").prepend("<li>Meow</li>");
$("ul#list2").prepend("<li>Ruff</li>");
  } );
});
