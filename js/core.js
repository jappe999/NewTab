$(document).ready(function() {
  // Search the given domain with the given query
  $('.search_button').on('click', function(e) {
    e.preventDefault();
    var domain = $('.dropdown').attr('value'), // Get search engine
        query  = $('.search_input').val(), // Get query
        url = domain + query; // Build url
    document.location.replace(url); // And remove localhost from your history
  });

  // Drop the mic..
  $('.dropdown_title').on('click', function(e) {
    e.preventDefault();
    var triggers = '.dropdown_title, .dropdown_list';
    $(triggers).toggleClass('triggered');
  });
  $('.dropdown_list__item').on('click', function() {
    $('.dropdown').attr('value', $(this).attr('value'));
    var triggers = '.dropdown_title, .dropdown_list';
    $(triggers).removeClass('triggered');
  });
})
