const arduino = require('./arduino-service');
const statemanager = require('./statemanager');

function Beverage() {
    this.name = '';
    this.viscosity = 1;
    this.alcoholVolPercentage = 0;
    this.partsInRecipe = 1;
}

Beverage.prototype.output = function (totalParts, totalML) {
    var factor = this.partsInRecipe / totalParts;
    var amountInMl = totalML * factor;
    
    
    var timeInMs = this.viscosity * amountInMl * 100; //roughly estimated
    console.log(`dispensing ${amountInMl} ML of ${this.name} for ${timeInMs / 1000} seconds`);

    return statemanager.GetSlotIdForBeverage(this.name).then((slotid) => {
        console.log('dispensing from slot' + slotid);
        arduino.open(slotid).then(() => setTimeout(() => {
            arduino.close(slotid);
        } , timeInMs))
    })
}


module.exports = Beverage;

