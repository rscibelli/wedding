docker stop wedding
docker rm wedding
docker rmi wedding-build
docker build -t wedding-build .
docker run -d -p 443:443 --name wedding wedding-build
docker image ls
docker container ls