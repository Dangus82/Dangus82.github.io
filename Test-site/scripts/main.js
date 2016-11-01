//Image witcher code


var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/250px-Dh115.vampire.t11.june2004.arp.jpg') {
		myImage.setAttribute ('src','images/Dh115.va.jpg');
	} else {
		myImage.setAttribute ('src','images/250px-Dh115.vampire.t11.june2004.arp.jpg') 
	}
}

// Personalized welcome message code
// Seems to work best with Chrome

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'This aircraft is awesome, ' + myName;

}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'This aircraft is awesome, ' + storedName;
  }

myButton.onclick = function() {
  setUserName();
}	

