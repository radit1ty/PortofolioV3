export function projectsSectionFunctionality() {
  const projects = [
    {
      image: 'project.gif',// Renamed from profilePhoto to image for consistency
      title: 'Foto Pertama kita pacaran',
      description: 'Dan kita pacaran selama 3 minggu',
      role: 'Dev',
      clientSatisfaction: '100%'
    },
    {
      image: 'project.gif',
      title: 'Hari kamis sekolah terakhir',
      description: 'dan malam kita bergadang sampe subuh dan kita editing doang',
      role: 'Developer',
      clientSatisfaction: '100%'
    },
    {
      image: 'project.gif',
      title: 'Jumat libur',
      description: 'Dan jumat kita tidur sepuas kita dan jam 11 kita sholat jumat',
      role: 'Developer',
      clientSatisfaction: '95%'
    }
  ];
  let projectHTML = '';

  projects.forEach(project => {
    projectHTML+= `
      <div class="project-card">
          <div class="container title-and-description">
            <h2 class="project-title">${project.title}</h2>
            <p class="project-description semi-transparent-word">
              ${project.description}
            </p>
            <button class="call-to-action-btn">Visit Site</button>
          </div>
          <div class="fade-bgColor"></div>
          <div class="container image-and-result">   
            <img class="project-image" src="images and icons/icons/${project.image}" alt="proj-img" />
            <div class="project-result d-flex">
              <div>
                <p class="role semi-transparent-word">Role</p>
                <p class="result">${project.role}</p>
              </div>  
              <div>
                <p class="satisfaction semi-transparent-word">
                  Client satisfaction
                </p>
                <p class="result">${project.clientSatisfaction}</p>
              </div>
            </div>
          </div>
        </div>
    `
  });
  
  document.querySelector('.projects-container').innerHTML = projectHTML


}
