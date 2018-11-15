<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title>Tiny Star Ratings</title>
  
  <link rel="stylesheet" href="assets/css/dist/style.css?t=<?= time(); ?>">
</head>
<body>

<div class="rating" data-rating="3" data-rating-enabled="false"></div>

<br>

<input-rating data-rating="4"></input-rating>

<script src="assets/js/script.js?t=<?= time(); ?>"></script>

<script>
document.addEventListener("DOMContentLoaded", function(event) {
    tinyRatings.init({
        'ratingSelector': '[data-rating]'
    });

    var element = document.querySelector('.haha');
    
    tinyRatings.set(element, 4);

    var element = document.querySelectorAll('.haha');

    tinyRatings.clear(element);
});
</script>

</body>
</html>