function drawById(id, content) {
    document.getElementById(id).innerHTML = content
}

function drawBuildingsBought() {
    const target_field = document.getElementById("buildings_bought")
    
    target_field.innerHTML = '<span id="buildings_bought_head">BUILDINGS</span><br>'
    for (let [name, building] of Object.entries(buildingsMap)) {
        if (building.visible) {
            target_field.innerHTML += `<div class=building_entry>Name: ${building.name}<br>KPS: ${building.getStat().toFixed(2)}<br>Amount: ${building.amount}</div><br>`
        }
    }
}