(function(){
    var equalCols = function(){
        var $cols = $('.col'),
            colCount = $cols.length;

        return {
            setup: function(){
                var height = 0, tempHeight = 0;
                for (var i = 0; i < colCount; i++) {
                    tempHeight = $cols.eq(i).height();

                    if(tempHeight > height){
                        height = tempHeight;
                    }
                }
                 $cols.css('height', height);
            },
            reset: function(){
                $cols.css('height', 'auto');
            }
        };
    }();

    enquire.register("(max-width: 979px)", {
        match : function() {
            equalCols.reset();
        },
    });

    enquire.register("(min-width: 980px)", {
        match : function() {
            equalCols.setup();
        },
    });

    ssm.ready();
}());