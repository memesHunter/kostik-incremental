function buyBuilding(name) {
    const building = buildingsMap[name]
    
    if (building.curPrice > balance) {
        log(`Not enough koksticks. Need ${(building.curPrice - balance).toFixed(2)} more`)
    } else {
        log(`Buying ${name}`)
        updateBalance(-building.curPrice)
        
        building.visible = true
        building.amount++
        building.applyPriceMultipiler()
        kps += building.stat * building.multipiler
        
    }
    drawBuildingsBought()
    drawById("kps_label", kps.toFixed(2))
    drawById(building.name, building.curPrice) 
}

function makeBuilding(price, stat, name) {
    return {
        name: name,
        visible: false,
        
        basePrice: price,
        curPrice: price,
        priceMultipiler: 1.15,
        
        stat: stat,
        multipiler: 1,
        
        amount: 0,
        
        addMultipiler: function(mult) {
            this.multipiler *= mult
        },
        
        applyPriceMultipiler: function() {
            this.curPrice *= this.priceMultipiler
            this.curPrice = this.curPrice.toFixed(2)
        },
        
        getStat: function() {
            return this.stat * this.multipiler * this.amount
        }
    }
}

const buildingsMap = {
    tier1: makeBuilding(10, 0.1, "TIER1_BUILD"),
    tier2: makeBuilding(100, 1, "TIER2_BUILD"),
    tier3: makeBuilding(500, 5, "TIER3_BUILD"),
    //special: makeBuilding(1, 500, "yay"),
}