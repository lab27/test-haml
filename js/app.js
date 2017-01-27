


TweenMax.staggerFrom('.callout',.5,{opacity:0, marginTop: 100},.2);

var tl = new TimelineLite()

$('.callout').on('click', function(){
	tl.to(this,.1,{borderTopWidth:10, borderBottomWidth:10, borderColor: "#900"})
	.to(this,.2,{color: "rgba(0,0,0,0)", backgroundColor: "#f00"},"-=.2")
	.to(this,.3,{opacity:0,height:0,ease: Back.easeIn, onComplete: function(){
		(this.target).remove()
	}});
});