import express from 'express';
import http from 'http';

const api = express.Router();

const hostname =  'm.piaoniu.com';
const pathPrefix = '/api/';


api.route('*')
    .all((req, res) => {
        const path = req.originalUrl.replace(/\/api/, '');
        const request = http.request({
            hostname,
            path: pathPrefix + path,
        }, resp => {
            let json = '';
            resp.on('data', (chunk) => {
                json += chunk;
            });
            resp.on('end', () => {
                res.append('Access-Control-Allow-Origin', '*');
                //typeof json === 'string' ? json = JSON.parse(json) : '';
                console.log(typeof json,'--------type---of-------')
                res.send(json);
            });
        });

        request.on('error', (e) => {
            console.log(`problem with request of douban api: ${e.message}`);
        });

        request.end();
    })

export default api;