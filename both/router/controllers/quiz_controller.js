this.QuizController = RouteController.extend({
	template: "quiz",
	yieldTemplates: {
		/*YIELD_TEMPLATES*/
	},
	onBeforeAction: function() {
		/*BEFORE_FUNCTION*/
		this.next();
	},
	action: function() {
		this.render();
		/*ACTION_FUNCTION*/
	},
	waitOn: function() {
		return [
		];
		/*WAIT_FUNCTION*/
	},
	data: function() {
		return {
			params: this.params || {}
		};
		/*DATA_FUNCTION*/
	},
	onAfterAction: function() {
	}
});
