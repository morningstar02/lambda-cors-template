const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const querystring = require('querystring');

const app = express();
app.use(cors());
const router = express.Router()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


router.get('/', function (req, res) {
    let test = {};
    res.json(test);
});


router.get('/foo', async function (req, res) {
  let url = req.query.url;
  let width = req.query.width;
  let height = req.query.height;

  res.json({url: url });
});

router.options('/foo', cors())
router.post('/foo', cors(), async function (req, res) {
  let url = req.body.url;
  let width = req.body.width;
  let height = req.body.height;

  res.json({url: url });
});


app.use('/', router)
module.exports = app