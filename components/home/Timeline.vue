<template>
  <div class="timeline">
    <div class="event complete">
      <div class="details">
        <small>6 Hrs</small>
        <b>Setup</b>
      </div>
    </div>
    <div class="event complete">
      <div class="details">
        <small>12 Hrs</small>
        <b>Setup</b>
      </div>
    </div>
    <div class="event complete">
      <div class="details">
        <small>18 Hrs</small>
        <b>Setup</b>
      </div>
    </div>
    <div class="event complete">
      <div class="details">
        <small>24 Hrs</small>
        <b>Setup</b>
      </div>
    </div>
    <div class="event">
      <div class="details">
        <small>30 Hrs</small>
        <b>Setup</b>
      </div>
    </div>
    <div class="event">
      <div class="details">
        <small>36 Hrs</small>
        <b>Setup</b>
      </div>
    </div>
    <div class="event">
      <div class="details">
        <small>42 Hrs</small>
        <b>Setup</b>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { Octokit } from '@octokit/core'
// // Octokit.js
// // https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//   auth: 'personal-access-token123',
//   baseUrl: 'https://github.acme-inc.com/api/v3',
//   userAgent: 'my-app/v1.2.3'
// })

// await octokit.request('GET /repos/{owner}/{repo}/commits{?sha,path,author,since,until,per_page,page}', {
//   owner: 'Drew-Macgibbon',
//   repo: 'REPO'
// })

</script>

<style scoped>
body {
  background: whitesmoke;
}

.timeline {
  position: relative;
  display: flex;
  height: 80vh;
  padding: 10vh 0;
  flex-direction: column;
  justify-content: space-around;
}

.timeline .event {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  margin-bottom: 1px;
}

.timeline .event:after {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 10px;
  background: #ccc;
  content: "";
}

.timeline .event.complete:after {
  background: #0000FF;
}

.timeline .event small,
.timeline .event b {
  display: block;
  text-align: right;
  padding-right: 10px;
}

.timeline .event small {
  font-size: 0.8em;
}

.timeline .event b {
  font-size: 1em;
}
</style>
