import app from './index.js';

const PORT = process.env.PORT || 6200;

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));