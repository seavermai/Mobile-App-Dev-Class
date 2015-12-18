/* 
    Created on : Nov 27, 2015, 7:17:26 AM
    Author     : Seaver
*/

window.onload = function() {

/*** Initialize Page ***/
$("#listview").hide();


/*** Index ***/
$("#appname_button").click(function() {
    alert("myChecklist App\nCreated by: Seaver Mai");
});

/* Handles List Index events */
$(".content").on("click", "div.list", function() {
    //alert("Selected list.\n" + $(this).attr("id")); 
    //$("#index").addClass("fadeOutUp animated");
    //$("#index").removeClass().addClass('fadeOutUp animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //  $(this).hide();
    //  $(this).removeClass();
    //});
    $("#index").hide();
    //$("#listview").addClass("fadeInLeft animated");
    //$(document).ready(function() {
    //$("#listview").removeClass().addClass('fadeInLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //  $(this).show();
    //  $(this).removeClass();
    //});

    $("#listview").show();
    //});
});


/*** Listview ***/
/* Return to List Index */
$(".menubartext").click(function() {
    //$("#listview").removeClass().addClass('fadeOutLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      //$(this).hide();
      //$(this).removeClass();
    //});
    $("#listview").hide();
    $("#index").show();
});

$("#searchbar").on( "keydown", function(event) {
    if (event.which == 13) {
        alert("search sent");
    }
});

$("#options").click(function() {
    alert("options clicked");
});
    
/* Handles List Item events */
$(".content").on("click", "div.item", function() {
    alert($(this).attr("id")); 
});

};

function parseFromList() {
    
}
