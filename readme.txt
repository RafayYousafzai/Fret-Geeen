Install Sass globally with npm 

If you already have Node.js:
	npm install -g sass

Verify:
	sass --version

Then your command works:
	sass --watch scss/main.scss:css/main.css

OR

If Node.js is installed but you don’t want global installs:
	npx sass --watch scss/main.scss:css/main.css