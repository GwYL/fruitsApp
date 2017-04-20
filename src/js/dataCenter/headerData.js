app.factory("headerData", function() {
	
	var list = [{
		txt: "特价"
	},{
		txt: "零食"
	},{
		txt: "乳品"
	},{
		txt: "速食"
	},{
		txt: "水果"
	},{
		txt: "饮品"
	},{
		txt: "粮油"
	}];

	return {
		
		getList: function() {
			return list;
		}

	}

})