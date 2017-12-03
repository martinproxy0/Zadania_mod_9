// main script
window.onload = function() {
	// initial value
	ShowResult();
	Statistic();
	DrawTree();
}

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
	
	//element.innerText = (TriangleArea(a,h) >= 20) ? 'Tirangle is big' : 'Tirangle is small';
	ShowResult();
	//document.body.appendChild(element);
	document.getElementById('whatTriangle').innerHTML = (TriangleArea(a,h) >= 20) ? 'Tirangle is big' : 'Tirangle is small';
}
function IsPositiveNumber(number) {
	return (number > 0) ? true : false;
}
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

	for (let i = 0; i < itemsTable.length; i++) {
		if (!IsNameExists(itemsTable[i],out_listId)) {
			var item = document.createElement('li');
			item.innerHTML = itemsTable[i];
			list.appendChild(item);
		}
	}
}
function MergeLists (out_listId) {
	for (let i = 1; i < arguments.length; i++) {
		AddListItems(out_listId,BuildTableFromList(arguments[i]));
	}
}
function AddNewNameToList (in_nameId, out_listId) {
	var name = document.getElementById(in_nameId);
	var list = document.getElementById(out_listId);
	var item = document.createElement('li');

	if(!IsNameExists(name.value,out_listId) && name.value.length !== 0) {

		item.innerHTML = name.value;
		list.appendChild(item);
	}
}
function DeleteNameFromList (in_nameId, out_listId) {
	var name = document.getElementById(in_nameId);
	var list = document.getElementById(out_listId);
	var items = list.getElementsByTagName('li');
	var table = BuildTableFromList( out_listId);
	
	if (IsNameExists(name.value,out_listId) && name.value.length !== 0) {
		items[table.indexOf(name.value)].remove();
	}
}
function IsNameExists (name, listId) {
	var table = BuildTableFromList(listId);
	
	if (table.indexOf(name) === -1) {
		return false;
	}
	return true;
}
function ChangeText (inTextId, newTextId) {
	var element = document.getElementById(inTextId).outerText;
	var dinosaur = document.getElementById(newTextId);
	var item = document.createElement('p');
		item.id = 'resultTriceratops';
	item.innerText = element.toLowerCase().replace('velociraptor',dinosaur.value.toUpperCase()).slice(0,element.length/2);
	
	if (document.getElementById('resultTriceratops') === null) {
		dinosaur.parentElement.appendChild(item);
	}
}
function DrawTree () {
	var myVar = setInterval(MyTimer, 2000);
}
function MyTimer () {
	var d = new Date(),
		sec = d.getSeconds(),
		n = 1,
		char = '*',
		outString = '';
		(function drawStars(n){
		if (!( n <= sec )) {
			return (outString += (sec > 10) ? '***<br>***<br>' : '');
		} else {
			for (let i = n; i >= 1; i--) {
			outString += char;
			};
			outString += '<br>';
			drawStars(n + 2);
		};
	})(n);
	document.getElementById('christmasTree').innerHTML = outString;
}
function Statistic () {
	var statisticCounter = document.getElementsByClassName('statistics');
	for(let i = 1; i <= statisticCounter.length; i++) {
		var bodyElements = document.getElementsByTagName('*');
		var currentStatistic = document.getElementById('statistic' + i);
		switch (i) {
			case 1:
				var bodyChilds = document.body.childElementCount;
				currentStatistic.innerText = 'Body has ' + bodyChilds + ' elemetns.';
			break;
			case 2:
				countElementsWithID	= bodyElements.length;
				currentStatistic.innerText = 'All elements on site ' + countElementsWithID + '.';
			break;
			case 3:
				let array = Array.from(bodyElements);
				elementsWithID = 0;
				array.map(function(node){
					return (node.hasAttribute('id')) ? elementsWithID++ : '';
				})
				currentStatistic.innerText = elementsWithID + ' elements with set ID atrribute ';
			break;
			case 4:
				currentStatistic.innerText = 'Buttons number is ' +  document.getElementsByTagName('button').length;
			break;
			default:
			break;
		}
	}
}