Notifier.js
=====================

A simple ans lightweight jquery plugin for notifications


<h1>Installation</h1>
<hr>

You need to include these files :

<h2>Jquery : </h2>

```jquery
<script src="jquery.js"></script>
<script src="jquery-ui.min.js"></script>
<script src="notifier.min.js"></script>
```

In preference get the jquery libraries which is in reposity

<h2>Css : </h2>

```css
<link rel="stylesheet" type="text/css" href="css/notifier.css">
```

<h1>Usage</h1>
<hr>



```jquery
			$.notifier({
				'type': $('.type').val(),
				'positionY': $('.posY').val(),
				'positionX': $('.posX').val(),
				'title' : 'Lorem ipsum Eiusmod',
				'text' : 'Lorem ipsum Veniam dolor ea Duis nostrud adipisicing veniam ex nulla proident laboris commodo fugiat nulla incididunt eu do ut officia adipisicing sit veniam voluptate mollit culpa ullamco id fugiat in elit sed sunt irure eiusmod do fugiat amet.',
				'animationIn' : $('.animationIn').val(),
				'animationOut' : $('.animationOut').val(),
				'delay' : 4000
			});
```
