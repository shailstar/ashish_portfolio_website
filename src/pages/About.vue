<template>
  <section class="about">
    <h1>About Me</h1>

    <div class="about-content">
      <div class="about-text">
        <p>
          I'm a passionate full-stack developer with a keen interest in building
          clean, scalable, and user-friendly applications. I have experience with
          modern web technologies and enjoy solving complex problems.
        </p>
        <p>
          When I'm not coding, I enjoy exploring new technologies, contributing to
          open-source projects, and sharing knowledge with the community.
        </p>
      </div>

      <div class="skills">
        <h2>Skills</h2>
        <ul>
          <li>Frontend: Vue.js, React, HTML/CSS, JavaScript</li>
          <li>Backend: Node.js, Python, Express, Django</li>
          <li>Database: MongoDB, PostgreSQL, MySQL</li>
          <li>Tools: Git, Docker, AWS, Vite</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
}

.about h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.about-content {
  display: grid;
  gap: 2rem;
}

.about-text p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.skills h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.skills ul {
  list-style: none;
  padding: 0;
}

.skills li {
  padding: 0.5rem 0;
  color: #666;
  border-bottom: 1px solid #eee;
}

.skills li:last-child {
  border-bottom: none;
}
</style>
