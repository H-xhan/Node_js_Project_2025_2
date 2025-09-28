const express = require('express');
const fs = require('fs');
const router = express.Router();



const initalResources = {
    metal : 500,
    crystal : 300,
    deuterium : 100,
}

global.players = {};

router.post('/register', (req, res) => {
    const {name, password} = req.body;

    if(global.players[name])
    {
        return res.status(400).json({message: '이미 등록된 사용자 입니다.'});
    }

    global.players[name] = {
        
        playerName : name,
        password : password,
        resources : {
            metal : 500,
            crystal : 300,
            deuterium : 100,
        },
        planets : []
    };

    saveResources();
    res.send({message: '등록 완료' , player:name});
});

module.exports = router;

router.post('/login', (req, res) => {
    const {name, password} = req.body;

    if(global.players[name])
    {
        return res.status(404).send({message: '플레이어를 찾을 수 없습니다.'});
    }
    
    if(password !== global.players[name].password)
    {
        return res.status(401).send({message: '비밀번호가 틀렸습니다.'});
    }

    const reqponsePayLoad = {
        playerName: player.playername,
        metal: player.resources.metal,
        crystal: player.resources.crystal,
        deuterium: player.resources.deuterium,
    };

    
});

module.exports = router;