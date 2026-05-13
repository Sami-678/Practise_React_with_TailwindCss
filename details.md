 
 ------------Props in react , also tailwindcss---------------------

. if you want to know how to search the command of creating project on vite 
----------------
 search  : vite react 
----------------

**************TailwindCss*****************
. search : tailwindcss.com
. css framework 
. getstarted > framework guidelines > using vite project 

. to install the tailwindcss in your project you just need to run these commands :
--------------------
- npm create vite@latest my-project
- cd my-project
- npm install tailwindcss @tailwindcss/vite
--------------------------
*** add these in your vite.configuration.js file :
------------------
- import tailwindcss from '@tailwindcss/vite'
-----------------
. inside plugins :
-------------
tailwindcss()
------------
--------------------

. if you want to check either tailwind is working then you have to type these classes as h1 attributes 
------------------
text-4xl bg-black text-white text-center p-5
. bg-black : for background black , 
. text-white : for the text color = white 
. text-center : use as text-align center 
. p-5 : padding  (in tailwind 5 means 20px 0r 1.25rem )
. font-bold : (font-weight to 700)
-----------------

. for tailwind suggestion install 
------------
intelisense 
-----------


---------------props---------------
. here comes the props :
. props :
        1. make our components reuseable 
        2. according to react we segregate the components 
           on the basis of what they work 
         

-------------creating new component ------------------

. we have to create a new file (component) , so that we can gave its <xyz/> component in the app.jsx file 

. now we have to type 
--------------
import Cards from './cards'
--------------

. if we have this scenario , as we can upload more than one time the <card/> components , so there are also text repeatation 

. so for that we have to make these properties dynamic 
as 
.first we have to write the username inside the card({}) , then we have to and also write {username } at the h1 text i.e at Delba

. and add inside the card component in app.jsx as 
-------------
<!-- <card username={"John"}/> -->
------------ 
 we can also change all button and also description 