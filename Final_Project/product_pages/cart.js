var cartVal = 0;
var setCartVal;
$('#addToCart').click(function() {
	cartVal++;
	$('#cartCounter').html(cartVal);
});
