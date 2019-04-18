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
    location.href = c
}

function categoryChange(e) {
    var good_a = ["아큐라", "셰보레", "도요타"];
    var val_a = ["20001", "20053", "20088"];
    var good_b = ["현대", "기아", "페라리"];
    var val_b = ["20064", "20068", "20014"];
    var good_c = ["벤츠", "벤틀리", "BMW"];
    var val_c = ["20028", "20051", "20005"];
    var target = document.getElementById("Brand");
   
    if(e.value == "28881") {var d = good_a; var k = val_a;}
    else if(e.value == "28880") {var d = good_b; var k = val_b;}
    else if(e.value == "") {var d = good_c; var k = val_c;}
   
    target.options.length = 0;
   
    for (x in d) {
      var opt = document.createElement("option");
      opt.value = k[x];
      opt.innerHTML = d[x];
      target.appendChild(opt);
    } 
  }