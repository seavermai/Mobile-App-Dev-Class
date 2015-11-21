/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function() {
    
    $("#loginbutton").click(click_loginbutton);
    
    document.getElementById("region").onchange = function() {
        var region = this.value;
    
    if (region == "NA") {
        alert("Selected North America region!");
    } else if (region == "KR") {
        alert("Selected Korea region!");
    }
    }
    //document.getElementById("region").onchange(select_region);
}

function click_loginbutton() {
    alert("Login button clicked!");
}

/*function select_region() {
    var region = this.value;
    
    if (region == "NA") {
        alert("Selected North American region!");
    } else if (region == "KR") {
        alert("Selected Korea region!");
    }
}*/
