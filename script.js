$(document).ready(function() { 
    var submit = $('#submit');
    var container = $('#container');
    
    submit.on('click', function() {
        
        $('p').remove();
        
        var number = +$('#inputNumber').val();
        
        if (number % 1 == 0) {
            //console.log('woohoo');
            writeStuff(number);
        } else {
            alert('you need an integer, dude');
        }
        return false;
    });
    
    function cleanUp() {
        container.remove('p');
    }
    
    function writeStuff(n) {
        for (var i = 1; i <= n; i++) {

            if (i % 15 == 0) {
                container.append("<p>FizzBuzz</p>");
                }
            else if (i % 3 == 0) {
                container.append("<p>Fizz</p>");
            }
            else if (i % 5 == 0) {
                container.append("<p>Buzz</p>");
            }
            else {
                container.append("<p>" + i + "</p>");
            }

        }
    }
});


