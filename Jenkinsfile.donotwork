pipeline {
  agent any

  environment {
    APP_NAME = "cocktail-db"
    AWS_ACCOUNT = "435941061094"
  }

  parameters {
    choice(name: 'DEP_VERSION', choices: ['Blue', 'Green'], description: 'Deployment Version')
  }
  
  stages {
    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $APP_NAME .'
        sh 'docker image ls -q $APP_NAME:latest'
      }
    }

    stage('Scan Docker Image') {
      steps {
        aquaMicroscanner imageName: 'cocktail_db_cocktail:latest', notCompliesCmd: 'exit 4', onDisallowed: 'fail', outputFormat: 'html'
      }
    }

    stage('Run and Test App in Docker') {
      steps {
        sh 'docker run --name $APP_NAME -p 80:80 -d $APP_NAME'
        sh 'sleep 5'
        sh 'curl -s http://localhost:80'
        sh 'docker logs $APP_NAME'
        sh 'docker stop $APP_NAME'
        sh 'docker rm $APP_NAME'
      }
    }

    stage('Push image to DockerHub') {
      steps {
        withDockerRegistry(credentialsId: 'docker-hub-creds', url: 'https://index.docker.io/v1/') {
          sh 'docker tag $APP_NAME wjoe2046/$APP_NAME:$BUILD_NUMBER'
          sh 'docker tag $APP_NAME wjoe2046/$APP_NAME:latest'
          sh 'docker push wjoe2046/$APP_NAME:$BUILD_NUMBER'
          sh 'docker push wjoe2046/$APP_NAME:latest'
        }
      }
      post {
        always {
          sh 'docker image rm -f wjoe2046/$APP_NAME:$BUILD_NUMBER'
          sh 'docker image rm -f wjoe2046/$APP_NAME:latest'
        }
      }
    }
  }
}
