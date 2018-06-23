window.addEventListener('load', () => {
    const form = document.getElementById('fibForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nth = parseInt(e.target.number.value);

        if (Number.isInteger(nth) && nth >= 0) {
            const result = getNth(nth);
            updateResult(nth, result)
        } else {
            alert("n should be non-negative integer");
        }
    });

    /**
     * Returns the nth fibonacci sequence number
     * 
     * @param {number} nth - The nth number to get. (Must be non-negative)
     */
    function getNth(nth) {
        // check base cases
        if (nth == 0) {
            return bigInt(0);
        }
        if (nth == 1) {
            return bigInt(1);
        }

        // set up table
        const DPTable = new Array(nth);
        DPTable[0] = bigInt(0);
        DPTable[1] = bigInt(1);
        for (let i = 2; i < DPTable.length; i++) {
            DPTable[i] = DPTable[i - 1].plus(DPTable[i - 2]);
        }

        return DPTable[nth - 1]; 
    }

    /**
     * Updates the result description
     * 
     * @param {number} nth - The nth number to get.
     * @param {bigInt} result - The nth fibonacci sequence number.
     */
    function updateResult(nth, result) {
        const resultText = document.getElementById('result');
        resultText.innerHTML = "The " + nth + "<sup>th</sup> fibanacci sequence number is: " + result.toString();
    }

});
