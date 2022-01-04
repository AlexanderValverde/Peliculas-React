
const API = 'https://api.themoviedb.org/3';

export function httpGET(path){
    return fetch(API + path, {
      headers: {
        Authorization: 
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzY0NDhlOWNhZTA0MjNmOWNiYzFiNTMwZGM5ZGI5NiIsInN1YiI6IjYxZDQ5ZDMxZTE5NGIwMDA0MTQyMzg0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pIjR3GAdjHHHZSYDT7-5zF-_2itW2tBVrv9BzcWzHBE",
        "Content-Type": 'application/json;charset=utf-8',
      },
    }).then((result) => result.json());
}