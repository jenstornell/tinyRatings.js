<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title>Tiny Star Ratings</title>
  
  <link rel="stylesheet" href="assets/css/dist/style.css?t=<?= time(); ?>">
</head>
<body>

<t-rating value="0"></t-rating>

<br>

<t-rating value="4"></t-rating>

<script src="assets/js/tinyRatings.js?t=<?= time(); ?>"></script>

<script>
    tinyRatings.init({
        callback: function() {
            console.log('test');
        }
    });

    //var el = document.querySelector('t-rating');
    //tinyRatings.clear(el);
</script>

</body>
</html>