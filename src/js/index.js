define(['static/template/add'], function (addTpl) {
    var app = {
        init: function () {
            console.log("Hello World");
            this.addInfo();
        },
        addInfo:function () {
            //触发事件
            $('#addBtn').click(function () {
                // do something...
                $("#test").empty().html(addTpl());
            });
        },
    };

    app.init();
});