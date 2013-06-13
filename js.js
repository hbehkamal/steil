(function(){
  $(function(){
    var
      curslide = 0,
      a = $('#a'),
      b = $('#b'),
      c = $('#c'),
      d = $('#d'),
      e = $('#e'),
      pic1 = $('#pic1'),
      pic2 = $('#pic2'),
      pic3 = $('#pic3'),
      pic4 = $('#pic4'),
      pic5 = $('#pic5'),
      logo = $('.logo figure'),
      slides=$('.slide div'),
      $this = $(this);
    logo.click(function(){
      this.eq(curslide).animate(function(){
        $this.animate({opacity:'0'},500,function(){
          $this.css({
            display : 'none'
          });
        });
      },600);
    });
  });
})();
