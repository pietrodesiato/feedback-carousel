Feedback Carousel
=====================

This is a carousel that visualises comments and rating collected in a Google Sheet.

## Requirements

* Google Sheet
* [Owl Carousel](http://owlgraphic.com/owlcarousel/)

## Getting started

* Clone this repo.


* Create a new Google Sheet. 
This will contain the comments and the rating for you service.
Please note: I used a Google Sheet but other sources can be used to feed the carousel.

* Create a new Google App Script 
To do so, you'll have to open the Google Sheet, go into the 'Tools' menu and then select 'Script Editor'
Just create an empty project and give it a name

* Copy the code.js, index.html and style_css.html (yes, the filename is correct) in your project 

* Get the Owl carousel script and add owl.carousel, owl.carousel.css and owl.transitions.css to the project. 
Name them in this way: owl_js.html, owl_css.html and owl_transition.html
Make sure the the JS files are contained in a <script></script> tag; make sure the CSS file are contained in a <style></style> tag.
Check style_css.html for an example.

* Publish the project as webapp and run it

* All done!