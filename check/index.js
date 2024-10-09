const check={
	telphone(data){
		if(!(/^1[3456789]\d{9}$/.test(data))){
			uni.showToast({
				title: "手机格式有误",
				icon: 'none'
			})
			return false;
		}
		return true;
	},
	password(data){
		if(data.length<6){
			uni.showToast({
				title: "密码长度不能小于六位",
				icon: 'none'
			})
			return false;
		}
		return true;
	},
	code(data){
		if(data.length != 4){
			uni.showToast({
				title: "验证码长度",
				icon: 'none'
			})
			return false;
		}
		return true;
	}
}
export default check;