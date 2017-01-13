$(document).ready(function() {
  var set_user = function(user) {
    // Check if user.name exist
    if (typeof user.name != 'undefined' && user.name != '') {
      var msg = 'Hi, ' + user.name;
      $('#username').text(msg);
    } else {
      $('#username').text('Hello there!');
    }
    // Set background
    if (typeof user.background != 'undefined') {
      $('body').css('background-image','url('+user.background+')');
    }
  },

  set_searchengines = function(se) {
    if (se.list.length != 0 || se.list.length != NULL) {
      // Set default search engine
      $('#se_dropdown').attr('value', se.default);
      $('#se_list').text('');
      for (var i=0;i<se.list.length;i++) {
        var engine = se.list[i];
        // Check if there is an URL and text
        if (
          typeof engine.url != 'undefined' &&
          engine.url != '' &&
          typeof engine.text != 'undefined' &&
          engine.text != ''
        ) {
          var item = '<li class="dropdown_list__item" value="' + engine.url + '">' + engine.text + '</li>';
          $('#se_list').html(
            $('#se_list').html() + item
          );
        }
      }
    } else {
      /*
        Remove the dropdown menu since there are no searchengines
        The element itself is necessary though,
        because it holds a default searchengine value
      */
      $('#se_dropdown').css('display','none');
    }
  },

  set_catergories = function(categories) {
    if (categories.length != 0 || categories.length != NULL) {
      // Empty table
      $('#categories').text('');
      for (var i=0;i<categories.length;i++) {
        // Create new column
        var category = categories[i],
            html     = '<div class="t_col">\
                          <div class="t_row t_head">\
                            <div class="t_icon">\
                              <i class="fa ' + category.icon + '"></i>\
                              <h3 class="t_icon__title">' + category.title + '</h3>\
                            </div>\
                          </div>\
                          <ul class="list" id="' + category.title + '"></ul>\
                        </div>';
        $('#categories').html($('#categories').html() + html);

        for (var j=0;j<category.list_items.length;j++) {
          // Check if there is an URL and text
          var item = category.list_items[j];
          if (
            typeof item.url != 'undefined' &&
            item.url != '' &&
            typeof item.text != 'undefined' &&
            item.text != ''
          ) {
            var row = '<a href="' + item.url + '"><li class="list_item"><span>' + item.text + '</span></li></a>',
                id   = '#' + category.title;
            $(id).html(
              $(id).html() + row
            );
          }
        }
      }
    }
  };

  // Get settings from the page.json file..
  $.getJSON('/js/settings.json',{}, function(page) {
    // Build page
    set_user(page.user);
    set_searchengines(page.searchengines);
    set_catergories(page.categories);
  });
});
