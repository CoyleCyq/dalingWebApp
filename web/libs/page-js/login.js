require(['config'],()=>{
	require(['jquery'],($)=>{
		$('.register').on('click',function(){
			var _number = $('#number').val();
			var _password = $('#password').val();
			console.log(_number,_password)
			$.post(global.baseurl+'login',{username:_number,password:_password},function(res){
				alert(res.message);
				if(res.message == '登录成功！'){
					location.href='personal.html';
				}
			})
		})
	})
})