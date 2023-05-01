docker stop wedding
docker rm wedding
docker rmi wedding-build
docker build -t wedding-build .
docker run -d -p 3000:3000 --name wedding wedding-build
docker image ls
docker container ls