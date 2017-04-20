app.factory("navData", function() {
	
	var list = [{
		name: "首页",
		href: "#/home",
		icon: "icon-shouye"
	},{
		name: "品牌团",
		href: "#/info",
		icon: "icon-pinpai"
	},{
		name: "红包",
		href: "#/login",
		icon: "icon-hongbao"
	},{
		name: "购物车",
		href: "#/cart",
		icon: "icon-gouwuche"
	},{
		name: "我的",
		href: "#/self",
		icon: "icon-wode"
	}];

	return {
		getList: function() {
			return list;
		},
		getCurIndex: function(name) {
			for (var i = 0; i < list.length; i++) {
				if (name === list[i].href)
					return i;
			}
		}
	}

})