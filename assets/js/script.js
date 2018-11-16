var tinyRatings = (function () {
    var fn = {};
    var o = {};

    fn.init = function(options) {
        o = Object.assign({}, fn.defaults(), options);
        fn.elements = document.querySelectorAll(o.ratingSelector);

        fn.convertRatings();

        fn.eventClick();
        fn.eventHover();
    };

    // Defaults
    fn.defaults = function() {
        return {
            ratingSelector: '[data-rating]'
        };
    };

    // Convert ratings
    fn.convertRatings = function() {
        for(let i=0; i<fn.elements.length; i++) {
            var element = fn.elements[i];
            var rating = element.dataset.rating;

            fn.convertRating(element, rating, 5);
        }
    };

    // Convert rating
    fn.convertRating = function(element, rating, count) {
        while (element.firstChild) {
            element.firstChild.remove();
        }

        for(let i=0; i<count; i++) {
            let star = document.createElement("div");
            if(rating > i) {
                star.dataset.ratingStar = 'full';
            } else {
                star.dataset.ratingStar = 'empty';
            }

            element.appendChild(star);
        }
    };

    // elementToHtml
    /*fn.elementToHtml = function(element, rating) {
        if(rating != 0) {
            var child = element.querySelector('.rating >div:nth-child(' + rating + ')');
            child.classList.add('active');
        }
        element.dataset.rating = rating;
    };*/

    fn.eventHover = function() {
        for(i=0; i<fn.elements.length; i++) {
            var element = fn.elements[i];
            element.addEventListener('mouseover', function(event, index) {
                console.log(event.target);

                var element = event.target;

                element.dataset.ratingStar = 'full';

                while(element) {
                    element = element.previousElementSibling;
                    if(!element) break;
                    element.dataset.ratingStar = 'full';
                }

                var element = event.target;

                while(element) {
                    element = element.nextElementSibling;
                    if(!element) break;
                    element.dataset.ratingStar = 'empty';
                }

                //https://gomakethings.com/how-to-get-all-sibling-elements-until-a-match-is-found-with-vanilla-javascript/

                fn.setStars.bind(element);
            });
            element.addEventListener('mouseleave', function(event) {
                console.log(event);
                fn.setStars.bind(element);
                fn.convertRating(element, 1, 5);
            });
        } 
    };

    fn.setStars = function(element) {
        console.log(element);
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

    /*fn.setRating = function(elementStar, i) {
        var element = elementStar.parentNode;
        var index = Array.from(element.children).indexOf(elementStar);
        var new_rating = index + 1;
        var old_rating = element.dataset.rating;

        fn.clear(element);

        if(new_rating != old_rating) {
            fn.elementToHtml(element, new_rating);
        }
    };*/

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