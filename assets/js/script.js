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

        let wrap = document.createElement("div");
        wrap.dataset.ratingWrap = '';
        element.appendChild(wrap);

        let wrapper = element.querySelector('[data-rating-wrap]');

        for(let i=0; i<5; i++) {
            let star = document.createElement("div");
            star.dataset.ratingStar = rating > i ? 'full' : 'empty';
            wrapper.appendChild(star);
        }
    };

    // EVENT - Hover
   
    fn.eventHover = function() {
        for(let i=0; i<fn.elements.length; i++) {
            var element = fn.elements[i];

            fn.eventMouseover(element);
            fn.eventMouseleave(element);
        } 
    };

    // EVENT - Mouseleave

    fn.eventMouseleave = function(element) {
        element.querySelector('[data-rating-wrap]').addEventListener('mouseleave', function(event) {
            var element = event.target;

            //fn.convertRating(element, element.dataset.rating);
            //var star = element.children.firstChild.children.firstChild;
            //console.log(star);
            //fn.setStars(star, 1);
        });
    };

    // EVENT - Mouseover

    fn.eventMouseover = function(element) {
        element.querySelector('[data-rating-wrap]').addEventListener('mouseover', function(event, index) {
            fn.setStars(event.target);
        });
    };

    // Set stars

    fn.setStars = function(element) {
        var children = element.parentNode.children;
        var index = fn.index(element);

        for(let i=0; i<5; i++) {
            var dataset = children[i].dataset;
            dataset.ratingStar = (i <= index) ? 'full' : 'empty';
        }
    };

    // EVENT - Click

    fn.eventClick = function() {
        //var elements = document.querySelectorAll(o.ratingSelector);

        for(let i=0; i<fn.elements.length; i++) {
            var element = fn.elements[i];

            element.querySelector('[data-rating-wrap]').addEventListener('mousedown', function(event) {
                var star = event.target;
                var parent = star.parentNode.parentNode;

                parent.dataset.rating = fn.index(star) + 1;

                fn.setStars(star);
            });
        }
    };

    // Index
    fn.index = function(element) {
        var children = element.parentNode.children;
        return Array.from(children).indexOf(element);
    };

    return fn;
})();