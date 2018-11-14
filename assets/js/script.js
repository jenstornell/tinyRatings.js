var tinystarratings = (function () {
    var fn = {};

    fn.init = function(options) {
        fn.options = Object.assign({}, fn.defaults(), options);
        console.log(fn.options);
        fn.elements = document.querySelectorAll(fn.options.selector);

        fn.toHtml();

        fn.eventClick();
    };

    // Defaults
    fn.defaults = function() {
        return {
            replacement: 'tsr'
        };
    };

    fn.toHtml = function() {
        var div = document.createElement('div');

        for(i=0; i<fn.elements.length; i++) {
            var element = fn.elements[i];
            var rating = element.dataset.rating;

            for(j=0; j<5; j++) {
                element.appendChild(div.cloneNode(true));
            }

            fn.elementToHtml(element, rating);
        }
    };

    // elementToHtml
    fn.elementToHtml = function(element, rating) {
        if(rating != 0) {
            var child = element.querySelector('.rating >div:nth-child(' + rating + ')');
            child.classList.add('active');
        }
        element.dataset.rating = rating;
    };

    fn.eventClick = function() {
        var elements = document.querySelectorAll(fn.options.selector + ' >div');

        for(i=0; i<elements.length; i++) {
            var elementStar = elements[i];
            var parent = elementStar.parentNode;

            if(parent.dataset.ratingEnabled == 'false') continue;

            elementStar.addEventListener('click', fn.setRating.bind(null, elementStar), false);
        }
    };

    fn.setRating = function(elementStar, i) {
        var element = elementStar.parentNode;
        var index = Array.from(element.children).indexOf(elementStar);
        var new_rating = index + 1;
        var old_rating = element.dataset.rating;

        fn.clear(element);

        if(new_rating != old_rating) {
            fn.elementToHtml(element, new_rating);
        }
    };

    // Clear element
    fn.clearElement = function(element) {
        var elementStars = element.querySelectorAll('*>div');
        for(i=0; i<elementStars.length; i++) {
            elementStars[i].className = '';
        }

        fn.elementToHtml(element, 0);
    };

    // Clear elements
    fn.clearElements = function(elements) {
        for(i=0; i<elements.length; i++) {
            fn.clearElement(elements[i]);
        }
    };

    // Clear
    fn.clear = function(data) {
        if(data.length > 0) 
            fn.clearElements(data);
        else
            fn.clearElement(data);
    };

    return fn;
})();