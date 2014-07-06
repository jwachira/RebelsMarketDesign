TO use this repository you need to install serve gem

bundle install

then go console and run $ serve

and open your browser and go to http://localhost:4000

to preview the work on the browser we need to convert .less files to .css

for this you need to install less parser

installing LESS parser

npm install -g less

converting less to css

This will output the compiled CSS to a the file specified

$ lessc styles.less > styles.css
