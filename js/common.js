$(document).ready(function () {
    var imageArray = [],
        imageThumbnailsArray = [];

    function preloadInner(imageArray, index) {
        index = index || 0;
        if (imageArray && imageArray.length > index) {
            var img = new Image();
            img.onload = function () {
                preloadInner(imageArray, index + 1);
            };
            img.src = imageArray[index];
        }
    }

    $('img.img-thumbnail').each(function () { imageThumbnailsArray.push($(this).attr('src')); });
    $('a[data-lightbox]').each(function () { imageArray.push($(this).attr('href')); });

    preloadInner(imageArray);
    preloadInner(imageThumbnailsArray);

});
