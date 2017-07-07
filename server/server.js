const http = require('http')

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/json; charset=utf-8')
    res.setHeader('Access-Control-Allow-Origin', '*')
    let data = {
        name: 'gin',
        age: 21,
        gender: 'male'
    }
    let comments = {
        comments: [
            {
                id: 0,
                msg: '第一个消息'
            },
            {
                id: 1,
                msg: '第二个消息'
            },
            {
                id: 2,
                msg: '第三个消息'
            },
            {
                id: 3,
                msg: '第四个消息'
            },
            {
                id: 4,
                msg: '第五个消息'
            },
            {
                id: 5,
                msg: '第六个消息'
            },
            {
                id: 6,
                msg: '第七个消息'
            }
        ]
    }
    res.end(JSON.stringify(comments))
})
    .listen(3001, err => {
        if (err) {
            console.log('服务器开启失败')
        } else {
            console.log('服务器开启成功, http://localhost:3001')
        }
    })