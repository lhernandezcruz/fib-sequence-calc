$(document).ready(function () {
    $("#frm1").on("submit", function (e) {
        e.preventDefault();
        var nth = $("input").val();
        getNth(nth);
    });

    /**
     *  getNth()
     *  input: nth = the nth number we want to get 
     *  gets the nth Fib number using dynamic programmin and displays it
     **/
    function getNth(nth) {
        var x = nth;
        var p = new Array(parseInt(x));
        p[0] = bigInt(1);
        p[1] = bigInt(1);
        for (i = 2; i < p.length; i++) {
            p[i] = p[i - 1].plus(p[i - 2]);
        }
        y = "The " + x + "<sup>th</sup> fibanacci sequence number is: <br>" + p[parseInt(x) - 1].toString();
        document.getElementById("demo").innerHTML = y;
    }


});