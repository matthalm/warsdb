function resetCards() {
    let cards = document.querySelectorAll(".card, .lcard")
    for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = "none"
    }
}

function select_all_sets() {
    if ( document.getElementById('toggle-Incursion').checked == true 
        && document.getElementById('toggle-Nowhere').checked == true 
        && document.getElementById('toggle-Edge').checked == true 
        && document.getElementById('toggle-Motion').checked == true
        && document.getElementById('toggle-Eye').checked == true ) {
        document.getElementById('toggle-Incursion').checked = false;
        document.getElementById('toggle-Nowhere').checked = false;
        document.getElementById('toggle-Edge').checked = false;
        document.getElementById('toggle-Motion').checked = false;
        document.getElementById('toggle-Eye').checked = false;
    } else {
        document.getElementById('toggle-Incursion').checked = true;
        document.getElementById('toggle-Nowhere').checked = true;
        document.getElementById('toggle-Edge').checked = true;
        document.getElementById('toggle-Motion').checked = true;
        document.getElementById('toggle-Eye').checked = true;
    }
}

function subselect() {
    document.getElementById("weapon-tags").selectedIndex = 0;
    document.getElementById("asset-tags").selectedIndex = 0;
    document.getElementById("earther-tags").selectedIndex = 0;
    document.getElementById("gongen-tags").selectedIndex = 0;
    document.getElementById("maverick-tags").selectedIndex = 0;
    document.getElementById("shi-tags").selectedIndex = 0;
    document.getElementById("quay-tags").selectedIndex = 0;
    document.getElementById("independent-tags").selectedIndex = 0;
    if (document.getElementById("select-type").value == ".type-weapon") {
        document.getElementById("asset-tags").style.display = "none";
        document.getElementById("weapon-tags").style.display = "inline-block";
        document.getElementById("earther-tags").style.display = "none";
        document.getElementById("gongen-tags").style.display = "none";
        document.getElementById("maverick-tags").style.display = "none";
        document.getElementById("shi-tags").style.display = "none";
        document.getElementById("quay-tags").style.display = "none";
        document.getElementById("independent-tags").style.display = "none";
    } else if (document.getElementById("select-type").value == ".type-asset") {
        document.getElementById("asset-tags").style.display = "inline-block";
        document.getElementById("weapon-tags").style.display = "none";
        document.getElementById("earther-tags").style.display = "none";
        document.getElementById("gongen-tags").style.display = "none";
        document.getElementById("maverick-tags").style.display = "none";
        document.getElementById("shi-tags").style.display = "none";
        document.getElementById("quay-tags").style.display = "none";
        document.getElementById("independent-tags").style.display = "none";
    } else {
    switch (document.getElementById("select-faction").value) {
    case ".faction-earther":
        document.getElementById("weapon-tags").style.display = "none";
        document.getElementById("asset-tags").style.display = "none";
        document.getElementById("earther-tags").style.display = "inline-block";
        document.getElementById("gongen-tags").style.display = "none";
        document.getElementById("maverick-tags").style.display = "none";
        document.getElementById("shi-tags").style.display = "none";
        document.getElementById("quay-tags").style.display = "none";
        document.getElementById("independent-tags").style.display = "none";
        break;
    case ".faction-gongen":
        document.getElementById("weapon-tags").style.display = "none";
        document.getElementById("asset-tags").style.display = "none";
        document.getElementById("earther-tags").style.display = "none";
        document.getElementById("gongen-tags").style.display = "inline-block";
        document.getElementById("maverick-tags").style.display = "none";
        document.getElementById("shi-tags").style.display = "none";
        document.getElementById("quay-tags").style.display = "none";
        document.getElementById("independent-tags").style.display = "none";
        break;
    case ".faction-maverick":
        document.getElementById("weapon-tags").style.display = "none";
        document.getElementById("asset-tags").style.display = "none";
        document.getElementById("earther-tags").style.display = "none";
        document.getElementById("gongen-tags").style.display = "none";
        document.getElementById("maverick-tags").style.display = "inline-block";
        document.getElementById("shi-tags").style.display = "none";
        document.getElementById("quay-tags").style.display = "none";
        document.getElementById("independent-tags").style.display = "none";
       break;
    case ".faction-shi":
        document.getElementById("weapon-tags").style.display = "none";
        document.getElementById("asset-tags").style.display = "none";
        document.getElementById("earther-tags").style.display = "none";
        document.getElementById("gongen-tags").style.display = "none";
        document.getElementById("maverick-tags").style.display = "none";
        document.getElementById("shi-tags").style.display = "inline-block";
        document.getElementById("quay-tags").style.display = "none";
        document.getElementById("independent-tags").style.display = "none";
        break; 
    case ".faction-quay":
        document.getElementById("weapon-tags").style.display = "none";
        document.getElementById("asset-tags").style.display = "none";
        document.getElementById("earther-tags").style.display = "none";
        document.getElementById("gongen-tags").style.display = "none";
        document.getElementById("maverick-tags").style.display = "none";
        document.getElementById("shi-tags").style.display = "none";
        document.getElementById("quay-tags").style.display = "inline-block";
        document.getElementById("independent-tags").style.display = "none";
        break
    case ".faction-independent":
        document.getElementById("weapon-tags").style.display = "none";
        document.getElementById("asset-tags").style.display = "none";
        document.getElementById("earther-tags").style.display = "none";
        document.getElementById("gongen-tags").style.display = "none";
        document.getElementById("maverick-tags").style.display = "none";
        document.getElementById("shi-tags").style.display = "none";
        document.getElementById("quay-tags").style.display = "none";
        document.getElementById("independent-tags").style.display = "inline-block";
        break
    default:
        document.getElementById("weapon-tags").style.display = "none";
        document.getElementById("asset-tags").style.display = "none";
        document.getElementById("earther-tags").style.display = "none";
        document.getElementById("gongen-tags").style.display = "none";
        document.getElementById("maverick-tags").style.display = "none";
        document.getElementById("shi-tags").style.display = "none";
        document.getElementById("quay-tags").style.display = "none";
        document.getElementById("independent-tags").style.display = "none";
    }
    }
}

