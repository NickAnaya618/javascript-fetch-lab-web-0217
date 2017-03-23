const userName = ''

function getIssues() {
  fetch(`https://api.github.com/repos/${userName}/javascript-fetch-lab/issues`).
  then(resp => resp.json()).
  then(json => {
    showIssues(json)
  })
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const token = getToken()
  const postData = {
  title: document.getElementById('title').value,
  body: document.getElementById('body').value
};
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${userName}/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    },
      body: JSON.stringify(postData)
    }).then(resp => getIssues())
}

function showResults(json) {
   const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
   const results = template(json)
   document.getElementById("results").innerHTML = results
  }

function forkRepo() {
  const token = getToken()
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
      }
    }).then(res => res.json())
    .then(showResults);
}

function getToken() {
  return ''
}

function init() {
  // initialize handlebars templates
}

init()
