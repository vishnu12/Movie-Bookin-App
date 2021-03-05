import express from 'express'
import multer from 'multer'
import path from 'path'

const router=express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname + '-' + Date.now()}${path.extname(file.originalname)}`)
    }
  })

  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb('Images only');
      }
    }
  });


  router.post('/',upload.fields([
    {name:'poster',maxCount:1},
    {name:'actor',maxCount:1},
    {name:'actress',maxCount:1},
    {name:'suppActor',maxCount:1},
    {name:'director',maxCount:1},
    {name:'producer',maxCount:1},
    {name:'musicDir',maxCount:1},
  ]),(req,res)=>{
    
    const array=[
    `/${req.files.poster[0].path}`,
    `/${req.files.actor[0].path}`,
    `/${req.files.actress[0].path}`,
    `/${req.files.suppActor[0].path}`,
    `/${req.files.director[0].path}`,
    `/${req.files.producer[0].path}`,
    `/${req.files.musicDir[0].path}`
]
    res.send(array)
  }
  )

export default router