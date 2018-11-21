# tinyRatings.js

*Version 1.0*

Really small rating star element with zero dependencies.

## In short

- Only 1kb
- Vanilla JS
- Zero dependencies
- Super simple setup
- Callback support

## Usage

It just can't get any simpler than this. There is also an example in `index.html`.

### CSS

```html
<link rel="stylesheet" href="assets/css/dist/style.min.css">
```

### HTML

```html
<tr-rating value="4"></tr-rating>
```

### JS

```html
<script src="assets/js/tinyRatings.min.js"></script>
<script>
    tinyRatings.init();
</script>
```

## Global options

### prefix

By default all the elements needed are prefixed with `tr`. In case of collision, you can change it.

```js
tinyRatings.init({
    prefix: 'tr'
});
```

*If you change this option, you also need to change your CSS file.*

### stars

By default you will get a 5 star rating component. If that is not what you want, you can change it.

```js
tinyRatings.init({
    stars: 5
});
```

### lock

if you only want show the rating, but want to prevent the user from rating, you can change `lock` to `true`.

```js
tinyRatings.init({
    lock: false
});
```

### callback

If you need to trigger something when a star is set, you can use the callback. It will give you the element and the rating.

```js
tinyRatings.init({
    callback: function(element, rating) {
        console.log(element);
        console.log(rating);
    }
});
```

*The callback is only triggered if the user click a star, not if the rating is set programically.*

##  Methods

These methods require you to have the tinyRatings init function setup before they could run.

### elementToHtml

You can force a rating with a method like below. The first argument is the element and the second argument is the rating.

```js
tinyRatings.set(element, 5);
```

### clear

If you want to clear an element from stars, use the method `clear` like below. It's a shorthand for `tinyRatings.set(element, 0);`.

```js
tinyRatings.clear(element);
```

## Donate

Donate to [DevoneraAB](https://www.paypal.me/DevoneraAB) if you want.

## License

MIT