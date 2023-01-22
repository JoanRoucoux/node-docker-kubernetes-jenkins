pipeline {
  agent any

  tools {
    nodejs 'node'
  }

  environment {
    DOCKERHUB_REGISTRY = 'joanroucoux/node-web-app'
    DOCKERHUB_CREDENTIALS_ID = 'dockerhub'
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }

    stage('Build Docker image') {
      steps {
        script {
          sh 'docker build -t ${DOCKERHUB_REGISTRY}:${BUILD_NUMBER} .'
        }
      }
    }

    stage('Push Docker image') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: DOCKERHUB_CREDENTIALS_ID,
          passwordVariable: 'DOCKERHUB_PASSWORD',
          usernameVariable: 'DOCKERHUB_USERNAME'
        )]) {
          sh 'docker login -u ${DOCKERHUB_USERNAME} -p ${DOCKERHUB_PASSWORD}'
          sh 'docker push ${DOCKERHUB_REGISTRY}:${BUILD_NUMBER}'
        }
      }
    }
  }

  post {
    always {
      sh 'docker logout'
    }
  }
}