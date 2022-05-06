function init (){
    let title = "";
    let screen = "";
    let keyboardBox = "";
    let settings = "";
    title +="<div class = 'box'><h1 class = 'title'> Virual Ketboard </h1></div>"
    screen +="<div class = 'box'><textera class = 'screen'></textera></div>"
    keyboardBox +="<div class = 'box'></div>"
    settings += "<div class = 'box'></div>"
document.body.innerHTML = title + screen + keyboardBox + settings;

}
init();