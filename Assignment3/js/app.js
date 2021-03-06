const counter = (
    function () {
        var counterValue = 1;
        // change By a particular value => 1,2,3
        function changeBy(val) {
            console.log("changeBy called");
            counterValue = counterValue + val;
        }
        return {
            increment: function () {
                console.log("increment called");
                changeBy(1);
            },
            decrement: function () {
                console.log("decrement called");
                changeBy(-1);
            },
            value: function () {
                return counterValue;
            }
        };
    })();
    const counter2 = (
        function () {
            var counterValue1 = 1;
            // change By a particular value => 1,2,3
            function changeBy(val) {
                console.log("changeBy called");
                counterValue1 = counterValue1 + val;
            }
            return {
                increment: function () {
                    console.log("increment called");
                    changeBy(1);
                },
                decrement: function () {
                    console.log("decrement called");
                    changeBy(-1);
                },
                value: function () {
                    return counterValue1;
                }
            };
        })();
function onClick(event) {
    console.log("onclick called on"+event.target.id);
    const result = document.getElementById("result");
    
    switch (event.target.id) {
        case "button1":
            counter.decrement()
            break;
        case "button2":
            counter.increment()
            break;
        default:
            console.log("default is called");
            break;
    }
    result.innerHTML = counter.value();
}
function onClick1(event) {
    console.log("onclick called on"+event.target.id);
    const result1 = document.getElementById("result1");
    switch (event.target.id) {
        case "button3":
            counter.decrement()
            break;
        case "button4":
            counter.increment()
            break;
        default:
            console.log("default is called");
            break;
    }
    result1.innerHTML = counter.value();
}

console.log("Befor change " + counter.value());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log("After 3 increment " + counter.value());
console.log(counter.decrement());
console.log("After decrement " + counter.value());