const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');

// 1. Mở Lightbox khi click vào ảnh thumbnail
galleryItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const thumbnailSrc = e.target.src;
        
        // User Story: Loại bỏ "-thumbnail" để lấy link ảnh full-size
        const fullSizeSrc = thumbnailSrc.replace('-thumbnail', '');
        
        lightboxImage.src = fullSizeSrc;
        lightbox.style.display = 'flex'; // Hiển thị lightbox dưới dạng flex
    });
});

// 2. Đóng Lightbox khi click vào nút Close
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// 3. Đóng Lightbox khi click vào vùng nền (vùng .lightbox)
lightbox.addEventListener('click', (e) => {
    // Chỉ đóng nếu người dùng click vào nền đen, không phải click vào ảnh
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});