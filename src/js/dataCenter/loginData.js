app.factory("loginData", ["$http", "myMd5", function(http, myMd5) {
	
	var coreLoginData = null;

	var randomString = function(len) {
        len = len || 32;
        for (var $chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", maxPos = $chars.length, pwd = "", i = 0; i < len; i++)
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        return pwd;
    }

    var nonce = randomString();

     var getMd5 = function(nonce, phoneNum) {
        var token = "gDclCjcZ#89EIJio(7"
          , phone = phoneNum;
        return myMd5.createHash(nonce + phone + token).toUpperCase()
    }

    return {
    	submit: function(scope){
			http({
				url: "http://as-vip.missfresh.cn/v1/auth/verify-captcha?device_id=b2fbe2a8bd6a74aab4a2f83e237fe6eb&env=web&phone_number=" + scope.userInfo.phone + "&platform=web&tdk=149267165802885344801&uuid=b2fbe2a8bd6a74aab4a2f83e237fe6eb&version=2.3.7",
				method: 'post',
				data: {
					code: scope.userInfo.code,
					phone_number: scope.userInfo.phone
				}
			}).success(function(res){
				 console.log('信息请求成功了', res.access_token);
				 if(res.access_token) {
				 	localStorage.setItem('access_token', res.access_token);
				 }	
			}).error(function() {
				console.log("登錄失敗!");
			})	 	
		},
    	sendCode: function(scope) {
    		
    		var md5 = getMd5(nonce, scope.userInfo.phone);

    		http({
    			url: 'http://as-vip.missfresh.cn/v1/auth/login-register?device_id=b2fbe2a8bd6a74aab4a2f83e237fe6eb&env=web&nonce=' + nonce + '&platform=web&signature=' + md5 + 'MlJqMWZPc0hTazcrUTMxNVh3SDVFQThnSi9JdU43MWNTdytKcnRoTnFaaz0=',
    			method: "post",
    			data: {
    				phone_number: scope.userInfo.phone,
    				send_type: "SMS"
    			}
    		}).success(function(res) {
    			console.log("數據請求成功", res);
    		}).error(function() {
    			console.log("數據請求失敗!");
    		})

    	}
    }

}])