function getWriteUps() {
    var btn = document.evaluate(
        "/html/body/div/div[1]/ul/li[2]",
        document, null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    );
    
    var div = document.getElementsByClassName("writeups")[0]
    
    if (div.innerHTML == ""){
        div.innerHTML = "<i>Coming Soon</i>"
    }
    else{
        div.innerHTML = ""
    }

}