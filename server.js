var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
 'article-one':{
    title:'article-one',
    heading:'article',
    date:'september 5',
    content:`
    <p>
                    this is the content.this is the content.this is the contentthis is the content
                    this is the content.this is the content.this is the content.this is the content.
                    this is the content.this is the content.this is the contentthis is the content
                    this is the content.this is the contentthis is the contentthis is the content
                </p>
                <p>
                    this is the contentthis is the contentthis is the contentthis is the content
                    this is the contentthis is the contentthis is the content
                    this is the contentthis is the contentthis is the contentthis is the content
                </p>
                 <p>
                    this is the contentthis is the contentthis is the contentthis is the content
                    this is the contentthis is the contentthis is the content
                    this is the contentthis is the contentthis is the contentthis is the content
                </p>`
},
'article-two':{
    title:'article-two'
    heading:'article',
    date:'september 9',
    content:`
    <p>
                    this is the content.this is the content.this is the contentthis is the content
                    this is the content.this is the content.this is the content.this is the content.
                    this is the content.this is the content.this is the contentthis is the content
                    this is the content.this is the contentthis is the contentthis is the content
                </p>
                <p>
                    this is the contentthis is the contentthis is the contentthis is the content
                    this is the contentthis is the contentthis is the content
                    this is the contentthis is the contentthis is the contentthis is the content
                </p>
                 <p>
                    this is the contentthis is the contentthis is the contentthis is the content
                    this is the contentthis is the contentthis is the content
                    this is the contentthis is the contentthis is the contentthis is the content
                </p>`},
'article-three':{ title:'article-three'
    heading:'article',
    date:'september 4',
    content:`
    <p>
                    this is the content.this is the content.this is the contentthis is the content
                    this is the content.this is the content.this is the content.this is the content.
                    this is the content.this is the content.this is the contentthis is the content
                    this is the content.this is the contentthis is the contentthis is the content
                </p>
                <p>
                    this is the contentthis is the contentthis is the contentthis is the content
                    this is the contentthis is the contentthis is the content
                    this is the contentthis is the contentthis is the contentthis is the content
                </p>
                 <p>
                    this is the contentthis is second the contentthis is the contentthis is the content
                    this is the contentthis is the contentthis is the content
                    this is the contentthis is the contentthis is the contentthis is the content
                </p>`}
};
function createTemplate (data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=`
<html>
    <head>
        <title>${title}</title>
        <meta name='viexport' content='width=device=width, initial-scale=1'/>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
        <body>
        <div class='container'>
        <div>
            <a href="/">home</a>
        </div>
        <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date} 
            </div>
            <div>
                ${content}
            </div>
        </div>
        </body>
</html>`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function(req,res) {
    var articleName=req.parans.articleName;
  res.send(createTemplate(articles[articleName])); 
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
