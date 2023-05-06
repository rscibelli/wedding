export $( grep -vE "^(#.*|\s*)$" .env )

sshpass -p ${ssh_pass} ssh pi@10.0.0.251 << EOF
    docker stop wedding
    docker rm wedding
    docker rmi wedding-build
    cd repositories/wedding
    git pull
    sudo docker build -t wedding-build .
    docker run -d -p 80:80 --name wedding wedding-build
    docker image ls
    docker container ls
EOF