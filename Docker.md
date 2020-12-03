## Docker

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

What is the benefit?
    *   Collaboration: you can obtain images and run them easily on any machine as long as your environment is setup appropriately.
    *   Flexibility: you can build containers however you want
    *   Totality: containers literally contain everything you need to run that application

VM vs Container?
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

What is the anatomy of a Docker File?

    *   Built on linux containers
    *   Docker runs on top of the host machines operating system kernel
    *   a linux container is a package application that contains everything it needs to run
        *   contained within its own container
        *   extremely portable
        *   easily testable
    *   Docker provides an environment and workflow for the linux containers
        * like a container coordinator