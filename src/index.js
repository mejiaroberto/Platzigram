var page = require('page');
var main = document.getElementById('main-container')

page('/',function (ctx,next) {
	main.innerHTML='Home <a href="/signup">signup</a>';
})

page('/signup',function(ctx,next){
	main.innerHTML='signup 2<a href="/">Home</a>';
})

page();