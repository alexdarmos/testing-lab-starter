/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue, cashTendered) {
        this.amountDue = amountDue;
        this.cashTendered = cashTendered;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
        if (type === `penny`) {
            return this.cashTendered + 1;
        } else if (type === `nickel`) {
            return this.cashTendered + 5;
        } else if (type === `dime`) {
            return this.cashTendered + 10;
        } else if (type === `quarter`) {
            return this.cashTendered + 25;
        }
        

        
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
        if (this.cashTendered < this.amountDue ) {
            console.log(`${false}: cashTendered: ${this.cashTendered},  amountDue: ${this.amountDue}`);
            return false;
        } else  {
            console.log(`${true}: cashTendered: ${this.cashTendered},  amountDue: ${this.amountDue}`);
            return true;
        }
        
       
    }

    giveChange() {
        let numQuarters, numDimes, numNickels, numPennies, leftOver;

        let change = {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        };

        let amountOwed = this.cashTendered - this.amountDue;
       
        numQuarters = Math.floor(amountOwed / 25);  
        change.quarters = numQuarters; 
        amountOwed = amountOwed % 25;

        numDimes = Math.floor(amountOwed /10);
        // console.log(numDimes);
        change.dimes = numDimes; 
        amountOwed = amountOwed % 10;

        numNickels = Math.floor(amountOwed / 5);
        change.nickels = numNickels; 
        amountOwed = amountOwed % 5;

        numPennies = amountOwed;
        change.pennies = numPennies;
        console.log(change);
        
        return change;
       
    }
}
