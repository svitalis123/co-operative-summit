// get container
const cont = document.querySelector('#container');

const sectionc = document.createElement('section');
sectionc.className = 'sectionc';
sectionc.innerHTML = `<div class="container_sectionc_header"> <h2>Featured Speakers</h2> <div class="lineecho"></div></div>
<div class="container_sectionc_speakers">
  <div class="container_sectionc_speakers_speaker1">
    <div class="container_sectionc_speakers_speaker1_image_container">
    </div>
    <div class="container_sectionc_speakers_speaker1_content">
        <h3>Kelvin Kimathi</h3>
        <p class="p1">Co-operative engineer in IT</p>
        <div class="speaker_line"></div>
        <p>Kelvin Transformed IT in the University and published his book Infinite IT</p>
    </div>
  </div>
  <div class="container_sectionc_speakers_speaker2">
    <div class="container_sectionc_speakers_speaker2_image_container">
    </div>
    <div class="container_sectionc_speakers_speaker2_content">
        <h3>Chris Mburugu</h3>
        <p class="p1">Registrar at Co-operative University.</p>
        <div class="speaker_line"></div>
        <p> Renowned for excellent public speaking, an expert in public relations, hosted at TED talk in 2021.</p>
    </div>
  </div>
  <div class="container_sectionc_speakers_speaker1 eliminate">
    <div class="container_sectionc_speakers_speaker1_image_container">
    </div>
    <div class="container_sectionc_speakers_speaker1_content">
        <h3>Kelvin Kimathi</h3>
        <p class="p1">Co-operative engineer in IT</p>
        <div class="speaker_line"></div>
        <p>Kelvin Transformed IT in the University and published his book Infinite IT</p>
    </div>
  </div>
  <div class="container_sectionc_speakers_speaker2 eliminate">
    <div class="container_sectionc_speakers_speaker2_image_container">
    </div>
    <div class="container_sectionc_speakers_speaker2_content">
        <h3>Chris Mburugu</h3>
        <p class="p1">Registrar at Co-operative University.</p>
        <div class="speaker_line"></div>
        <p> Renowned for excellent public speaking, an expert in public relations, hosted at TED talk in 2021.</p>
    </div>
  </div>
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
          <b>&copy; 2022 Co-operative University Summit</b>
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