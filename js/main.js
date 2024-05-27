const mars = document.querySelector('.mars');
const venus = document.querySelector('.venus');
const moon = document.querySelector('.moon');
const mercury = document.querySelector('.mercury');
const jupiter = document.querySelector('.jupiter');

function SailorMoon(name, superheroename, superpower){
  this.name = name;
  this.superheroename = superheroename
  this.superpower = superpower
  this.isLeader = false

  this.displayInfo = function(){
    const dataCharacter = document.querySelector('article');
    const dataShow = document.createElement('p');
    dataShow.innerText = `Sailor Moon Information: 
    Name: ${this.name}
    Superhero Name: ${this.superheroename}
    Superpower: ${this.superpower}
    ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}`
     dataCharacter.appendChild(dataShow)
  }
  
  this.becomeLeader = function(){
    this.isLeader = true
    console.log(`${this.name} has become the leader of the Sailor Moon!`)
  }
}
const sailorMars = new SailorMoon('Rei Hino', 'Sailor Mars', 'Fire Soul');
const sailorVenus = new SailorMoon('Mina Aino', 'Sailor Venus', 'Venus Love-Me Chain');
const sailorMoon = new SailorMoon('Serena Tsukino', 'Sailor Moon', 'Moon Tiara Action', true);
const sailorMercury = new SailorMoon('Amy Mizuno', 'Sailor Mercury', 'Shabon Spray ');
const sailorJupiter = new SailorMoon('Lita Kino', 'Sailor Jupiter', 'Supreme Thunder');

sailorMoon.becomeLeader()

mars.addEventListener('click',showDataMars);
venus.addEventListener('click',showDataVenus);
moon.addEventListener('click',showDataMoon);
mercury.addEventListener('click',showDataMercury);
jupiter.addEventListener('click',showDataJupiter);

function showDataMars (){
  clearInfo();
  sailorMars.displayInfo()
}

function showDataVenus (){
  clearInfo();
  sailorVenus.displayInfo()
}

function showDataMoon (){
  clearInfo();
  sailorMoon.displayInfo()
}

function showDataMercury (){
  clearInfo();
  sailorMercury.displayInfo()
}

function showDataJupiter (){
  clearInfo();
  sailorJupiter.displayInfo()
}

function clearInfo(){
  const dataCharacter = document.querySelector('article');
  dataCharacter.innerHTML = '';
}
