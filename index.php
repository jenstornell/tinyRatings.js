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

<div class="rating" data-rating="4" data-rating-enabled="false"></div>

<template id="rating-template">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</template>

<script src="tinystarratings.js?t=<?= time(); ?>"></script>

<script>
    document.addEventListener("DOMContentLoaded", function(event) {
        tinystarratings.init({
            'selector': '.rating'
        });
});
</script>

</body>
</html>