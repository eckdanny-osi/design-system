import groovy.transform.Field

@Library('jenkins-pipeline-utils') _

@Field
def GITHUB_CREDENTIALS_ID = '433ac100-b3c2-4519-b4d6-207c029a103b'

@Field
def newTag

switch(env.BUILD_JOB_TYPE) {
  case 'master': buildMaster(); break;
  case 'release':releasePipeline(); break;
  default: buildPullRequest();
}

def buildPullRequest() {
  node('linux') {
    def triggerProperties = githubPullRequestBuilderTriggerProperties()
    properties([
      githubConfig(),
      pipelineTriggers([triggerProperties]),
      buildDiscarderDefaults()
    ])
    try {
      checkoutStage()
      checkForLabel()
    } catch(Exception exception) {
      currentBuild.result = 'FAILURE'
      throw exception
    } finally {
      cleanupStage()
    }
  }
}

def buildMaster() {
  node('linux') {
    triggerProperties = pullRequestMergedTriggerProperties('design-system-master')
    properties([
      githubConfig(),
      pipelineTriggers([triggerProperties]),
      buildDiscarderDefaults('master')
    ])

    try {
      checkoutStage()
      incrementTagStage()
    } catch(Exception exception) {
      currentBuild.result = 'FAILURE'
      throw exception
    } finally {
      cleanupStage()
    }
  }
}

def checkoutStage() {
  stage('Checkout') {
    deleteDir()
    checkout scm
  }
}

def checkForLabel() {
  stage('Verify SemVer Label') {
    checkForLabel('design-system')
  }
}

def incrementTagStage() {
  stage('Increment Tag') {
    newTag = newSemVer()
  }
}

def tagRepoStage() {
  stage('Tag Repo') {
    tagGithubRepo(newTag, GITHUB_CREDENTIALS_ID)
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

def githubConfig() {
  githubConfigProperties('https://github.com/ca-cwds/design-system')
}
