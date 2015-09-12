$.getJSON("./like.php?action=get", function (data) {
    $('.like-vote span').html(data.like);
});
$('.like-vote').click(function () {
    $.getJSON("./like.php?action=add", function (data) {
        if (data.success) {
            $('.like-vote span').html(data.like);
            $('.like-title').html('我也喜欢你 (*≧▽≦)');
        }
        else {
            $('.like-title').html('你的爱我已经感受到了~');
        }
    });
});