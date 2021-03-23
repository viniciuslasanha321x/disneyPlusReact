import axios from 'axios';

axios.defaults.adapter = require('axios/lib/adapters/http');

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const apiTMDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWYzZDYyMDliYjdkNGUzN2U3MGRkNGRmYzljNGM2NiIsInN1YiI6IjYwMTZmZWRiYmM4NjU3MDAzZTZkNTgwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P6UEJ4ot-zfxoj2ev5Z-Y3XWx9H9VQt66fBS2eFrAHk`,
  },
});
