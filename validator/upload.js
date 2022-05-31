const multer = require('multer');

const subirImagen = (ubicacion) => multer(
  {
    storage: multer.diskStorage(
      {
        destination: (req, file, cb) => cb(null, `public/imagenes/${ubicacion}`),
        filename: (req, file, cb) => {
          const formato = file.originalname.match(/\.(.+)$/)[1];
          cb(null, `${req.body.nombre}.${formato}`);
        },

      },
    ),
  },
).single('imagen');

module.exports = subirImagen;
