/** Created by **

Author : Soufiane boukdir 
Website : http://www.bouksou.com

**/

(function($){
  var id = 1;

  $.extend({
    notifier: function(options){
      var defaults = {
        "type": "error",
        "title": "Titre d'exemple",
        "text": "Ceci est un exemple",
        "positionY": "bottom",
        "positionX": "right",
        "delay": 4000,
        "fadeOutdelay": 4000,
        "number" : 5,
        "animationIn" : 'shake',
        "animationIn_duration": 'slow',
        "animationOut" : 'drop',
        "animationOut_duration" : 'slow'
      }
      var positions;
      var parameters = $.extend(defaults,options);

      if(parameters.positionY=='top' && parameters.positionX=='right'){
        positions = 'top:17px;right:10px';
        pos = 'tr';
      }
      else if(parameters.positionY=='top' && parameters.positionX=='left'){
        positions = 'top:17px;left:10px';
        pos = 'tl';
      }
      else if(parameters.positionY=='bottom' && parameters.positionX=='right'){
        positions = 'bottom:10px;right:10px';
        pos = 'br';
      }
      else if(parameters.positionY=='bottom' && parameters.positionX=='left'){
        positions = 'bottom:10px;left:10px';
        pos = 'bl';
      }


      if(!$('#notifier').length>0 || $('#notifier').attr('class') != parameters.positionY.charAt(0)+parameters.positionX.charAt(0)){
        $('#notifier').remove();
        $('body').append('<ul id="notifier" class="'+ pos +'" style="'+ positions +'">');
      }

      if($('.notif').length>parameters.number){
        $('.notif').first().remove();  
      }

      $('#notifier').append('<li id="box'+ id +'" class="notif '+ parameters.type +'"><div class="icon"></div><div class="text"><h5>'+ parameters.title.substring(0,30) +'</h5><p>'+ parameters.text.substring(0,100) +'...</p></div><div class="close" data-id="'+ id +'"></div></li>');
      $('#box'+id).css('margin-bottom','15px').effect(parameters.animationIn,parameters.animationIn_duration).delay(parameters.delay).effect(parameters.animationOut,parameters.animationOut_duration, function() {
        this.remove();
      });

      $('.notif .close').click(function() {
        var id = $(this).data('id');
        $('#box'+id).remove();
      });
        
      id++;
    }
  });

})(jQuery);