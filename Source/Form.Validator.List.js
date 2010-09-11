/*
---

script: Form.Validator.List.js

description: Extends Form.Validator to add ul / li messages, like Zend_Form

license: MIT-style license

authors:
- Lucas Corbeaux

requires:
- more/1.2.4: Form.Validator

provides: [Form.Validator.List]

...
*/
Form.Validator.List = new Class({
	Extends: Form.Validator,
	options: {
		containerClass: 'errors',
		containerTag: 'ul',
		elementTag: 'li'
	},
	initialize: function(form, options){
		this.parent(form, options);
		
		this.addEvent('onElementValidate', function(isValid, field, className, warn) {		
			var validator = this.getValidator(className);
			
			if (!isValid && validator.getError(field)){
				var ulErrors = field.getNext(this.getContainerSelector());
				
				if (!ulErrors) {
					ulErrors = new Element(this.options.containerTag, {
						'class': this.options.containerClass
					});
					
					ulErrors.inject(field.getParent());
				}
				
				// We use html property instead of text, because some translations use html entites
				var liError = new Element(this.options.elementTag, {
					html: validator.getError(field)
				});
				
				liError.inject(ulErrors);
			}
		});
	},
	validateField: function(field, force) {
		// We destroy our error list before checking (An onStartValidate event in Form.Validator would be useful...)
		var ulErrors = field.getParent().getElement(this.getContainerSelector());
		
		if (ulErrors) {
			ulErrors.destroy();
		}
		
		return this.parent(field, force);
	},
	getContainerSelector: function() {
		var containerSelector = this.options.containerTag;
		
		if (!$empty(this.options.containerClass)) {
			containerSelector += '.' + this.options.containerClass;
		}
		
		return containerSelector;
	}
});