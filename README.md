# nodejs-express-sim1

chmod +x filename.sh

# Docker examples
docker run -d -p 8081:8080 --restart unless-stopped --name sfg500-sim1 adriangersbach/nodejs-express-sim1

# How to get bash into a running container in background mode
docker exec -i -t conatiner-id /bin/bash #by ID

service networking restart

docker network rm <name>
docker network ls

# LAN eth0
docker network create -d macvlan --subnet=192.168.0.0/24 --gateway=192.168.0.1 -o parent=eth0 macvlan1

# VLAN eth0.200
docker network create -d macvlan --subnet=192.168.200.0/24 --gateway=192.168.200.1 -o parent=eth0.200 macvlan200

# Links
Dockerizing a Node.js web app - Node.js
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
