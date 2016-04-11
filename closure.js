  function say667() {
  	// Local variable that ends up within closure
  	var num = 666;
  	// var sayAlert = function() {
  	// 	  num++;
  	//     console.log(num);
  	// }

  	// return sayAlert;
  	num++;
  	console.log(num);
  }
  say667();
  say667();
  say667();
  say667();
  // var sayAlert = say667();
  // sayAlert()//执行结果应该弹出的667
  //  sayAlert()//执行结果应该弹出的667
  //   sayAlert()//执行结果应该弹出的667
  //    sayAlert()//执行结果应该弹出的667

  function say667() {
  	var num = 666;
  	var sayAlert = function() {
  		num++;
  		console.log(num);
  		alert(num);
  	}
  	return sayAlert;
  }
  var sayAlert = say667();
  sayAlert();


  [].forEach.call($$("*"), function(a) {
  	a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16)
  })


  $$("*").forEach(function(a) {
  	a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16)
  });

/*call 就是改变forEach的this
$$("*") 取得 页面所有有元素
.forEach 循环遍历, 一个一个处理
function(a){
    a.style.outline = "1px solid #" + (~~(Math.random()*(1 << 24))).toString(16)
}
对这个元素加上一个outline的样式 */