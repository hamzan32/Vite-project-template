const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
app.get('*', express.static('./dist', { maxAge: '1y' }));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
