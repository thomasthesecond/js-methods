🍦 Vanilla JavaScript Methods
=============================
This is a collection of methods written in plain 'ol JavaScript. I wrote these
methods so that I didn't need to rely on jQuery so much and more importantly, so
that I could actually understand JavaScript better. They've been written for AMD
(I use RequireJS).

forEach
-------
Loops through a array of elements. Similar in theory to jQuery's `$.each()`.

Full credit belongs to
[Todd Motto](http://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/).
I've only included it here so that I may easily refer back to it.

### Usage
```javascript
var nodeList = document.querySelectorAll('li');

forEach(nodeList, function(element, index) {
  // perform action on element
});
```

siblings
--------
Returns an array of siblings for a given element. Typically, this method is used
with the [forEach](#foreach) method to loop through the array of siblings and do
something with them.

### Usage
```javascript
// Set globals
var activeListItem = document.querySelector('li.is-active');
var listItemsNodeList = document.querySelectorAll('li');

// Return a NodeList without `activeListItem`
var siblingListItems = siblings(activeListItem, listItemsNodeList);

// Loop through the sibling NodeList and do something
forEach(siblingListItems, function(element, index) {
  element.classList.remove('is-active');
});
```

addEvent
--------
Attaches an event to an element by using the `addEventListener` method and
degrades to `attachEvent` for IE 8.

*This method is virtually unnecessary if you don't support IE 8.*

### Usage
```javascript
var button = document.querySelector('button');

addEvent(button, 'click touchstart', function(event) {
  // do something
  event.preventDefault();
});
```

addListener
-----------
Adds a listener for `matchMedia` and runs a callback function when a given media
query matches.

### Usage
```javascript
addListener('screen and (min-width: 30em)', function() {
  // do something at the given breakpoint
});
```

setAttributes
-------------
Sets a number of attrbutes to a given element.

### Usage
```javascript
setAttributes(document.querySelector('li'), {
  tabindex: '-1',
  'aria-selected': 'false'
});
```

To-do List
-----------
- Add method for `removeEventListener`
