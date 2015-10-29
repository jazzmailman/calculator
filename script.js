/**
 * Created by Cliff on 10/28/2015.
 */

var operators = ['+', '-', 'x', '÷'];
var keys = $('.calculator.keys');



for (var i = 0; i<keys.length; i++){
    keys[i].onclick=function(e){
        var input=$('.screen');
        var inputVal=input.innerhtml;
        var btnVal=this.innterhtml;
    }
}