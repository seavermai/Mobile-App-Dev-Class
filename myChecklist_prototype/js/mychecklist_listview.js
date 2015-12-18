/* 
    Created on : Nov 27, 2015, 7:17:26 AM
    Author     : Seaver
*/

window.onload = function() {

$("#listname").click(function() {
    alert("listname clicked");
});

$("#searchbar").on( "keydown", function(event) {
    if (event.which == 13) {
        alert("search sent");
    }
});

$("#options").click(function() {
    alert("options clicked");
});
    
};

function parseFromList() {
    
}
