pipeline {
    environment {
        eksClusterName = 'cocktail'
        eksRegion = 'us-west-2'
        dockerHub = 'wjoe2046'
        dockerImage = 'cocktail_db_cocktail'
        dockerVersion = 'latest'
    }
    agent any
    stages {
        stage('K8S Deploy')  {
            steps {
                withAWS(credentials: 'aws-creds', region: eksRegion) {
                    sh 'aws eks --region=${eksRegion} update-kubeconfig --name ${eksClusterName}'
                    sh 'kubectl apply -f k8s-deployment.yml'
                }
            }
        }
    }
}