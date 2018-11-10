var tinystarratings = (function () {
    var fn = {};

    fn.init = function(options) {
        console.log(options);
        fn.options = options;

        fn.toHtml();
    };


    fn.toHtml = function() {
        var elements = document.querySelectorAll(fn.options.selector);
        var temp = document.createElement('div');

        for(i=0; i<elements.length; i++) {
            var element = elements[i];
            var rating = element.dataset.rating;

            for(j=0; j<5; j++) {
                var clone = temp.cloneNode(true);
                element.appendChild(clone);
            }

            var child = element.querySelector('.rating >div:nth-child(' + rating + ')');
            child.classList.add('active');
        }
    };

    return fn;
})();