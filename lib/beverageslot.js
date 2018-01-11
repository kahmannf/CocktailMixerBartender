
function BeverageSlot(){
    this.slotId = 0;
    this.beverageName = '';
    this.amount = '';
}


BeverageSlot.prototype.fill = function (bevName, newAmount) {
    this.beverageName = beverageName;
    this.amount = newAmount;
}

BeverageSlot.prototype.clear = function () {
    this.amount = 0;
    this.beverageName = '';
}

BeverageSlot.prototype.save = function() {
    throw "NotImplemented";
}

module.export = BeverageSlot;