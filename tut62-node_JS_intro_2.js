// COMPARED TO PREVIOUS CODE ONLY TWO STATEMENTS ARE REPLACED, MARKED AS COMMENTS BELOW

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');
//   res.end('hello world I am Jatin');
res.end(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Navigation</title>
    
    <style>

        *
        {
            box-sizing: border-box;
        }

        body
        {
            background-color: black;
        }

        .NavmenuHead
        {
            padding: 0px;margin: 0px;
        }

        .naviBar
        {
            padding: 0px;
            margin: 3% 5%;
            height: 32px;
            border: 1px solid white;
        }

        .buttons{padding: 0px;margin: 0px;}
        
        .subbuttons
        {
            padding: 5px 10px;
            margin: 0px;
            text-align: center;
            float: left;
            height: 30px;
            border: 1px solid white;
            color: white;
            text-decoration: none;
            background-color: black;
            cursor: pointer;
            width: 85px;
        }

        

        #navi6
        {
            color: white;
            float: right;
            margin: 4px 10px;
        }

        .subbuttons:hover
        {
            color: blue;
            background-color: white;
        }

    </style>

</head>

<body>
    
    <header class="NavmenuHead">

        <nav class="naviBar">

                <div class="buttons">
                    <button class="subbuttons" id="btn1" onclick="//">
                        Home
                    </button>
                </div>
                
                <div class="buttons">
                    <button class="subbuttons" id="btn2" onclick="//">
                        Services
                    </button>
                </div>
                
                <div class="buttons">
                    <button class="subbuttons" id="btn3" onclick="//">
                        Projects
                    </button>
                </div>
                
                <div class="buttons">
                    <button class="subbuttons" id="btn4" onclick="//">
                        About us
                    </button>
                </div>
                
                <div class="buttons">
                    <button class="subbuttons" id="btn5" onclick="//">
                        Contact us
                    </button>
                </div>

                <div id="navi6">
                    <input type="text" name="search" placeholder="Search this website">
                </div>

        </nav>

    </header>

</body>

</html>
`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});