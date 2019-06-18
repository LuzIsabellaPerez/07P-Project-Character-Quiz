$("img").hide();
$(".wooo").show();

$("button").click(function() {
    var ripRap = $(".song").val();
    var number = $(".number").val();
    if (ripRap === "Straighten It Out" && number >= 20) {
        $(".dagNabit").text("Du är Squidward!");
        $(".squidward").show();
        $(".dieFragen").hide();
        $("body").css("background", "url('http://sf.co.ua/13/12/wallpaper-4682.jpg')");
    } else if (ripRap === "Straighten It Out" && number < 20) {
        $(".dagNabit").text("Du är Patrick!");
        $(".patrick").show();
        $(".dieFragen").hide();
        $("body").css("background", "url('http://sf.co.ua/13/12/wallpaper-4682.jpg')");
    } else if (ripRap === "Da Draußen" && number >= 20) {
        $(".dagNabit").text("Du bist SpongeBob!");
        $(".spongebob").show();
        $(".dieFragen").hide();
        $("body").css("background", "url('http://sf.co.ua/13/12/wallpaper-4682.jpg')");
    } else if (ripRap === "Da Draußen" && number < 20) {
        $(".dagNabit").text("Du bist Mr. Krabs!");
        $(".mrKrabs").show();
        $(".dieFragen").hide();
        $("body").css("background", "url('http://sf.co.ua/13/12/wallpaper-4682.jpg')");
    } else {
        $(".dagNabit").text("Whoops! There seems to be a mistake!");
        $(".whoops").show();
        $(".dieFragen").hide();
        $(".whoops").css("border", "dashed blue 10px");
        $("body").css("background", "url('https://scontent-lga3-1.cdninstagram.com/vp/7e51b9d15d8a7ef023f9b5b9c03ca3c5/5D1976F3/t51.2885-15/sh0.08/e35/s640x640/51924974_306968750163226_2469419748422067278_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com')");
    }
});