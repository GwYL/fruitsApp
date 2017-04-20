app.controller("loginCtrl", ["$scope", "loginData", function(scope, loginData) {
	
	scope.userInfo = {
		phone: "18380591364",
		code: ""
	}

	scope.sendCode = function() {
		loginData.sendCode(scope);
	}

	scope.submit = function() {
		loginData.submit(scope);
	}

}])