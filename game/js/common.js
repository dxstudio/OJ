$(function() {
	cartoon();
})


//åŠ¨ç”»
function cartoon() {
	$(".game_img2").show();
	setTimeout(function() {
		$(".game_ball").children().hide();
		$(".add_cartoon_1").addClass("buzz_out2");
		setTimeout(function() {
			cartoon_1();
			setTimeout(function() {
				cartoon_4();
				setTimeout(function() {
					cartoon_5();
					setTimeout(function() {
						cartoon_6();
						setTimeout(function() {
							cartoon_7();
							setTimeout(function() {
								cartoon_2();
								setTimeout(function() {
									cartoon_8();
									setTimeout(function() {
										cartoon_9();
										setTimeout(function() {
											cartoon_5();
											setTimeout(function() {
												cartoon_6();
												setTimeout(function() {
													cartoon_7();
													setTimeout(function() {
														$(".game_img2").fadeOut(500);
														$(".game_img3").fadeIn(500);
														$(".cartoon").css("pointer-events", "auto");
													}, 2500);
												}, 300);
											}, 320);
										}, 330);
									}, 340);
								}, 350);
							}, 360);
						}, 370)
					}, 380);
				}, 390);
			}, 400);
		}, 1000);
	}, 2000);
}
//åŠ¨ç”»
function cartoon_11() {
	$(".game_img2").show();
	setTimeout(function() {
		$(".game_ball").children().hide();
		$(".add_cartoon_1").addClass("buzz_out2");
		setTimeout(function() {
			cartoon_1();
			setTimeout(function() {
				cartoon_4();
				setTimeout(function() {
					cartoon_5();
					setTimeout(function() {
						cartoon_6();
						setTimeout(function() {
							cartoon_7();
							setTimeout(function() {
								cartoon_2();
								setTimeout(function() {
									cartoon_8();
									setTimeout(function() {
										cartoon_9();
										setTimeout(function() {
											cartoon_5();
											setTimeout(function() {
												cartoon_6();
												setTimeout(function() {
													$(".game_img2").fadeOut(500);
													$(".game_img3").fadeIn(500);
													$(".cartoon").css("pointer-events", "auto");
												}, 2500);
											}, 300);
										}, 330);
									}, 340);
								}, 350);
							}, 360);
						}, 370)
					}, 380);
				}, 390);
			}, 400);
		}, 1000);
	}, 2000);
} 
//åŠ¨ç”»
function cartoon_22() {
	$(".game_img2").show();
	setTimeout(function() {
		$(".game_ball").children().hide();
		$(".add_cartoon_1").addClass("buzz_out2");
		setTimeout(function() {
			cartoon_1();
			setTimeout(function() {
				cartoon_4();
				setTimeout(function() {
					cartoon_5();
					setTimeout(function() {
						cartoon_6();
						setTimeout(function() {
							cartoon_7();
							setTimeout(function() {
								cartoon_2();
								setTimeout(function() {
									cartoon_8();
									setTimeout(function() {
										cartoon_9();
										setTimeout(function() {
											cartoon_5();
											setTimeout(function() {
												$(".game_img2").fadeOut(500);
												$(".game_img3").fadeIn(500);
												$(".cartoon").css("pointer-events", "auto");
											}, 2500);
										}, 300);
									}, 340);
								}, 350);
							}, 360);
						}, 370)
					}, 380);
				}, 390);
			}, 400);
		}, 1000);
	}, 2000);
}

//åŠ¨ç”»å¼€å§‹ å³è¾¹æ—‹è½¬
function cartoon_1() {
	$(".game_ball_2").addClass("right_bottom_1");
	$(".game_ball_1").addClass("left_top_1");
	$(".game_ball_3").addClass("left_centre_1");
}

function cartoon_4() {
	$(".game_ball_2").removeClass("right_bottom_1");
	$(".game_ball_1").removeClass("left_top_1");
	$(".game_ball_3").removeClass("left_centre_1");
	$(".game_ball_2").addClass("left_centre_1");
	$(".game_ball_1").addClass("right_bottom_1");
	$(".game_ball_3").addClass("left_top_1");
}

