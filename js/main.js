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

    var setList = [];

    if (document.getElementById("toggle-Incursion").checked == true) {setList.push(".set-1"+selectedFaction+selectedType);}
    if (document.getElementById("toggle-Nowhere").checked == true) {setList.push(".set-2"+selectedFaction+selectedType);}
    if (document.getElementById("toggle-Edge").checked == true) {setList.push(".set-3"+selectedFaction+selectedType);}
    if (document.getElementById("toggle-Motion").checked == true) {setList.push(".set-4"+selectedFaction+selectedType);}
    if (document.getElementById("toggle-Eye").checked == true) {setList.push(".set-5"+selectedFaction+selectedType);}

    let checkedSets = setList.join(', ');
    let cards = document.querySelectorAll(checkedSets);

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "inline-block";
    }
}
