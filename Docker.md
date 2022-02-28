## Docker

# Context Videos
    Traversy Media: Docker Desktop to Deployment
    https://www.youtube.com/watch?v=i7ABlHngi1Q

    Containers from Scratch
    https://youtu.be/8fi7uSYlOdc

What is Docker?
    *   Docker is an application for building, running and shipping applications in a consistent manner utilizing containers.
        * Issues that docker addresses
            * One or more missing files
            * Software version mismatch 
            * Different configuration settings
        * Benefits
            * Lets you package your application and let it run on any machine that runs Docker
            * Keeps you from having to manually configure machines
            * Can remove application and dependencies gracefully
                * because these occur within a container and not the host machine

    * Container vs VMs
        * container - isolated environment for running an application
            * Allow running multiple apps in isolation
            * Are lightweight - don't need a full operating system
            * Use the OS of the host
            * Starts quickly because of using host OS
            * Need less hardware resources (This needs to be investigated further, WHY)

        * VM - an abstraction of a machine that runs physical hardware
            * hypervisors - used to create and manage virtual machines
                * VirtualBox & VMware
                * run applications in isolation inside a virtual machine
            * each needs a full-blown OS
            * slow to start
            * resource intensive - has to be divided between actual VMs running

    * Docker Architecture
        * Client ----> Server
            * communicates via restful API
            * Server === Docker Engine
                * takes care of building and running docker containers
                * containers === process
                    * containers share the kernel of the host, not the full OS
                    * kernel === core of operating system; manages hardware resources, have differen't APIs
                    * Windows OS can run Linux & Windows containers, Linux can run Linux, MacOS can only run its own

    * Installing Docker
        * docs.docker.com/get-docker/

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
## Dockerfile  ---> Images ---> Containers; Volumes, Bind Mounts - oh my
    Images can exist without containers, where as a container needs an image to exist

    Containers are dependent on images and use them to construct a run-time environment and run an application. These can be seen as phases in the process of running a Docker container

    A container will start from an image. A container is an instance of the image it is spawned from. Example - random number generator image, each time the image starts and creates a container a new random number will be generated, but will never be the same number.

    While that container (or instance) may create or change things about its content, none of those changes will persist to the image.

    Volumes (named volumes) solve the above issue by allowing us to connect filesystem paths for the container back to the host machine. If a directory in the container is mounted, changes in that directory are also seen on the host machine. If we mount the same directory across container restarts - the files persist!

    The caveat here is that named volumes don't specify where our data is stored.

    Bind mounts let's us control the exact mountpoint on the host and to store additional data into containers.

## Notes on Multi-Container Apps
    "Each container should do one thing and do it well" - probably someone who invented Docker or something

    * There's a good chance you'd have to scale APIs and front-ends differently than databases.
    * Separate containers let you version and update versions in isolation.
    * While you may use a container for the database locally, you may want to use a managed service for the database in production. You don't want to ship your database engine with your app then.
    * Running multiple processes will require a process manager (the container only starts one process), which adds complexity to container startup/shutdown.

    Multi container applications use networking to have containers that will communicate to one another. 

## Docker Compose
    *   Docker compose takes multiple containers and makes them run together as an application
    *   Requires a docker-compose.yml file (configuration file similar to JSON)
    *   

## Docker Commandline
    docker =    reveals commands
    docker version = gives information about your version
    docker info =   information on containers/running

    docker images   = lists all images
    docker ps       = lists all containers that are up and running - "process status"
    docker stop <container id>      = stops a container
    docker rm <container id>        = removes container
    docker rm -f <container id>     = stop & remove container

    docker volume inspect <volume name> = show us details regarding a volume

    docker build .  
    docker build . -t nameofimage

    docker container ls -a = shows running containers

    docker network create <network_name>    = this creates a named network

    FLAGS:
    --rm    = remove intermediate containers after a successful build
    --f     = name of dockerfile
    -p 3000:3000/tcp    = makes a port available and maps to it // publish flag

    docker system prune [OPTIONS]   = prunes all unused containers, networks and images

## Docker Tutorial Workthrough Notes

First make sure you have setup Docker desktop before moving forward with this tutorial. This section will serve as a way to orient faster to the Docker tutorial and maybe explore somethings further.

Step 1: 
    Git clone from this REPO
    
    https://github.com/docker/getting-started

    git clone git@github.com:docker/getting-started.git docker-tutorial-app

Step 2:
    In a CLI for the repo you just cloned run ---> docker run -d -p 80:80 docker/getting-started

    What it does:
        It runs a container //in isolation from all other processes// on your machine by using a container image.

    Helpful if tangental reference:
        Understanding chroot
        https://www.youtube.com/watch?v=2wSJREC7RV8

Step 3: 
    a:
        Download the ZIP that is present in the "Our Application section of the running container above. Open the ZIP file and make sure you extract the contents.
    b: Create a dockerfile with these contents
```    
FROM node:12-alpine
# Adding build tools to make yarn install work on Apple silicon / arm64 machines
RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
```

run this command in the directory containing the Dockerfile ---> docker build -t getting-started .

^^^ this builds the container image

run this command ---> docker run -dp 3000:3000 getting-started

^^^ this runs the image we created and builds in detached mode and maps to port 3000

Step 4: "Sharing our app"




