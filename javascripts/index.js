var checkZipcode = function(zipcode){
  var zipRegex = /^\d{5}$/;
  if (!zipRegex.test(zipcode)){
    $('.error').show();
  }else{
    _gaq.push(['_trackEvent', 'Landingpage', 'PLZ', zipcode]);
    location.href = '/suche?plz='+zipcode;
  }
}

var waitForInput = function(){
  var zipcode;

  $('.search-form').submit(function(ev){
    ev.preventDefault();
    $('.error').hide();
    zipcode = $(this).find('input[name=zipcode]').val();
    checkZipcode(zipcode);
  });

}

$(document).ready(waitForInput);
