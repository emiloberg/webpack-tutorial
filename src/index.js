var styles = require('./style/globalStyle.css');

import $ from 'jquery';

import messages from './messages';
import uppsalajs from './uppsalajs';


var app = document.getElementById('app');

app.innerHTML = `
	<div id="menu">
		<button id="loadPage1">Load Page 1</button>
		<button id="loadPage2">Load Page 2</button>
	</div>
	<div id="content">
		<p>
			<h1>Home</h1>
			${messages.hi} ${messages.event}<br>
			${uppsalajs}<br>
		</p>
	</div>
`;

const elContent = document.getElementById('content');

document.getElementById('loadPage1').addEventListener('click', () => {
	System.import('./page1')
		.then(pageModule => {
			elContent.innerHTML = pageModule.default;
		})
});

document.getElementById('loadPage2').addEventListener('click', () => {
	System.import('./page2')
		.then(pageModule => {
			elContent.innerHTML = pageModule.default;
		})
});

$('#app').css('background-color', 'lightyellow');

if (DEVELOPMENT) {
	if (module.hot) {
		module.hot.accept();
	}
}
