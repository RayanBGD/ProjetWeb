import { createClient } from 'pexels';
const img = document.getElementById('fetch');

const client = createClient('563492ad6f917000010000016ac120d8cff147a5a2b79a1cf44c40d6');
const query = 'Nature';

client.photos.search({ query, per_page: 1 }).then(photos => console.log(photos));