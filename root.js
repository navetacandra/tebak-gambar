let media = require('./media.json')
const router = require('express').Router()

router.get('/', (req, res) => {
    let fs = require('fs');
    let level = 0
    let results = [];
    [Object.keys(media)[Math.floor(Math.random() * Object.keys(media).length)]].forEach(j => {
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

module.exports = router