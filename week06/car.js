function getSelectedVal(sel){
    var opt;
    for ( var i = 0, len = sel.options.length; i < len; i++ ) {
        opt = sel.options[i];
        if ( opt.selected === true ) {
            break;
        }
    }
    return opt;
}

function getURL(){
    let sel = document.getElementById("Brand");
    let sel2 = document.getElementById("NeworUsed");
    let brand = getSelectedVal(sel);
    let neworused = getSelectedVal(sel2);

    return "https://www.cars.com/for-sale/searchresults.action/?mkId=" +
     brand.value +
      "&stkTypId=" 
      + neworused.value;
}


function car(){
    let c = getURL();
    console.log(c)
    window.location.replace(c);
}