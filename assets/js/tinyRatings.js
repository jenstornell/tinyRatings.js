var tinyRatings = (function () {
    var fn = {};
    var o = {};

    fn.init = function(options) {
        o = Object.assign({}, fn.defaults(), options);

        document.addEventListener("DOMContentLoaded", function(event) {
            fn.createAll();
            if(o.lock) return;
            fn.events();
        });
    };

    // Default options
    fn.defaults = function() {
        return {
            prefix: 'tr',
            stars: 5,
            lock: false
        };
    };

    // Create all elements
    fn.createAll = function() {
        elementRatings = document.querySelectorAll(o.prefix + '-rating');

        elementRatings.forEach((element) => {
            let rating = element.getAttribute('value');
            element.setAttribute('lock', o.lock);
            fn.create(element);
            fn.set(element, rating);
        });
    };

    // Create single element
    fn.create = function(element) {
        let wrap = document.createElement(o.prefix + '-wrap');
        element.appendChild(wrap);

        var wrapper = element.querySelector(o.prefix + '-wrap');

        for(let i=0; i<o.stars; i++) {
            let star = document.createElement("div");
            wrapper.appendChild(star);
        }
    };

    // Events - Click
    fn.events = function() {
        elementStars = document.querySelectorAll(o.prefix + '-rating ' + o.prefix + '-wrap > div');

        elementStars.forEach((star) => {
            star.addEventListener('click', (event) => {
                var element = event.target.parentNode.parentNode;
                var rating = fn.index(event.target) + 1;

                fn.set(element, rating, true);
                o.callback(element, rating);
            });
        });
    };

    // Set single rating
    fn.set = function(element, rating, clicked = false) {
        let stars = element.querySelectorAll(o.prefix + '-wrap > div');
        var old_rating = element.getAttribute('value');

        rating = (clicked && old_rating == rating) ? 0 : rating;
        element.setAttribute('value', rating);

        for(i=0; i<stars.length; i++) {
            let index = i+1;

            if(index == rating) {
                stars[i].dataset.ratingActive = '';
            } else {
                delete stars[i].dataset.ratingActive;
            }
        }
    };

    // Helper clear
    fn.clear = function(element) {
        fn.set(element, 0);
    };

    // Index
    fn.index = function(element) {
        return Array.from(element.parentNode.children).indexOf(element);
    };

    return fn;
})();