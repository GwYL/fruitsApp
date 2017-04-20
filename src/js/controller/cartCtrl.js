app.controller("cartCtrl", ["$scope", "cartData", function(scope, cartData) {
	
	scope.list = cartData.getCart();
	
}])