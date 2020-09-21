This a simple web project deployed in a container to practice how to use NodeJS.

To execute the container, first use this command to create the images: docker image build -t node_alpine

Then use this comando to run the container:

docker container run --name node_webapp -p 3000:3000 -v ~/pwd/app:/usr/src/app/simple_node_webapp/app -d node_alpine
