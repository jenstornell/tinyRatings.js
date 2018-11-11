var tinystarratings = (function () {
    var fn = {};

    fn.init = function(options) {
        console.log(options);
        fn.options = options;

        fn.toHtml();

        fn.eventClick();
    };


    fn.toHtml = function() {
        var elements = document.querySelectorAll(fn.options.selector);
        var temp = document.createElement('div');

        for(i=0; i<elements.length; i++) {
            var element = elements[i];
            var rating = element.dataset.rating;

            for(j=0; j<5; j++) {
                element.appendChild(temp.cloneNode(true));
            }

            var child = element.querySelector('.rating >div:nth-child(' + rating + ')');
            child.classList.add('active');
        }
    };

    fn.eventClick = function() {
        var elements = document.querySelectorAll(fn.options.selector + ' >div');
        for(i=0; i<elements.length; i++) {
            var elementStar = elements[i];
            //console.log(element);
            elementStar.addEventListener('click', fn.setRating.bind(null, elementStar), false);
        }
    };

    fn.setRating = function(elementStar, i) {
        var element = elementStar.parentNode;
        var index = Array.from(element.children).indexOf(elementStar);
        element.dataset.rating = index + 1;

        fn.clear(element);
    };

    // Clear
    fn.clear = function(element) {
        var elementStars = element.querySelectorAll('*>div');
        for(i=0; i<elementStars.length; i++) {
            var elementStar = elementStars[i];
            elementStar.className = '';
        }
    };

    return fn;
})();