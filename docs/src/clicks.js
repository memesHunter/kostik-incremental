const clickingStuff = {
    totalClicks: 0,
    luckyClickNum: 7,
    
    multipiler: 1,
    
    click: function() {
        this.totalClicks++
        if (this.totalClicks === this.luckyClickNum) {
            this.luckyClick()
            this.luckyClickNum *= 7
        } else {
            updateBalance(this.multipiler)
        }
    },
    
    luckyClick: function() {
        log("lucky you!")
        updateBalance(this.multipiler * this.luckyClickNum)
    }
}