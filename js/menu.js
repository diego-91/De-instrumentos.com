$(".li").click(function(){
	$(this).children("ul").slideToggle(32)
})
$("ul").click(function(p){
	p.stopPropagation();
	})
