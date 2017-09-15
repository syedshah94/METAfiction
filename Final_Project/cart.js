
let cartVal = 0;
let setCartVal;
		$('#addToCart').click(function() {
			cartVal++;
			setCartVal = cartVal
			$('#cartCounter').html(setCartVal);
		});