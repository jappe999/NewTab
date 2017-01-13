# NewTab
An newtab page with a simple python response server

## Start server
If you want the searchbar of your browser to be clean, you can run the following code in the working directory. You have to install Python 3 though.
```
sudo python3 server.py
```
If you choose not to, it's no problem. All paths in the code are relative.

## How to edit the page?
The page itself is easily edited in the [setting.json](js/settings.json) file.

### User object
In here only the users' name is set and a background if that's wanted.

If the users' name is not set, there will be a different message:
```
Hello there!
```

### Searchengines object
The Searchengines object is the content of the dropdown menu.

These are the searchengines you can do an instant seach on.

### Categories object
The Categories object is a tiny bit different.
This one has an (optional) icon from FontAwesome. You only have to set the icons' CSS class.

There is the title of the category.

And last but not least there is the list with URLs within the category.
Each list item has an url and text option.
