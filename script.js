$(document).ready(function() {
	$("#btnCalculate").click(function(){
		var a = $("#a").val();
		var b = $("#b").val();
		var c = Math.sqrt(a*a+b*b);
		var area = a*b/2.0;
		var angleA = Math.asin(a/c)*180/Math.PI;
		var angleB = Math.acos(a/c)*180/Math.PI;
		$("#c").text("c: " +c.toFixed(4));
		$("#area").text("The Area is: "+area.toFixed(4));
		$("#angleA").text("The Angle A is: "+angleA.toFixed(4)+"\xB0");
		$("#angleB").text("The Angle B is: "+angleB.toFixed(4)+"\xB0");
	});
});