var checkZipcode = function(zipcode){
  var zipRegex = /^\d{5}$/;
    if (!zipRegex.test(zipcode)){
      $('.error').show();
    }else{
      saveZipcode(zipcode);
      _gaq.push(['_trackEvent', 'Search Terms', 'PLZ', zipcode]);
      location.href = '/suche';
    }
}

var waitForInput = function(){
  var zipcode;

  $('.search-form').submit(function(ev){
    ev.preventDefault();
    $('.error').hide();
    zipcode = $(this).find('input.search-form-input').val();
    checkZipcode(zipcode);
  });

}

var ga = function(name) {
  _gaq.push(['_trackEvent', 'Search Results', name , zipcode]);
}

var saveZipcode = function(item) {
    var storage = window.localStorage;

    try {
      storage.setItem('zipcode', item);
    } 
    catch (error) {
      document.cookie='zipcode='+item;
    }
}

$(document).ready(waitForInput);
