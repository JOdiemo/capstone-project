const speakers = [
  {

    image: './images/photo1.jpg',
    name: 'Rev. Rechal Parker',
    para1: 'Teacher, Mentor, Evangelist, Wells Church.',
    para2: `Having been in the ministry for more tha 30 years,
    Rev. Parker is well known for being in the limelight when 
    it comes to mentoring the young and leading them to Christ.
    He is married with two children. 
     `,
  },
  {
    image: './images/photo2.jpg',
    name: 'Pst James Park',
    para1: 'Theological Society of Kenya',
    para2: `A well known academician with vast experience in eveangelism.
    Well travelled and knowledgeable of various cultures. It has been a journey,
    but he says the Lord has seen him through. He is a staunch believer of repentance. 
     `,
  },
  {
    image: './images/photo3.jpg',
    name: 'Rita Martins',
    para1: 'Internatonal School',
    para2: `A founder of the Youth With a Mission evengelism group,
    Martins has transversed the world educating the youth and mentoring them
    on how to be more impactful in the society and how to make their lives better.
     `,
  },
  {
    image: './images/photo4.jpg',
    name: 'Orlando Ewings',
    para1: 'Grace Church',
    para2: `Associate pastor of the Grace Church, he has been in ministry for over two decades.
    Having risen from being a deacon to becoming a family ministry pastor and now associate pastor. He 
    assiss the senor ministry in the admistration of the church.
     `,
  },

  {
    image: './images/photo5.jpg',
    name: 'Bishop Gary Jones',
    para1: 'St Josephs Ohio',
    para2: `Has been a core contributor in the equilibrium of the Anglican Church.
    An advocate of the homeless and veterans. He runs a kitchen to feed the less unfortunate in his community..
     `,
  },
  {
    image: './images/photo6.jpg',
    name: 'James LaBron',
    para1: 'New Life Inlernationa;',
    para2: `Associate pastor of the Grace Church, he has been in ministry for over two decades.
    Having risen from being a deacon to becoming a family ministry pastor and now associate pastor. He 
    assiss the senor ministry in the admistration of the church.
     `,
  },
];

const h4 = document.createElement('h4');
h4.setAttribute('id', 'speaker-title');
const div2 = document.createElement('div');
div2.setAttribute('id', 'div2');
h4.innerHTML = 'Featured Speakers';
const containerDiv = document.createElement('div');
containerDiv.setAttribute('class', 'speaker-div');
containerDiv.append(h4, div2);
const section = document.createElement('section');
section.setAttribute('id', 'speakers');
const main = document.querySelector('main');

for (let i = 0; i <= speakers.length; i += 1) {
  const h3 = document.createElement('h3');
  h3.setAttribute('class', 'name');
  h3.innerHTML += speakers[i].name;
  const p = document.createElement('p');
  p.setAttribute('class', 'occupation');
  p.innerHTML += speakers[i].para1;
  const img = document.createElement('img');
  img.setAttribute('src', speakers[i].image);
  img.setAttribute('alt', speakers[i].image);
  const p1 = document.createElement('p');
  p1.setAttribute('class', 'description');
  p1.innerHTML = speakers[i].para2;
  const span = document.createElement('span');
  span.setAttribute('id', 'div1');

  const div = document.createElement('div');
  div.setAttribute('class', 'speaker-details');
  div.append(h3, p, span, p1);
  containerDiv.append(img, div);
  section.append(containerDiv);
  main.append(section);
}