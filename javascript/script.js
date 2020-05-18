// //prizes
// Size prizes
// *small@150
// *medium@200
// *large@250
// crust prizes
// *Thick@200
// *Thin@120
// *Cheese@280
// *Stuffed@300
// *Deep@250
// topping prizes
// *Onions@50
// *Pepperoni@150
// *Mushrooms@80
// *Sousage@100
// *Bacon@120

$("#checkout").click(function () {
	let size = $("#size option:selected").val();
	let crust = $("#crust option:selected").val();
	let topping = $("#toppings option:selected").val();
	let number = $("#number").val();
	console.log(size);
