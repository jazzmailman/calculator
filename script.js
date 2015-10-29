//var operators = ['+', '-', 'x', '÷'];
//var keys = $('.calculator.keys');

//for (var i = 0; i<keys.length; i++){
    //keys[i].onclick=function(e){
        //var input=$('.screen');
        //var inputVal=input.innerhtml;
        //var btnVal=this.innterhtml;
    //}
//}

function callback(type, value, item) {
    switch (value) {
        case undefined:
            $('.display_area').html("");
            break;
        default:
            $('.display_area').html(value);
            break;
    }
}
// my_calculator - creates a new calculator object
var my_calculator = new calculator(callback);

//after DOM load add click handlers to all buttons
    $(document).ready(function () {
        $('button').on('click', function () {
            var val = $(this).text();
            switch (val) {
                case 'C':
                    my_calculator.allClear();
                    break;
                default:
                    my_calculator.addItem($(this).text());
                    break;
            }
        });
    })
