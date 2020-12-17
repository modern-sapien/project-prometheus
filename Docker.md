## Docker

Docker Desktop to Deployment
https://www.youtube.com/watch?v=i7ABlHngi1Q

What is Docker?
    *   Container management software
        *   images
            *   an image is a blueprint of your container
            *   instructions for building your containers
            *   or a snapshot of your container
            *   it is made up of layers
                *   a base layer: Debian, Ubuntu
                *   software files
                *   dependencies
                *   configurations
            *   when fully built out you get a container

         *   containers
            *   a container is a running instance of your docker image
            *   when your image is run, it is a container
        *   volumes

## What is the benefit?
    *   Collaboration: you can obtain images and run them easily on any machine as long as your environment is setup appropriately.
    *   Flexibility: you can build containers however you want
    *   Totality: containers literally contain everything you need to run that application

## VM vs Container?
    *   Virtual Machines
        *   complete operating system on it  & dependencies, files, etc.
        *   requires a hypervisor
        -   takes up more space
        -   takes up more resources
        -   is slower to boot up

    *   Containers
        *   virtualizes the operating system; does not require a hypervisor. 
        *   it is just running a program; there is no GUEST virtual operating system 
        *   everything exists in a package that runs or doesn't run
        +   can boot up instantly
        +   more portable

## What is the anatomy of a Docker File?
    *   create a Dockerfile in the root directoy of a project
        ````go
            FROM node: latest

            RUN mkdir -p /app/src

            WORKDIR /app/src

            COPY package.json .

            RUN npm install

            COPY . . (or /app/src)

            EXPOSE 3000

            CMD ["npm", "start"]
        ````

## Docker Compose
    *   Docker compose takes multiple containers and makes them run together as an application
    *   requires a docker-compose.yml file (configuration file similar to JSON)
    *   

## Docker Commandline
    docker =    reveals commands
    docker version = gives information about your version
    docker info =   information on containers/running

    docker images   = lists all images
    docker ps 

    docker build .  
    docker build . -t nameofimage

    docker container ls -a = shows running containers

    FLAGS:
    --rm    = remove intermediate containers after a successful build
    --f     = name of dockerfile
    -p 3000:3000/tcp    = makes a port available and maps to it // publish flag

    docker system prune [OPTIONS]   = prunes all unused containers, networks and images