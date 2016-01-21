var puzzler = function(string){
  return string = string.replace(/[aeiou]/gi,"-");
}

$(document).ready(function() {

  $("form#puzzler").submit(function(event) {
    var userInput = $("textarea#string").val();
    var encodedText = puzzler(userInput);

    $(".resultsText").show();
    $("#encodedResults").text(encodedText);
    $(".stringInput").hide();

    event.preventDefault();
  });
});
