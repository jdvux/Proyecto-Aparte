const express = require ('express');
const app = express();
const path = require ('path')
const PORT = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
});

app.listen(PORT, () => {
    console.log(`server on ${PORT}`);
})