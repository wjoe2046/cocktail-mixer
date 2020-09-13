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
Stop the network by
`$ docker-compose stop`

Crreate cluster
```
eksctl create cluster --name=cocktail-cluster --version=1.16 --nodegroup-name=standard-workers --node-type t2.medium --nodes=3 --nodes-min=1 --nodes-max=4 --node-ami=auto --region=us-west-2
```
