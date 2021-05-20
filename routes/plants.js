const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const router = express.Router();

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
    folder: '',
    allowedFormats: ['jpg', 'png']
    }
})

var parser = multer({storage: storage})

let plantData = {
    plants: [
        {
            plantId: 1,
            plantInfo: {
                name: "cute cactus",
                description: "a rather cute looking tiny cactus plant that wouldn't hurt a fly :)",
                location: "Helsinki",
                images:[],
                price: "50€",
                availability: "Yes"
            },
            seller: {
                name: "Nabeel",
                email: "nabeel@mail.com",
                phone: "1-800-786"
            }
        },
        {
            plantId: 2,
            plantInfo: {
                name: "fresh random flowers",
                description: "random assortment of some of the finest flowers in the country",
                location: "Helsinki",
                images:[],
                price: "35€",
                availability: "Yes"
            },
            seller: {
                name: "Sonya",
                email: "sonya@mail.com",
                phone: "1-900-232"
            }
        },
    ]
}

//app.use(bodyParser.json());

router.get('/', (req, res) => {
    res.send(plantData.plants)
})

router.post('/upload', parser.single('image'), function (req, res) {
    console.log(req.file);
    res.status(201);
    res.json(req.file);
});

module.exports = router;