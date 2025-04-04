From docker compose up, in this directory
I want three services

Frontend-Out

localhost 8087
serves a simple basic htmlpage with a css file and a js file, on localhost port 8087
There is only one tag on the page, a canvas tag
The canvas tag always fills the browser window, but not too much to make the scrollbars appear
there is a yellow circle in the that is clickable as a hotlink to google.com, and on mouse over the cursor acts like a normal link

There is a button that changes the color and location of the circle to a random color
There is another button that changes the background color of the canvas.
There is another button that logs the canvas tag's complete state

backend 
port 3017
backend streams the system time, as a string, to the html page via a simple node.js server every second and logs this action

the frontend inserts each received system time string to the canvas and logs this action

backend-console 
localhost 8088

backend-console is another simple hosted webpages that has a text input field and a send button that http sends a message to the backend. The message is logged in backend-console and the backend