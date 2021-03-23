import express from'express';
import * as fs from 'fs';

const router = express.Router();



router.get('/', (req ,res) =>{

    fs.readFile(`/Users/petemarakos/Documents/Bookstore/testbook/server/assets/data/mockedData.json` ,"utf-8", (err, buf) => {
        if (err) {
            console.log('Error reading file:',err)
            return
        }else{
            
    res.status(200).json(JSON.parse(buf));
        }
    })
});

router.post('/create', (req ,res) =>{
    const data = req.body;
    
    fs.readFile(`/Users/petemarakos/Documents/Bookstore/testbook/server/assets/data/mockedData.json` ,"utf-8", (err, buf) => {
        if (err) {
            console.log('Error reading file:',err)
            return
        }
    // increase customer order count by 1
    
    var obj = JSON.parse(buf);
    obj['books'].push(data);
    

    fs.writeFile(`/Users/petemarakos/Documents/Bookstore/testbook/server/assets/data/mockedData.json`, JSON.stringify(obj), (err) => {
            if (err) console.log('Error writing file:', err)
        })
    })
    
    res.status(200).json("New Book Created");
});

router.get('/:id', (req ,res) =>{
    const id=req.params.id
    fs.readFile(`/Users/petemarakos/Documents/Bookstore/testbook/server/assets/data/mockedData.json` ,"utf-8", (err, buf) => {
        if (err) {
            console.log('Error reading file:',err)
            return
        }else{
     console.log(id)       
   const book ={"title":"Title test test","categories":"test","firstAuthor":"Test Test","publisher":"Test Pub","description":"Aasdsdf sgffsdf sfgsdgsdg sgsdgsg","year":"1111","numberOfPages":"1111","isbn":"1114214532","isbn13":"2225325235235"}
    console.log(typeof book)
   res.status(200).json(book);
        }
    })
});

export default router;