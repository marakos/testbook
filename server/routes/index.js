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
        
    var authors=data.firstAuthor
    delete data.firstAuthor
   
  if(data.secondAuthor!==undefined){
    authors += ', '+data.secondAuthor
    delete data.secondAuthor
  }
  if(data.thirdAuthor!==undefined){
    authors += ', '+data.thirdAuthor
    delete data.thirdAuthor
  }
    data.authors=authors
    
    
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
                var obj = JSON.parse(buf);        
                const book = obj.books.find(obj => obj.isbn13===id);
               res.status(200).json(book);
        }
       
    
    })
});

export default router;