/* 
    Created on : Nov 29, 2015, 6:38:00 PM
    Author     : Seaver
*/

window.onload = function() {

/*$("#menubar").click(function() {
    alert("menubar clicked");
});*/


/*$("#list" + "1").click(function() {
    alert("list 1 clicked");
});*/

/*
$("#list2").click(function() {
    alert("list 2 clicked");
});
*/

$("#content").on("click", "div.list", function() {
    alert($(this).attr("id"));
    
});




};
