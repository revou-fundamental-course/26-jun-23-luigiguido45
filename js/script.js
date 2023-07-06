//Autoslider
const images = [
  { url: './Assets/img/familyfix.jpg', description: '"Keluarga kami sangat puas berbelanja disini karena semua kebutuhan, baik untuk orangtua, hingga anak-anak kami tersedia di sini."', title: 'Michael Scott', details: 'Karyawan Swasta, 42' },
  { url: './Assets/img/ladyfix.jpg', description: '"Akses nya yang mudah, membuat saya tidak kesulitan untuk restock belanjaan bulanan untuk keluarga"', title: 'Pam Beesly ', details: 'Ibu rumah tangga, 40'},
  { url: './Assets/img/man2.jpg', description: '"Saya jadi tidak perlu bingung untuk berbelanja sekarang"', title: 'Zidan', details: 'Atlet Basket, 29' }
];

const sliderContainer = document.querySelector('.slider-container');
let currentIndex = 0;

function createSliderItem(image) {
  const sliderItem = document.createElement('div');
  sliderItem.classList.add('slider-item');

  const imgElement = document.createElement('img');
  imgElement.src = image.url;
  sliderItem.appendChild(imgElement);

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = image.description;
  sliderItem.appendChild(description);

  const title = document.createElement('h4');
  title.textContent = image.title;
  sliderItem.appendChild(title);

  const details = document.createElement('p');
  details.textContent = image.details;
  sliderItem.appendChild(details);
  



  return sliderItem;
}

function renderSlider() {
  sliderContainer.innerHTML = '';

  images.forEach((image, index) => {
    const sliderItem = createSliderItem(image);
    sliderContainer.appendChild(sliderItem);

    if (index === currentIndex) {
      sliderItem.classList.add('active');
    }
  });

  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  renderSlider();
}

const slideInterval = setInterval(nextSlide, 3000);
renderSlider();

//JavaScript Validation
const name = document.getElementById('name');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const form = document.querySelector('form');
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (e)=> {
    
    if(name.value.trim() === ""){
      e.preventDefault();
      alert("Nama tidak boleh kosong");
      return false;
    } else if(name.value.length <3){
      e.preventDefault();
      alert("Nama tidak boleh kurang dari 3 huruf");
      return false;
    } else if(email.value.trim() === ""){
      e.preventDefault();
      alert("Email tidak boleh kosong");
      return false;
    } else if(tel.value.trim() === ""){
      e.preventDefault();
      alert("Nomor telfon tidak boleh kosong");
      return false;
    } else if(tel.value.length < 10){
      e.preventDefault();
      alert("Harap isi nomor telfon dengan benar");
      return false;
    } else if(tel.value.length > 12){
      e.preventDefault();
      alert("Harap isi nomor telfon dengan benar");
      return false;
    } else if (form['name'].value.match(/[0-9]/)) {
      e.preventDefault(); 
      alert("Nama tidak boleh mengandung angka");  
      form['name'].focus(); 
      return false; 
  } else{ 
  alert("Form Submitted, Thank you")
  return true; 
  }
})

//Email Validation walaupun sudah ada otomatis dari form email di HTML  
form.addEventListener('submit', (e)=> {
  if(inputText.value.match(mailformat)){
    document.form.email.focus();
    return true;
  }else{
    alert('Email Invalid')
    }
})
