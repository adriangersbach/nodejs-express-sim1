# nodejs-express-sim1

chmod +x filename.sh

# Docker examples
docker run -d -p 8081:8080 --restart unless-stopped --name sfg500-sim1 adriangersbach/nodejs-express-sim1

service networking restart

# LAN eth0
docker network create -d macvlan --subnet=192.168.0.0/24 --gateway=192.168.0.1 -o parent=eth0 macvlan1

# VLAN eth0.200
docker network create -d macvlan --subnet=192.168.200.0/24 --gateway=192.168.200.1 -o parent=eth0.200 macvlan200

docker network rm <name>
docker network ls