function filter() {

    resetCards();

    if(document.getElementById("toggle-Incursion").checked == false 
        && document.getElementById("toggle-Nowhere").checked == false 
        && document.getElementById("toggle-Edge").checked == false 
        && document.getElementById("toggle-Motion").checked == false 
        && document.getElementById("toggle-Eye").checked == false  ) {
        select_all_sets();
    }

    let selectedFaction = document.getElementById("select-faction").value;
    let selectedType = document.getElementById("select-type").value;
    let selectedTags = document.getElementById("earther-tags").value + document.getElementById("gongen-tags").value + document.getElementById("maverick-tags").value + document.getElementById("shi-tags").value + document.getElementById("quay-tags").value + document.getElementById("independent-tags").value + document.getElementById("weapon-tags").value + document.getElementById("asset-tags").value;
    let selections = selectedFaction + selectedType + selectedTags;

    var setList = [];

    if (document.getElementById("toggle-Incursion").checked == true) {setList.push(".set-1"+selections);}
    if (document.getElementById("toggle-Nowhere").checked == true) {setList.push(".set-2"+selections);}
    if (document.getElementById("toggle-Edge").checked == true) {setList.push(".set-3"+selections);}
    if (document.getElementById("toggle-Motion").checked == true) {setList.push(".set-4"+selections);}
    if (document.getElementById("toggle-Eye").checked == true) {setList.push(".set-5"+selections);}

    let checkedSets = setList.join(', ');
    let cards = document.querySelectorAll(checkedSets);

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "inline-block";
    }

    if ( cards.length == 1 ) {
        document.getElementById("results").innerHTML = cards.length + " result";
    } else {
        document.getElementById("results").innerHTML = cards.length + " results";
    }
}
