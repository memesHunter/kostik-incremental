var balance = 1000
var kps = 0

const speed_multipiler = 0.05

function updateBalance(amount) {
    balance += amount
    drawById("score", balance.toFixed(2))
}

function initButtons() {
    for (let [name, building] of Object.entries(buildingsMap)) {
        if (name == "tier1") {
            drawById("buttons_menu_id", '<button class=buy_building_button onclick=buyBuilding("tier1")>buy tier1 [<span id="TIER1_BUILD">10</span>]</button>')
            continue
        }
        document.getElementById("buttons_menu_id").innerHTML += ('<button class=buy_building_button  onclick=buyBuilding(\"' + name + '\")>buy ' + name + ' [<span id=' + building.name + '>' + building.curPrice + '</span>]</button>')
    }
}

function mainLoop() {
    
    updateBalance(kps * speed_multipiler)
}

function init() {
    initButtons()
    log("Started")
    setInterval(mainLoop, 1000 * speed_multipiler)
}

init()