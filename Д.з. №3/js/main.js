Array.from(
	document.querySelectorAll('*'),
	(elem) => (elem.style.cssText = 'outline: 1px solid red;')
)
