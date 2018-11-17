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

            fn.convertRating(element, rating);
        }
    };

    // Convert rating
    fn.convertRating = function(element, rating) {
        while (element.firstChild) {
            element.firstChild.remove();
        }

        for(let i=0; i<5; i++) {
            let star = document.createElement("div");
            if(rating > i) {
                star.dataset.ratingStar = 'full';
            } else {
                star.dataset.ratingStar = 'empty';
            }

            element.appendChild(star);
        }
    };

    // EVENT - Hover
1   
    fn.eventHover = function() {
        for(let i=0; i<fn.elements.length; i++) {
            var element = fn.elements[i];

            fn.eventMouseover(element);
            fn.eventMouseleave(element);
        } 
    };

    // EVENT - Mouseleave

    fn.eventMouseleave = function(element) {
        element.addEventListener('mouseleave', function(event) {
            var element = event.target;

            fn.convertRating(element, element.dataset.rating);
        });
    };

    // EVENT - Mouseover

    fn.eventMouseover = function(element) {
        element.addEventListener('mouseover', function(event, index) {
            var element = event.target;
            var children = element.parentNode.children;
            var index = Array.from(children).indexOf(element);

            for(let i=0; i<5; i++) {
                var dataset = children[i].dataset;
                if(i <= index) {
                    dataset.ratingStar = 'full';
                } else {
                    dataset.ratingStar = 'empty';
                }
            }
        });
    };

    // EVENT - Click

    fn.eventClick = function() {
        var elements = document.querySelectorAll(o.ratingSelector);

        for(let i=0; i<elements.length; i++) {
            var element = elements[i];

            console.log(element);

            element.addEventListener('click', function(event) {
                var star = event.target;
                var parent = event.target.parentNode;

                var index = fn.index(star);
                console.log(index);

                parent.dataset.rating = index + 1;

                fn.convertRating(parent, index);
                /*console.log(event.target);
                parent.dataset.rating = index;
                fn.convertRating(parent, i);*/
            });
        }
    };

    // Index
    fn.index = function(element) {
        var children = element.parentNode.children;
        return Array.from(children).indexOf(element);
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
        for(let i=0; i<elementStars.length; i++) {
            elementStars[i].className = '';
        }

        fn.elementToHtml(element, 0);
    };

    // Clear elements
    fn.clearElements = function(elements) {
        for(let i=0; i<elements.length; i++) {
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