import express  from 'express';
import mongoose from 'mongoose';
import shortid from 'shortid';
import Connection from './database.js';
import bodyParser from 'body-parser';

const app = express();

//connect to MongoDB
//create schema for URL
const urlSchema = new mongoose.Schema({
    longUrl: { type: String, required: true },
    shortUrl: { type: String, default: shortid.generate }
});

//create model for URL
const URL = mongoose.model('URL', urlSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//create route for shortening URL
app.post('/shorten', async (req, res) => {
    const longUrl = req.body.longUrl;
    const url = new URL({ longUrl });

    try {
        const savedUrl = await url.save();
        res.json(savedUrl);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//create route for fetching all urls
app.get('/urls', async (req, res) => {
    try {
        const urls = await URL.find();
        res.json(urls);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//create route for redirecting short url to long url
app.get('/:urls', async (req, res) => {
    try {
        const url = await URL.findOne({ shortUrl: req.params.urls });
        if (!url) {
            return res.status(404).json({ message: 'URL not found' });
        }
        res.redirect(url.longUrl);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//delete route 
app.delete('/:id',async(req,res)=>{
    try{
        const deleteUrl=await URL.findOneAndDelete({_id:req.params.id});
        if(!deleteUrl){
            return res.status(404).json({message:'Url not found'});
        }
        res.json({message:'url deleted sucessfully'});
    }catch(error){
        res.status(500).json({message:error.message});
    }
});


app.listen(3000, () => {
    Connection("kaustubh","kaustubh");
    console.log('Server started on port 3000');
});
