# Node JS app on Kubernetes using Jenkins and Docker
## Steps
1. Build a simple Node JS app
2. Create a Docker image
3. Push the image to Docker Hub
4. Start a Jenkins Docker container and configure plugins
5. Link your repository to the container using Ngrok
6. Create the pipeline
7. Add a step to deploy on K8S on somewhere else

## Jenkins pipeline demo
![jenkins-pipeline-demo](https://user-images.githubusercontent.com/21682157/213929633-7b3d48ee-7885-4afa-86a9-ee0bb662d9b7.gif)

### Jenkins Docker container
This also makes your local Docker usable by the container without having to install it.
```
$ docker run -it -u root -d \
  -p 8080:8080 \
	-p 50000:50000 \
	-v /var/run/docker.sock:/var/run/docker.sock \
	-v /usr/bin/docker:/usr/bin/docker \
	-v /var/jenkins_home:/var/jenkins_home \
	--name jenkins jenkins/jenkins:lts
```

### GitHub hook and Ngrok
This creates a tunnel between your local Jenkins container and internet so that GitHub can push events when new commits arrive.
`$ docker run --rm -it --name ngrok --link jenkins shkoliar/ngrok http jenkins:8080`

On GitHub, add a webhook attached to your repository `<your url here>/github-webhook/`.
