HOW TO ADD A READY-MADE MODEL
1. Put the .glb file in this folder (any file name, no spaces).
2. Open models.json with Notepad and add one block (see models.example.json):
   "myid": { "file": "name.glb", "kind": "static", "words": ["word1","word2"], "size": 5 }
   - myid: short name, only small letters, digits, - or _
   - kind: "static" (stands, solid), "vehicle" (E to drive), "animal" (walks around)
   - words: what people may type to get it
   - size: length in metres (for tall things use "height": true)
   - rotY: 0, 90, 180 or 270 if it faces the wrong way
   - credit: the attribution line for CC-BY models (Poly Pizza: turn on "Full text links", press Copy)
3. Blocks are separated by commas. The last block has no comma after it.
Built-in ids that are always known: car, dragon, house, castle, boat, lamp, horse, fox.
