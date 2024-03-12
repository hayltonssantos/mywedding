// Importe 'fs' corretamente, escolhendo entre as formas abaixo:

// Forma 1: Importação usando 'import'
import fs from 'fs';
import { google } from 'googleapis';
import path from 'path';

const GOOGLE_API_FOLDER_ID = '1KWTOUqyRcsJNDY_PHpXm39oN-uI2YRJ2';

async function uploadFile() {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(__dirname, './.env.local'), // Caminho dinâmico usando __dirname
      scopes: ['https://www.googleapis.com/auth/drive']
    });

    const driveService = google.drive({
      version: 'v3',
      auth
    });

    const fileMetaData = {
      'name': 'snowpalace.jpg',
      'parents': [GOOGLE_API_FOLDER_ID]
    };

    const media = {
      mimeType: 'image/jpg',
      body: fs.createReadStream(path.join(__dirname, './snow.jpg')) // Caminho dinâmico usando __dirname
    };

    const response = await driveService.files.create({
      resource: fileMetaData,
      media: media,
      fields: 'id'
    });

    return response.data.id;
  } catch (err) {
    console.log('Erro', err);
  }
}

uploadFile().then(data => {
  console.log(data);
});
