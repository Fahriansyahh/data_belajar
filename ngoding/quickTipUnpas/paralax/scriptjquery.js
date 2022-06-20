


$(window).scroll(function () {
	const scrollTop = $(this).scrollTop()

	$("h1").css({
		'transform': 'translate(0px,' + scrollTop / 3 + '%)'
	})
	$(".kotak1").css({
		'marginRight': +scrollTop + "%",
		'transform': "rotate(" + scrollTop + 'deg)',
		'transition': "0s",
		'marginLeft': +scrollTop - 1 + "px",
		'opacity': "1",
		'backgroundColor': '#' + scrollTop
	})
	$(".kotak2").css({
		'marginLeft': +scrollTop + "%",
		'transform': "rotate(" + scrollTop + 'deg)',
		'marginRight': +scrollTop - 1 + "px",
		'opacity': "1",
		'backgroundColor': '#' + scrollTop


	})
	$(".p1").css({
		'color': "#" + scrollTop
	})
	$(".p2").css({
		'color': "#" + scrollTop
	})
})

