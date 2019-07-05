http://wakaworkshops.surge.sh/workshop/express-webpage/slides/0

start server: node server.js

Question 1
Open your browser and go to http://localhost:4000/static/index.html. What do you see? Which file in the project contains the same information as you see on screen?
The file that is located in /public/index.html
Question 2
Open another terminal and try to run the program from that terminal. What error message do you see? What would you google to find out more about this error message?
node server.js
Error: listen EADDRINUSE: address already in use :::4000
Question 3
Open your browser and go to http://localhost:4000/count. What do you see? What happens when you reload the page?
The following text appears: “This page has been visited 5 times”, where the number increments in every reload.

Question 4
Kill your webserver (control c) then start it again. What happens when you go back to http://localhost:4000/count ? Did the count reset?
Yes, the counter restarts to 1.

Summary:
Install node.js and npm, check if they are already installed by node -v and npm -v.
Go to the project folder 2000-express-webpage and run npm install, it will read the json file and install the dependencies, in this case the express, or you can install it npm install express.

server.js
let express = require(‘express’)
let app = express()
let count = 0
app.get(‘/count’, (req, res) => {
console.log(“I received a request to /count”, count)
count ++
res.send(“<h1>This page has been visited ” + count + “ times </h1>”)
})
app.use(‘/static’, express.static(\_\_dirname + ‘/public’))

app.listen(4000, () => { console.log(“server started”) })

/public/
index.html <head><link href=”/static/style.css” rel=”stylesheet”>
style.css

Instructions
Answer these questions about the previous slide
Question 1
Which modules are used in this project?
express
Question 2
How do you import a module into your project?
let express = require(‘express’)
Question 3
Is the contents of the \_\_dirname variable different for every file?
Yes, depends where the file .js is running, it gives the path
Instructions
Exercises
Question 1
• Summarize the workshop in a document
• Create the directories ~/decode/my-workshops and ~/decode/my-workshops/express-webpage
• Copy the package.json in this new express-webpage directory
• Run npm install in the new directory
• Recreate the project from your summary. If your summary is missing information, go back to these slides to complete the missing information in your summary
Question 2
Add an HTML file in the public folder and use your browser to view it.
Question 3
The first time you visit the /count endpoint, it says you visit "1 times". Fix this grammatical mistake.
Question 4
Add an endpoint to reset the counter
Question 5
Add an endpoint to multiply the counter by 2. The response must contain HTML to display the endpoint
