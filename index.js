require("dotenv").config();
const cors = require("cors");

var Twit = require('twit')

var express = require('express')
var app = express()
app.use(cors());

var T = new Twit({
    consumer_key:         process.env.CONSUMER_KEY,
    consumer_secret:      process.env.CONSUMER_SECRET,
    access_token:         process.env.ACCESS_TOKEN,
    access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

function randomDate() {
    var endDate = new Date();
    var startDate =  new Date(endDate.getTime() - (24*60*60*1000*7));
    var generatedDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    var genYear = generatedDate.getFullYear();
    var genMonth = (generatedDate.getMonth() + 1).toString();
    var genDay = (generatedDate.getDate()).toString();
    var fixedMonth = function() {
        if (genMonth.length < 2) {
            return `0${genMonth}`;
        } else {
            return genMonth;
        }
    }
    var fixedDay = function() {
        if (genDay.length < 2) {
            return `0${genDay}`;
        } else {
            return genDay;
        }
    }
    return `${genYear}-${fixedMonth()}-${fixedDay()}`;
}

app.get('/amyklobuchar', function (req, res) {
    T.get('search/tweets', { q: `from:amyklobuchar until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/AndrewYang', function (req, res) {
    T.get('search/tweets', { q: `from:AndrewYang until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/BernieSanders', function (req, res) {
    T.get('search/tweets', { q: `from:BernieSanders until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/BetoORourke', function (req, res) {
    T.get('search/tweets', { q: `from:BetoORourke until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/CoryBooker', function (req, res) {
    T.get('search/tweets', { q: `from:CoryBooker until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/ewarren', function (req, res) {
    T.get('search/tweets', { q: `from:ewarren until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/JoeBiden', function (req, res) {
    T.get('search/tweets', { q: `from:JoeBiden until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/JoeSestak', function (req, res) {
    T.get('search/tweets', { q: `from:JoeSestak until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/JohnDelaney', function (req, res) {
    T.get('search/tweets', { q: `from:JohnDelaney until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/JulianCastro', function (req, res) {
    T.get('search/tweets', { q: `from:JulianCastro until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/KamalaHarris', function (req, res) {
    T.get('search/tweets', { q: `from:KamalaHarris until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/marwilliamson', function (req, res) {
    T.get('search/tweets', { q: `from:marwilliamson until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/MichaelBennet', function (req, res) {
    T.get('search/tweets', { q: `from:MichaelBennet until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/PeteButtigieg', function (req, res) {
    T.get('search/tweets', { q: `from:PeteButtigieg until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/GovernorBullock', function (req, res) {
    T.get('search/tweets', { q: `from:GovernorBullock until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/TimRyan', function (req, res) {
    T.get('search/tweets', { q: `from:TimRyan until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/TomSteyer', function (req, res) {
    T.get('search/tweets', { q: `from:TomSteyer until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/TulsiGabbard', function (req, res) {
    T.get('search/tweets', { q: `from:TulsiGabbard until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/WayneMessam', function (req, res) {
    T.get('search/tweets', { q: `from:WayneMessam until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/GovBillWeld', function (req, res) {
    T.get('search/tweets', { q: `from:GovBillWeld until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/realDonaldTrump', function (req, res) {
    T.get('search/tweets', { q: `from:realDonaldTrump until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/WalshFreedom', function (req, res) {
    T.get('search/tweets', { q: `from:WalshFreedom until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})
app.get('/MarkSanford', function (req, res) {
    T.get('search/tweets', { q: `from:MarkSanford until:${randomDate()} -filter:retweets`, count: 1 }, function(err, data, response) {
        res.send(data)
    })
})

const port = process.env.PORT;
console.log(randomDate());

app.listen(port, () => {
    console.log("I work");
    console.log(port);
});

app.get("/", (res, req) => {
    req.send("Yay!!!")
})