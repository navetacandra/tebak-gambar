let media = require('./media.json')
const router = require('express').Router()
let BASE_URI = process.env.DOMAIN || 'http://localhost'

router.get('/level/:id', (req, res) => {
    let fs = require('fs');
    let level = 0
    let results = [];
    [Object.keys(media).filter(v => v === req.params.id)[0]].forEach(j => {
        level = Number(j)
        let _data = [];
        media[j].forEach(f => {
            let raw = {
                level: f.sublevel,
                img: 'data:image/png;base64,' + fs.readFileSync(f.src, 'base64'),
                answer: f.answer,
                id: Number(f.id)
            }
            _data.push(raw)
        })
        results = _data
    })
    res.json({
        status: 'success',
        stage: level,
        results: results
    })
})

router.get('/level', (req, res) => {
    let level = 0
    let results = [];
    Object.keys(media).forEach(j => {
        level = Number(j)
        results.push({
            level: level,
            detail: BASE_URI + '/level/' + j
        })
    })
    res.json({
        status: 'success',
        results: results
    })
})

module.exports = router