const multer = require('multer');

const subirImagen = (ubicacion, campo = 'imagen') => multer(
  {
    fileFilter: (_req, file, cb) => {
      cb(null, file.mimetype.includes('image'));
    },
    storage: multer.diskStorage(
      {
        destination: (_req, _file, cb) => cb(null, `public/imagenes/${ubicacion}`),
        filename: (req, file, cb) => {
          const formato = file.originalname.match(/\.(.+)$/)[1];
          cb(null, `${req.body.nombre}.${formato}`);
        },

      },
    ),
  },
).single(campo);

module.exports = subirImagen;
