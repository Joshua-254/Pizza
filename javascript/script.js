/////////////prizes
// Size prizes
// *small@150
// *medium@200
// *large@250
///// crust prizes
// *Thick@200
// *Thin@120
// *Cheese@280
// *Stuffed@300
// *Deep@250
////// topping prizes
// *Onions@50
// *Pepperoni@150
// *Mushrooms@80
// *Sousage@100
// *Bacon@120

$(function () {
$("#checkout").click(function () {
	let size = $("#size option:selected").val();
	let crust = $("#crust option:selected").val();
	let topping = $("#topping option:selected").val();
	let quantity = $("#quantity option:selected").val();
	console.log(size);
        //checkout display 
        let order = (size, crust, topping, qunity, total) => {
            return {size, crust, topping, qunity, total};
        };
        //check price


        switch (topping) {
            case topping = "onions":
                totalPrice = totalPrice + 50;
                break;
            case topping = "Pepperoni":
                totalPrice = totalPrice + 150;
                break;
            case topping = "Mushroom":
                totalPrice = totalPrice + 80;
                break;
            case topping = "Sousage":
                totalPrice = totalPrice + 100;
                break;
            case topping = "Bacon":
                totalPrice = totalPrice + 120;
                break;
         