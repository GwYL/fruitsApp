app.directive("navBar", ["navData", function(navData) {
	return {
		resdrict: "E",
		templateUrl: "/view/footer.html",
		scope: {
			//
		},
		replace: true,
		link: function(scope, element, attr) {
			
			scope.list = navData.getList();

			scope.curIndex = navData.getCurIndex(location.hash);

			scope.mark = function(index) {
				
				scope.curIndex = index;

			}

		}
	}
}])