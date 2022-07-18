const speakerArray = [
  {
    image: 'Images/photo1.jpg',
    name: 'Rachel Edwards',
    title: 'Senior Pastor',
    description: 'A determined and enrgetic evangelist with nothing to loose in spreadinng the word. Great experience in evangelism',
  },
  {
    image: 'Images/photo2.jpg',
    name: 'Rev. Tom Bwickel',
    title: 'Chief of Missons',
    description: 'Hsving transversed the world in various capacity, Tom can move mountains when it comes to teaching the bible. Worth listening to him .',
  },
  {
    image: 'Images/photo3.jpg',
    name: 'Pst Grace Roth',
    title: 'Youth Pastor',
    description: 'Experienced with the younger generation. Undestands the millenials more than he undestands himself. Surely the youth are blessed to have such a pastor.',
  },
  {
    image: 'Images/photo4.jpg',
    name: 'Grace Geralds',
    title: 'People Coach',
    description: 'Has had a good laugh when it comes to matters of the family. Nothing can go away without it being resolved. The imposible is a mindset.',
  },
  {
    image: 'Images/photo5.jpg',
    name: 'James Carter',
    title: 'Bishop Emeritus',
    description: 'Having served as a biship for over 15 years it was time to cool off in the mountais. Not for me, I believe we have the Lord to thank so spread the word. ',
  },
  {
    image: 'Images/photo6.jpg',
    name: 'Greg Labron',
    title: 'Artist',
    description: 'Uses music as a media of spreading the word. Winner of 5 grammy awards and nothing is on the way with Gods help. ',
  },
];

const cardss = document.querySelector('.speaker-container');
speakerArray.forEach((c) => {
  const card = document.createElement('article');
  card.innerHTML = (`
  <div class="speaker-main">
      <img class = "speaker-image" src="${c.image}" alt=" Image ">
      <div class="speaker-right">
          <h3> ${c.name}</h2>
          <p><i>${c.title}</i></p>
          <div class="guide_bar2"></div>
          <div class="speaker-divider-menu"></div>
          <p class="description">${c.description}</p>
      </div>
</div>
  `);
  cardss.appendChild(card);
});
