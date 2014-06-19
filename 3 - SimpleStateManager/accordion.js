(function(){
   var $items = $('.items');

    $('body').on('click', '.mobile-accordion h2', function(){
        var $this = $(this), $next = $this.next();

        if($this.hasClass('active')){
            $this.next().hide();
            $this.removeClass('active');
        }
        else{
            $('h2.active').removeClass('active').next().hide();
            $this.next().show();
            $this.addClass('active');
        }
    });

    ssm.addState({
        id: 'mobile',
        maxWidth: 979,
        onEnter: function(){
            $items.addClass('mobile-accordion');
            $items.find('h2').removeClass('active').next().hide();
        },
        onLeave: function(){
            $items.removeClass('mobile-accordion');
            $items.find('h2').next().show();
        }
    });

    ssm.ready();
}());