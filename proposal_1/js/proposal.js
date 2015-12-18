window.onload = function() {



$("#questions h2").click(function() {
    //alert("clicked");
    $(this).toggleClass("shown");
    if ($(this).attr("class") != "shown") {
        $(this).next().hide();
    } else {
        $(this).next().slideDown();
    }
});

};
