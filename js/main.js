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

// exercise9.2
function BuildTableFromList (listId) {
	var list = document.getElementById(listId);
	var items = list.getElementsByTagName('li');
	var table = [], i;
	for (i = 0; i < items.length; i++) {
		table.push(items[i].textContent);
	}
	return table;
}
function AddListItems (out_listId, itemsTable) {
	var list = document.getElementById(out_listId);
	var i;

	for (i = 0; i < itemsTable.length; i++) {
		var item = document.createElement('li');
		item.innerHTML = itemsTable[i];
		list.appendChild(item);
	}
}
function MergeLists (out_listId) {
	var i;
	for (i = 1; i < arguments.length; i++) {
		AddListItems(out_listId,BuildTableFromList(arguments[i]));
	}
}