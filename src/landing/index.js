var yo = require('yo-yo');

module.exports = function landig(box) {
  return yo`<div class="container landig">
			<div class="row">
				<div class="col s10 push-s1">
					<div class="row">
						<div class="col m5 hide-on-small-only">
						<img class="iphone" src="iphone.png"/>				
						</div>
						${box}
				</div>
			</div>
		</div>
	</div>`;
}

