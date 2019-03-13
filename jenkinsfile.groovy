import groovy.transform.Field

@Library('jenkins-pipeline-utils') _

@Field
def GITHUB_CREDENTIALS_ID = '433ac100-b3c2-4519-b4d6-207c029a103b'

@Field
def newTag

switch (env.BUILD_JOB_TYPE) {
  case 'master':
    // masterPipeline()
    break
  case 'release':
    // releasePipeline()
    break
  default:
    pullRequestPipeline()
}

//
// Pipelines
//

/**
 * Creates pull request pipeline.
 *
 * The PR pipeline kicked off by GitHub pull requests (PRs). There is
 */
def pullRequestPipeline() {
  node('linux') {
    def img
    def triggerProperties = githubPullRequestBuilderTriggerProperties()
    properties([
      githubConfig(),
      pipelineTriggers([triggerProperties]),
      buildDiscarderDefaults()
    ])
    try {
      checkoutStage()
      docker.image('node:lts').inside("-u 0 --env CI=true") {
        stage('Bootstrap') {
          sh "yarn --production=false --non-interactive --frozen-lockfile --silent --no-progress"
          sh "yarn lerna bootstrap"
        }
        stage('Lint') {
          sh "yarn lint --format tap"
        }
        stage('Unit Test') {
          sh "yarn test"
        }
        stage('Build Pkgs') {
          sh "yarn build:libs"
        }
        stage('Build Site') {
          sh "yarn build:www"
        }
      }
    } catch(Exception exception) {
      currentBuild.result = 'FAILURE'
      throw exception
    } finally {
      cleanupStage()
    }
  }
}

//
// Stages
//

def checkoutStage() {
  stage('Checkout') {
    deleteDir()
    checkout scm
  }
}

def createImageStage() {
  def img
  stage('Create Image') {
    img = docker.build("cwds/ds:${env.BUILD_ID}", "-f docker/Dockerfile .")
  }
  return img
}

def bootstrapStage(container) {
  stage('Bootstrap') {
    sh "docker exec -t ${container.id} yarn --production=false --non-interactive --frozen-lockfile --silent --no-progress"
    sh "docker exec -t ${container.id} yarn lerna bootstrap"
  }
}

def lintStage(container) {
  stage('Lint') {
    sh "docker exec -t ${container.id} yarn lint --format tap"
  }
}

def unitTestStage(container) {
  stage('Unit Test') {
    sh "docker exec -t ${container.id} yarn test"
  }
}

def buildPkgsStage(container) {
  stage('Build Pkgs') {
    sh "docker exec -t ${container.id} yarn build:libs"
  }
}

def buildGuideSiteStage(container) {
  stage('Build Site') {
    sh "docker exec -t ${container.id} yarn build:www"
  }
}

def securityScanStage(containerVersion) {
  stage('Security Scan') {
    containerScan('design-system', containerVersion)
  }
}

def cleanupStage() {
  stage('Cleanup') {
    cleanWs()
  }
}

//
// Helpers
//

def githubConfig() {
  githubConfigProperties('https://github.com/ca-cwds/design-system')
}
