const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
app.get('*.*', express.static('./dist', { maxAge: '1y' }));
app.all('*', function (req, res) {
  res.status(200).sendFile(`/`, { root: './dist' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
