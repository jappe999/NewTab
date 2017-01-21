# NewTab
An newtab page with a simple python response server

## First setup
Place the html folder and the server.py file in the folder _/var/www_
Open you browsers' settings and change the default newtab page.
### For Firefox users
Install this [addon](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/) and set the default page to localhost (or if you don't setup the server.py just the path to the index.html file).
### For Chrome users
Install this [addon](https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna) and set the default page to localhost (or if you don't setup the server.py just the path to the index.html file).

## Start server
If you want the searchbar of your browser to be clean, you can run the following code in the working directory.<br/>
You have to install Python 3 though.
```
sudo python3 server.py
```
If you choose not to, it's no problem. All paths in the code are relative.

## How to edit the page?
The page itself is easily edited in the [setting.json](html/js/settings.json) file.

### User object
In here only the users' name is set and a background if that's wanted.<br/>
If the users' name is not set, there will be a different message:
```
Hello there!
```

### Searchengines object
The Searchengines object is the content of the dropdown menu.<br/>
These are the searchengines you can do an instant seach on.

### Categories object
The Categories object is a tiny bit different.<br/>
This one has an (optional) icon from FontAwesome. You only have to set the icons' CSS class.<br/>
There is the title of the category.<br/>
And last but not least there is the list with URLs within the category.
Each list item has an url and text option.
