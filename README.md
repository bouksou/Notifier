Notifier.js
=====================

A simple & lightweight jquery plugin for notifications


<h1>Installation</h1>

You need to include these files :

<h2>Jquery : </h2>

```html
<script src="jquery.js"></script>
<script src="jquery-ui.min.js"></script>
<script src="notifier.min.js"></script>
```

In preference get the jquery libraries which is in reposity

<h2>Css : </h2>

```html
<link rel="stylesheet" type="text/css" href="css/notifier.css">
```

<h1>Usage</h1>

You can call this method everywhere in your code, these are parameter and possible values

```javascript
(function($)
{
	$.notifier({
		'type': // error | success | warning | info,
		'positionY': // top | bottom,
		'positionX': // left | right,
		'title' : 'Lorem ipsum Eiusmod',
		'text' : 'Lorem ipsum Veniam dolor ea Duis nostrud adipisicing veniam ex nulla proident laboris commodo...',
		'animationIn' : // Animation Entrance : Bounce | Highlight | Pulsat | Shake | Slide ,
		'animationOut' : // Exit Animation : Blind | Clip | Drop | Explode | Fade | Fold | Puff | Pulsat | Shake,
		'delay' : 4000 // (optional) time delay before the notification disparition by default : 4000,
		'number' : 5 // (optional) maximum number of notification in the page by default 5,
		'animationIn_duration' : 'slow' // (optional) entrance animation duration time,
		'animationOut_duration' : 'slow' // (optional) exit animation duration time
	});
})(jQuery);
```

<strong>Demo :</strong> <a href="http://scripts.bouksou.com/notifier">http://scripts.bouksou.com/notifier</a>
