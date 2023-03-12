sshpass -p pi ssh pi@10.0.0.251 << EOF
    docker stop wedding
    docker rm wedding
    docker rmi wedding-build
    cd repositories/wedding
    git pull
    docker build -t wedding-build .
    docker run -d -p 3000:3000 --name wedding wedding-build
    docker image ls
    docker container ls
EOF