<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title>Tiny Star Ratings</title>
  
  <link rel="stylesheet" href="assets/css/dist/style.css?t=<?= time(); ?>">
</head>
<body>

<tr-rating value="0"></tr-rating>

<br>

<tr-rating value="4"></tr-rating>

<script src="assets/js/tinyRatings.js?t=<?= time(); ?>"></script>

<script>
    tinyRatings.init({
        stars: 8,
        lock: true,
        callback: function() {
            console.log('test');
        }
    });

    //var el = document.querySelector('t-rating');
    //tinyRatings.clear(el);
</script>

</body>
</html>