function cartoon_5() {
	$(".game_ball_2").removeClass("left_bottom_1");
	$(".game_ball_1").removeClass("right_centre_1");
	$(".game_ball_3").removeClass("right_top_1");
	$(".game_ball_2").removeClass("left_centre_1");
	$(".game_ball_1").removeClass("right_bottom_1");
	$(".game_ball_3").removeClass("left_top_1");
	$(".game_ball_2").addClass("left_top_1");
	$(".game_ball_1").addClass("left_centre_1");
	$(".game_ball_3").addClass("right_bottom_1");
}

function cartoon_6() {
	$(".game_ball_2").removeClass("left_top_1");
	$(".game_ball_1").removeClass("left_centre_1");
	$(".game_ball_3").removeClass("right_bottom_1");
	$(".game_ball_2").addClass("right_bottom_1");
	$(".game_ball_1").addClass("left_top_1");
	$(".game_ball_3").addClass("left_centre_1");
}

function cartoon_7() {
	$(".game_ball_2").removeClass("right_bottom_1");
	$(".game_ball_1").removeClass("left_top_1");
	$(".game_ball_3").removeClass("left_centre_1");
	$(".game_ball_2").addClass("left_centre_1");
	$(".game_ball_1").addClass("right_bottom_1");
	$(".game_ball_3").addClass("left_top_1");
}

function cartoon_2() {
	$(".game_ball_2").removeClass("left_centre_1");
	$(".game_ball_1").removeClass("right_bottom_1");
	$(".game_ball_3").removeClass("left_top_1");
	$(".game_ball_2").addClass("right_centre_1");
	$(".game_ball_1").addClass("right_top_1");
	$(".game_ball_3").addClass("left_bottom_1");
}

function cartoon_8() {
	$(".game_ball_2").removeClass("right_centre_1");
	$(".game_ball_1").removeClass("right_top_1");
	$(".game_ball_3").removeClass("left_bottom_1");
	$(".game_ball_2").addClass("right_top_1");
	$(".game_ball_1").addClass("left_bottom_1");
	$(".game_ball_3").addClass("right_centre_1");
}

function cartoon_9() {
	$(".game_ball_2").removeClass("right_top_1");
	$(".game_ball_1").removeClass("left_bottom_1");
	$(".game_ball_3").removeClass("right_centre_1");
	$(".game_ball_2").addClass("left_bottom_1");
	$(".game_ball_1").addClass("right_centre_1");
	$(".game_ball_3").addClass("right_top_1");
}

function cartoon_3() {
	$(".game_ball_1").removeClass("right_top_1");
	$(".game_ball_1").removeClass("left_bottom_1");
	$(".game_ball_1").removeClass("right_centre_1");
	$(".game_ball_1").removeClass("left_centre_1");
	$(".game_ball_1").removeClass("left_top_1");
	$(".game_ball_1").removeClass("right_bottom_1");

	$(".game_ball_2").removeClass("right_top_1");
	$(".game_ball_2").removeClass("left_bottom_1");
	$(".game_ball_2").removeClass("right_centre_1");
	$(".game_ball_2").removeClass("left_centre_1");
	$(".game_ball_2").removeClass("left_top_1");
	$(".game_ball_2").removeClass("right_bottom_1");

	$(".game_ball_3").removeClass("right_top_1");
	$(".game_ball_3").removeClass("left_bottom_1");
	$(".game_ball_3").removeClass("right_centre_1");
	$(".game_ball_3").removeClass("left_centre_1");
	$(".game_ball_3").removeClass("left_top_1");
	$(".game_ball_3").removeClass("right_bottom_1");
}

//å¼€å¯å°çƒ
$(".cartoon").click(function() {
	var cartoon_id = $(this).attr("cartoon_id");
	$(".add_cartoon_1").addClass("buzz_out3");
	if (cartoon_id == 1) {
		$(".plane_ok").fadeIn(500);
		return false;
	} else {
		$(".plane_over").fadeIn(500);
	}
});