app.controller("infoCtrl", ["$scope", "$ionicModal", function(scope, ionicModal) {
	
	scope.login = false; // 默認未登錄

	// 定義模態框
	ionicModal.fromTemplateUrl("/src/js/widget/view/login.html", {
		scope: scope,
		animation: "slide-in-up"
	}).then(function(modal) {
		
		scope.modal = modal;

	})

	scope.showLogin = function() {
		
		scope.modal.show();

	}

	scope.hide = function() {
		
		scope.modal.hide();

	}

}])