import axios from 'axios';
import express from 'express';
import dotenv from 'dotenv';
import Logger from './logger.js';
import morgan from 'morgan';
import pkg from './package.json' with { type: 'json' };

const IS_DEV = process.env.NODE_ENV === 'development'
if (IS_DEV) dotenv.config();

const {
    DEBUG,
    PORT,
    RADARR_URL,
    RADARR_API_KEY
} = process.env;

const log = new Logger(pkg.name, DEBUG === true);
const app = express();

app.use(morgan(IS_DEV ? 'dev' : 'short'));

app.listen(PORT, () => log.info(`Started webhook server on ${PORT}`));

log.info(`Starting ${pkg.name} v${pkg.version}...`);