Form.Validator.List
===========

This really simple plugin provide "out of the box" Zend_Form-like errors, using a ul.errors element containing li with error messages.
The first purpose of this plugin is to make easyer the use of Mootools Validator with a Zend_Form, without changing default decorators.

You can also use this plugin to simply display errors in ul-li, or every other tag you want.

How to use
----------

Using this plugin is really easy, just like Form.Validator :
	new Form.Validator.List(formElement, options);
	
Options
-----------------

- All the Form.Validator options, plus
- containerClass - string, defaults to 'errors', the container's class name.
- containerTag - string, defaults to 'ul', the container's tag.
- elementTag - string, defaults to 'li', the element's tags nested into the container.

With default values, an error will be displayed like this :
	<ul class="errors">
		<li>My first error message</li>
		<li>My seconde error message</li>
		<li>And so on...</li>
	</ul>