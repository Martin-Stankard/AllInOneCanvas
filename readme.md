From docker compose up, in this directory
I want two services

Frontend

serves a simple basic htmlpage with a css file and a js file, on localhost port 8087
There is only one tag on the page, a canvas tag
The canvas tag always fills the browser window, but not too much to make the scrollbars appear
There is a button that changes the back ground of the canvas to a random color

backend 

backend streams the system time, as a string, to the html page via a simple node.js server every second and logs this action

the frontend inserts each received system time string to the canvas and logs this action