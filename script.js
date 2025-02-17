const thumbnails = document.querySelectorAll('.thumbnails img');
const fullImageContainer = document.querySelector('.full-image-container');
const fullImage = document.getElementById('full-image');
const closeBtn = document.querySelector('.close-btn')

thumbnails.forEach(thumbnails => {
    thumbnails.addEventListener('click', () => {
        fullImage.src = thumbnails.src;
        fullImageContainer.style.display = 'flex';
    })
})

closeBtn.addEventListener('click', () => {
    fullImageContainer.style.display = 'none';
})
