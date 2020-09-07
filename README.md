First do:
`$ docker build -t cocktail:dev`
Then do: 
```
$ docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    cocktail:dev

```
Or alternative you can 

```
$ docker-compose up -d --build

```