// get container
const cont = document.querySelector('#container');

const data = [
  {
    name: 'Kelvin Kimathi',
    role: 'Co-operative engineer in IT',
    description: 'Kelvin Transformed IT in the University and published his book Infinite IT',
    picture: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=150&q=60) 80% 50% no-repeat, url(https://images.unsplash.com/photo-1623121739158-80a9b0e6d2c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHN1bW1pdCUyMG1lZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=80&q=60',
  },
  {
    name: 'Chris Mburugu',
    role: 'Registrar at Co-operative University',
    description: 'Renowned for excellent public speaking, an expert in public relations, hosted at TED talk in 2021.',
    picture: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=150&q=60) 80% 50% no-repeat, url(https://images.unsplash.com/photo-1623121739158-80a9b0e6d2c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHN1bW1pdCUyMG1lZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=80&q=60',
  },
  {
    name: 'Kelvin Kimathi',
    role: 'Co-operative engineer in IT',
    description: 'Kelvin Transformed IT in the University and published his book Infinite IT',
    picture: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=150&q=60) 80% 50% no-repeat, url(https://images.unsplash.com/photo-1623121739158-80a9b0e6d2c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHN1bW1pdCUyMG1lZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=80&q=60',
  },
  {
    name: 'Chris Mburugu',
    role: 'Registrar at Co-operative University',
    description: 'Renowned for excellent public speaking, an expert in public relations, hosted at TED talk in 2021.',
    picture: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=150&q=60) 80% 50% no-repeat, url(https://images.unsplash.com/photo-1623121739158-80a9b0e6d2c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHN1bW1pdCUyMG1lZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=80&q=60',
  },
];

const newdata = data.slice(0, 2);
let real = false;

if (window.innerWidth > 990) {
  real = true;
}

const sectionc = document.createElement('section');
sectionc.className = 'sectionc';
sectionc.innerHTML = `<div class="container_sectionc_header"> <h2>Featured Speakers</h2> <div class="lineecho"></div></div>
<div class="container_sectionc_speakers">
${
  real === true ? data.map((dat) => (
    `<div class="container_sectionc_speakers_speaker1">
    <div class="container_sectionc_speakers_speaker1_image_container" style="background: url(${dat.picture}) 80% 50% no-repeat, url(https://images.unsplash.com/photo-1623121739158-80a9b0e6d2c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHN1bW1pdCUyMG1lZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=80&q=60) 2% 0% no-repeat;height: 200px; width: 200px; position: relative;">
    </div>
    <div class="container_sectionc_speakers_speaker1_content">
        <h3>${dat.name}</h3>
        <p class="p1">${dat.role}</p>
        <div class="speaker_line"></div>
        <p>${dat.description}</p>
    </div>
  </div>`
  )) : newdata.map((dat) => (
    `<div class="container_sectionc_speakers_speaker1">
    <div class="container_sectionc_speakers_speaker1_image_container" style="background: url(${dat.picture}) 80% 50% no-repeat, url(https://images.unsplash.com/photo-1623121739158-80a9b0e6d2c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHN1bW1pdCUyMG1lZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=80&q=60) 2% 0% no-repeat;height: 200px; width: 200px; position: relative;">
    </div>
    <div class="container_sectionc_speakers_speaker1_content">
        <h3>${dat.name}</h3>
        <p class="p1">${dat.role}</p>
        <div class="speaker_line"></div>
        <p>${dat.description}</p>
    </div>
  </div>`
  ))
}
 
</div>
<div class="buttonsectionc">
  <button  type="button" >More <i class="fa fa-caret-down"></i></button>
</div>
<div class="container_sectionb_upper_footer">
        <section class="container_sectionb_upper_footer_upper">
          <h4>Partner</h4>
          <div class="partner_div"></div>
          <div class="container_sectionb_upper_footer_sponsar">
            <img src="https://i0.wp.com/www.cuk.ac.ke/wp-content/uploads/2019/12/stanchart2.png?fit=271%2C114&ssl=1" alt="co-op bank">
            <img src="https://i2.wp.com/www.cuk.ac.ke/wp-content/uploads/2019/12/cic.jpg?fit=271%2C65&ssl=1" alt="CIM logo">
            <img src="https://i0.wp.com/www.cuk.ac.ke/wp-content/uploads/2019/12/helb.jpg?w=452&ssl=1" alt="Helb logo">
            <img src="https://i2.wp.com/www.cuk.ac.ke/wp-content/uploads/2019/12/world.jpg?fit=248%2C75&ssl=1" alt="world concil">
            <img src="https://i1.wp.com/www.cuk.ac.ke/wp-content/uploads/2019/12/coop.jpg?fit=216%2C65&ssl=1" alt="international co-op alliance">
          </div>
        </section>
        <div class="container_sectionb_upper_footer_lower">
          <img src="./images/logo.jpg" width="100px" height="100px" alt="Co-operative_university logo">
          <b>&copy; 2022 Co-operative University Summit <br> All rights Preserved</b>
        </div>
</div>
`;

cont.appendChild(sectionc);

// menu functionality

const bars = document.querySelector('#bars');
bars.addEventListener('click', () => {
  const navyd = document.querySelector('#anav');
  navyd.classList.toggle('container_header_nav_links_2');
});