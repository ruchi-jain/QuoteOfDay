var myColors = ['#FDE3A7', '#F1A9A0', '#AEA8D3', '#A2DED0', '#89C4F4'];

$(document).ready(function () {
    getQuote();
    $("button").click(function () {
        var randomize = Math.floor(Math.random() * myColors.length);
        $('body').css("background-color", myColors[randomize]);
        getQuote();
        
    });
});

function getQuote(){
    $.ajax({
            method: "POST",
            url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous",
            datatype: "appliacton/json",
            headers: {
                'X-Mashape-Key': "8DWNl5oYJSmshJe2vEMfGvpPZHmOp1bULr7jsnaErNMmClZ5M0"
            },
            success: function (data) {
                var val = JSON.parse(data);
                console.log(val);
                $("#div1").html(val["quote"] + "<br> <br> <span> - " + val["author"] + "</span>");
            }
        });
}

