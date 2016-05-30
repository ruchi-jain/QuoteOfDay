var myColors = ['#FDE3A7', '#F1A9A0', '#AEA8D3', '#A2DED0', '#89C4F4'];
var currentQuote = '', currentAuthor = '';

$(document).ready(function () {
    getQuote();
    $("#new-quote").click(function () {
        var randomize = Math.floor(Math.random() * myColors.length);
        console.log(randomize);
        $('body').css("background-color", myColors[randomize]);
        console.log("Call getQuote");
        getQuote();
        
    });
    
    $('#tweet-quote').on('click', function() {  
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    
  });
  $('#tumblr-quote').on('click', function() {
 
      openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote));
    
  });
});


function getQuote(){
    console.log("in getQuote");
    $.ajax({
            method: "POST",
            url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous",
            datatype: "appliacton/json",
            headers: {
                'X-Mashape-Key': "8DWNl5oYJSmshJe2vEMfGvpPZHmOp1bULr7jsnaErNMmClZ5M0"
            },
            success: function (data) {
                var val = JSON.parse(data);
                currentQuote= val["quote"];
                currentAuthor= val["author"];
                console.log(val);
                $(".quote-text").html(currentQuote + "<br> <br> <span class='quote-author'> - " + currentAuthor + "</span>");
                $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
        $('#tumblr-quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote));
            }
        });
}

