const http = require('http');
const fs   = require('fs');

//uncomment to test using max, comment if outside
const MaxApi = require('max-api');
const tonal  = require('tonal');
const Detect = require('tonal-detect');

//adjust for new router
const hostname = '127.0.0.1';
const port     = 3000;

const server = http.createServer( (req, res) => {

    let filePath = __dirname + '/public/index.html';

    console.log(req.url);

    fs.readFile(filePath, (err, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data, 'utf8');
    });
    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    MaxApi.post(`Server running at http://${hostname}:${port}/`);
});

//max handling MIDI
MaxApi.addHandler("detect", (...midiNotes) => {
    const chords = Detect.chord(midiNotes.map(tonal.Note.fromMidi));
    if (chords && chords.length > 0) {

        //send data back into max
        MaxApi.outlet("chords", ...chords);

        //update web
        
    }
    else {
        MaxApi.outlet("chords", "unknown");
    }
});
