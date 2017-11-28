// main script
function TriangleArea(a, h) {
    return a*h/2;
}

function ShowResult() {
    triangleArea = document.getElementById('result');
    a = document.getElementById('a').value;
    h = document.getElementById('h').value;
		if (isNaN(a) || isNaN(h)) {
			alert('Base or height isn\'t a number');
			triangleArea.innerText = 'Try with number ;)';
		} else {
			if (IsPositiveNumber(a) && IsPositiveNumber(h)){
				triangleArea.innerText = TriangleArea(a,h);
			} else {
				triangleArea.innerText = 'I need positive value of parameters';
			}
		}
}

function IsBigTriangle() {
	var element = document.createElement('p');
	a = document.getElementById('a').value;
	h = document.getElementById('h').value;
	
	element.innerText = (TriangleArea(a,h) >= 20) ? 'Tirangle is big' : 'Tirangle is small';
	ShowResult();
	document.body.appendChild(element);
}

function IsPositiveNumber(number) {
	return (number > 0) ? true : false;
}

// initial value
ShowResult();