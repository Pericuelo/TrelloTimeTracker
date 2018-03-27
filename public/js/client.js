/* global TrelloPowerUp */

TrelloPowerUp.initialize({
  'card-buttons': function(t, options){
      return [{
        icon: 'https://raw.github.com/Pericuelo/TrelloTimeTracker/master/assets/icon.png',
        text: 'Time Track',
      }];
    },
  // Start adding handlers for your capabilities here!
	// 'card-buttons': function(t, options) {
	// 	return [{
	// 		icon: BLACK_ROCKET_ICON,
	// 		text: 'Estimate Size',
	// callback: function(t) {
	// return t.popup({
	// title: "Estimation",
	// url: 'estimate.html',
	// });
	// }
	// 	}];
	// },
});
