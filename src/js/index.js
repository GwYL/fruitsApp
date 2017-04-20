var app = angular.module("fruitsApp", ["ngRoute", "ionic"]);

app.config(["$routeProvider", function(routeProvider) {
	
	routeProvider.when("/home", {
		templateUrl: "/view/home.html",
		controller: "homeCtrl"
	}).when("/info", {
		templateUrl: "/view/info.html",
		controller: "infoCtrl"
	}).when("/login", {
		templateUrl: "/view/login.html",
		controller: "loginCtrl"
	}).when("/cart", {
		templateUrl: "/view/cart.html",
		controller: "cartCtrl"
	}).when("/self", {
		templateUrl: "/view/self.html",
		controller: "selfCtrl"
	}).otherwise({
		redirectTo: "/home"
	})

}])