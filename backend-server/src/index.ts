import 'dotenv/config';
import express from 'express';
import webhooksRouter from './webhooks/router';

async function main() {
    const app = express();

    app.use(express.json());
    app.use('/webhooks', webhooksRouter);
    
    app.use((req, res, next) => {
        res.status(404).send({
            message: 'invalid webhook url',
        })
    })
      
    const port = Number(process.env.PORT) || 3000;

    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
}

main();