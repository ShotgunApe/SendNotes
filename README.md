# SendNotes
Node.js + Max MSP + Xebra

Send Notation live to performers

# Usage

- Install Max 8 and Miraweb ***1.2.6*** through package manager
- Install Node.js
- Install loopMIDI (or similar virtual MIDI port)
- Clone the repo and install node-modules using `npm install`
- Open .maxpat file in Max, and click `script start`

A server should begin running at `localhost:3000`. Chord changes made on the virtual keyboard should be updating in realtime.
This can be tested by going to `Extras -> KeyMidi` from Max.
