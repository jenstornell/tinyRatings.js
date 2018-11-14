<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title>Tiny Star Ratings</title>
  
  <link rel="stylesheet" href="assets/css/dist/style.css?t=<?= time(); ?>">
</head>
<body>

<div>asdada</div>

<div class="rating" data-rating="3" data-rating-enabled="false"></div>

<br>

<div class="rating haha" data-rating="4"></div>

<input-stars data-is-rating="4"></input-stars>

<script src="assets/js/script.js?t=<?= time(); ?>"></script>

<script>
document.addEventListener("DOMContentLoaded", function(event) {
    tinystarratings.init({
        'selector': '.rating'
    });

    var element = document.querySelector('.haha');
    
    tinystarratings.elementToHtml(element, 4);

    var element = document.querySelectorAll('.haha');

    tinystarratings.clear(element);
});
</script>

</body>
</html>