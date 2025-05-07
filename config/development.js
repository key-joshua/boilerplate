// config.js
export default {
    COSMIC_BUCKET: process.env.COSMIC_BUCKET || 'your-dev-bucket',
    COSMIC_READ_KEY: process.env.COSMIC_READ_KEY || 'your-dev-read-key',
    COSMIC_WRITE_KEY: process.env.COSMIC_WRITE_KEY || 'your-dev-write-key',
    SENDGRID_FUNCTION_ENDPOINT: process.env.SENDGRID_FUNCTION_ENDPOINT || 'http://localhost:3000/sendgrid'
};
  