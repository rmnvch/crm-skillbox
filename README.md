# JS basics SKILLBOX course final project
App link: https://rmnvch.github.io/crm-skillbox/
<br> 
This project is an implementation of a basic CRUD App which allows user to maintain clients database by adding, updatind and deleting items from database. (Please note: this App has backend part
which was not originally developed by me as it was provided by school and it was slightly modified by me in order to make deploy on Heroku. 
<br>
Key features:
<ol>
<li>
  The App allows to read, create, update and delete data from database.
</li> 
<li>
  The App allows to add up to 10 different contact fields for each item in database. Contact options are predifined as select list.
</li> 
<li>
  The App provides basic validation on the client side for creating new client (only russian alphabet is allowed for name fields, test for "@" for email, adding capital first letter to name fields on "blur" event)
</li>
<li>
  Search through database is available. It allows to find any matches for particular filled in request including search through contact info. There is a predifined time gap for 3 seconds to start search once user ends typing the request 
</li>
<li>
  Header cells of the table are clickable and allow to sort stored data according to its textcontent. The first click is for ascending sorting and the second one is for asdending.The third click resets sort to default 
  which is descending sorting on id
</li>
<br> 
Additional UI features:
<ul>
<li>
  By default it's shown 4 contact options on the table for each client and a clickable indicator of the rest options. Which shows all contact info on click. And hides it back on the click on the any other place of the App.
</li>
<li>
  Contact information is displayed in tooltip on hover event 
</li>
<li>
  There is a loader indicator to allow to fetch data from API.   
</li>
</ul>
<br> 
Used technologies:
<br>1. Vanilla JavaScript.
<br>2. HTML / CSS.
<br>3. Server part deployed on Heroku
<br>4. App deployed on GitHub pages
