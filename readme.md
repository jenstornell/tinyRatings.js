# TinyStarRatings

## Global options

### selector

To get the ratings of on a page, you need to set a selector.

```html
<div class="rating" data-rating="3"></div>

<script>
tinystarratings.init({
    'selector': '.rating'
});
</script>
```

## Inline options

### enabled (optional)

By adding `data-rating-enabled` to `false`, the stars will be disabled. The default is `true`.

```html
<div class="rating" data-rating="3" data-rating-enabled="false"></div>
```

##  Methods

To not repeat myself all the examples below uses this pattern.

```html
<t-rating value="3"></t-rating>

<script>
tinyRatings.init({
    'prefix': 't'
});

var element = document.querySelector('#my-special-rating');

/* JS METHOD GOES HERE */
</script>
```

### elementToHtml

You can force a rating with a method like below.

```js
tinystarratings.elementToHtml(element, 5);
```

### clear

If you want to clear an element from stars, use the method `clear` like below.

```js
tinyRatings.clear(element);
```

## Donate

Donate to [DevoneraAB](https://www.paypal.me/DevoneraAB) if you want.

## License

MIT