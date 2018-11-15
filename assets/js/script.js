var tinyRatings = (function () {
    var fn = {};
    var o = {};

    fn.init = function(options) {
        o = Object.assign({}, fn.defaults(), options);
        fn.elements = document.querySelectorAll(o.ratingSelector);

        fn.convertRatings();

        fn.eventClick();
    };

    // Defaults
    fn.defaults = function() {
        return {
            ratingSelector: '[data-rating]'
        };
    };

    fn.html = function() {
        var html = '';
        for(i=0; i<5; i++) {
            html += "<div></div>";
        }
        return html;
    };

    fn.convertRatings = function() {
        var html = fn.html();
        var htmlElement = new DOMParser().parseFromString(fn.html(), "text/html").body.cloneNode;

        //console.log(htmlStars);

        for(i=0; i<fn.elements.length; i++) {
            var element = fn.elements[i];
            var rating = element.dataset.rating;

            console.log(htmlElement);

            element.appendChild(htmlElement);

            //fn.elementToHtml(element, rating);
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
        var elements = document.querySelectorAll(o.selector + ' >div');

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