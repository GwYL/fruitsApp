app.factory("cartData", ["$http", function(http) {
	
	var coreData = null; // 核心购物车数据

	var coreCartList = Store("Tcartlist"); // 核心购物车列表数据

	return {
		setCart: function(item) {
			
			coreCartList[item.name] = item;

			if (item.num === 0)

				delete coreCartList[item.name]

			Store("Tcartlist", coreCartList);

		},
		getCart: function() {
			
			return coreCartList;

		},
		sendData: function(scope) {
			
			http({
				url: "http://as-vip.missfresh.cn/v2/product/home/index?device_id=b2fbe2a8bd6a74aab4a2f83e237fe6eb&env=web&platform=web&tdk=149264955366498009782&uuid=b2fbe2a8bd6a74aab4a2f83e237fe6eb&version=2.3.7",
				method: "post",
				data: {
					
				}
			}).success(function(res) {
				
				console.log(res);

				var data = res.product_list.slice(1);

				for(var i = 0, len = data.length; i < len; i++) {

					data[i].num = 0;

					for(var key in coreCartList) {

						if(key === data[i].name) {

							data[i].num = coreCartList[key].num;

							coreCartList[key] = data[i];

						}

					}

					scope.list = data;

					coreData = data;

				}

			}).error(function() {
				
				console.log("GG思密哒!！");

			})

		},
		getData: function() {
			
			return coreData;

		}
	}

}])