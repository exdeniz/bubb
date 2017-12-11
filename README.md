![Alt text](/docs/assets/images/bubb.gif?raw=true "Bubb")

**Non-dependent**, non-fancy javascript _infotip_. **No CSS needed**.

[![dependencies Status](https://david-dm.org/frdnrdb/bubb/status.svg)](https://david-dm.org/frdnrdb/bubb)
[![dev dependencies](https://david-dm.org/frdnrdb/bubb/dev-status.svg)](https://badge.fury.io/js/bubb)
[![npm version](https://img.shields.io/badge/trump-sad-red.svg)](http://bubb.surge.sh)

---

#### Usage
[→ See some examples](http://bubb.surge.sh)

```html

<script src="bubb.min.js"></script>

<this data-bubb="bubble">info</this>
<that data-bubb="bobble">menu</that>

<script>

  const config = {
    bubble: 'simple bubb with <i>html</i> or text content',
    bobble: {
      jimi: 'hendrix',
      noel: 'redding',
      mitch: 'mitchell'
    }
  }

  const callback = (key, el) => {
    console.log(key); // eg. 'bubble' or 'bobble.mitch'
  }

  bubb(config, callback)

</script>
```
```js

// yarn add bubb | npm i --save bubb
const bubb = require('bubb');
```

#### Options setup

```js

const config = {
  bubble: {
    text: 'content',
    _: {
      // ... bubble options
    }
  },
  bobble: {
    menu_item_1: 'content',
    menu_item_2: 'content',
    _: {
      // ... bobble options
    }
  },
  _: {
    // ... global options
  }
}

```

#### options

```js

callback: false
  // function(){} overrides initial (or global) callback
  // boolean true adds click listener and reports to default callback

transitionOff: false
  // boolean

interactive: false
  // boolean, default true for menus and option callback

hoverCallback: false
  // boolean, trigger callback on element:hover

delay: false
  // int value, microseconds reveal delay

autoHide: false
  // false or milliseconds

toggle: false
  // boolean, activate tooltip with function call bubb.toggle(key)

direction: false
  // string 'north', 'west' or 'east' (default false = 'south')

autoDirection: false
  // boolean, screen edge proximity aware direction change

anchor: false
  // string 'left' or 'right' (default false = 'centered')

width: false
  // int value <= 100 (document width percentage)
  // css string with units (eg. '300px')
  // querySelector string (eg. 'section:first-of-type')

borderRadius: '4px'
  // css string with units

fontSize: '17px'
  // css string with units

background: '#444'
  // css color string

color: '#fff'
  // css color string

class: false
  // string, className to target current bubb specifically


```

#### Methods

```js

bubb.refresh();
  // initialize new data-bubb elements added to DOM

bubb.update(reference, content | options);

bubb.update(menu_reference, options);
bubb.update(menu_reference.menu_item, content);

bubb.add(menu_reference.menu_item, content);
bubb.remove(menu_reference.menu_item);
  // these methods adds or removes DOM elements

```


#### Style overrides
The content is targeted through **bubb-content** > **div**.
The trigger element gets className **.bubb** *(and .bubb-menu)*.
The bubb(le) tagname is **bubb-bobb**.

---

#### Browser Support et cetera

Missed that train. Feel free to contribute if you're on board.
