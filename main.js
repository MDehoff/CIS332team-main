const form = document.querySelector('form');
const container = document.querySelector('.image-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let query = form.querySelector('input').value.trim();
  if (query === '') query = 'marvel'; // default search
  tvMazeAPI(query);
});

async function tvMazeAPI(query) {
  container.innerHTML = '<p style="color:white;text-align:center;">Loading...</p>';
  try {
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const movies = await req.json();
    makeImages(movies);
  } catch (err) {
    console.error('Error fetching API:', err);
    container.innerHTML = '<p style="color:red;text-align:center;">Error loading data.</p>';
  }
}

function makeImages(movies) {
  container.innerHTML = ''; // clear old results

  if (!movies.length) {
    container.innerHTML = '<p style="color:white;text-align:center;">No movies found.</p>';
    return;
  }

  for (let movie of movies) {
    const show = movie.show;
    const poster = show.image ? show.image.medium : 'https://via.placeholder.com/210x295?text=No+Image';
    const title = show.name || 'Untitled';
    const rating = show.rating.average ? show.rating.average : 'N/A';
    const genres = show.genres.length ? show.genres.join(', ') : 'Unknown';
    const summary = show.summary ? show.summary.replace(/<[^>]+>/g, '') : 'No description available.';

    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.innerHTML = `
      <img src="${poster}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <p><strong>Rating:</strong> ${rating}</p>
        <p><strong>Genres:</strong> ${genres}</p>
        <p>${summary.slice(0, 100)}...</p>
        <a href="details.html?id=${show.id}" class="details-link">View Details</a>
      </div>
    `;
    container.appendChild(card);
  }
}
