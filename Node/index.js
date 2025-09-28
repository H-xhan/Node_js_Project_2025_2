const express = require('express');
const fs = require
const playerRoutes = require('./routes/playerRoutes');
const app = express();
const port = 4000;

app.use(express.json());
app.use('/api', playerRoutes);
const resourceRoutes = 'resources.json';

loadResources();

function loadResources()
{
    if (fs.existsSync(resourceRoutes))
    {
        const data = fs.readFileSync(resourceRoutes);
        global.players = JSON.parse(data);
    }
    else
    {
        global.players = {};
    }
}

function saveResources()
{
    fs.writeFileSync(resourceRoutes, JSON.stringify(global.players, null, 2));
}

app.listen(port, () =>
{
    console.log(`서버가 http://localhost:${port}에서 실행 중 입니다.`);
})
