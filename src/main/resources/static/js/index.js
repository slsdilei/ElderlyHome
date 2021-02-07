//监听窗口的大小
$(function () {
    $(window).on("resize", function () {
        //获取窗口的宽度
        var clientW = $(window).width();
        //console.log(clientW);

        //设置临界值
        let isShowBigImage = clientW >= 800;

        //获取所有的item
        let $allItems = $("#sc_carouse .item");
        //console.log($allItems);

        //遍历所有的item
        $allItems.each(function (index, item) {
            //根据窗口的宽度，选取不同尺寸的图片
            var src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img");
            var imgUrl = 'url("' + src + '")';

            //设置背景
            $(item).css({
                backgroundImage: imgUrl
            });

            //设置img标签
            if(!isShowBigImage){
                var $img = "<img src='" + src + "'>";
                $(item).empty().append($img);
            }else{
                $(item).empty();
            }
        });
    });
    $(window).trigger("resize");

    //尾部部分：工具提示
    $('[data-toggle="tooltip"]').tooltip();

    //选项卡的动态处理
    $(window).on("resize",function () {
        var $ul = $("#sc_product .nav");
        var $allLis = $("[role='presentation']", $ul);
        console.log($allLis);
    });
});