import axios from 'axios';
import fs from 'fs';
import path from 'path';

axios.defaults.adapter = require('axios/lib/adapters/http');

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

const server = path.resolve('server.json');

export const readfile = () => {
  const content = fs.readFileSync(server, 'utf-8');

  return JSON.parse(content);
};
