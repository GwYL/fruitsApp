app.controller("homeCtrl", ["$scope", "cartData", function(scope, cartData) {

	if(!cartData.getData()) {

		cartData.sendData(scope);

		return;

	}

	scope.list = cartData.getData();

}])