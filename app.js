// SFU Swipe - Main App Logic
let currentCardIndex = 0;
let points = 156;
let streak = 7;
let coins = 50;

// Sample data
const posts = [
    {
        category: 'MARKETPLACE',
        title: 'Selling CMPT 120 Textbook',
        description: 'Great condition, no highlighting. Includes all online codes unused.',
        price: 40,
        author: 'Anonymous Raccoon',
        avatar: '🦝',
        time: '2 mins ago'
    },
    {
        category: 'SOCIAL',
        title: 'Study group for MATH 152?',
        description: 'Looking for people to form a study group. Meeting twice a week at the library.',
        author: 'Study Fox',
        avatar: '🦊',
        time: '5 mins ago'
    },
    {
        category: 'SERVICES',
        title: 'Photography for graduation',
        description: 'Professional photographer offering graduation photoshoots. Portfolio available.',
        price: 80,
        author: 'Photo Owl',
        avatar: '🦉',
        time: '10 mins ago'
    },
    {
        category: 'SOCIAL',
        title: 'Free coffee at MBC!',
        description: 'Computer Science society giving out free coffee until 3pm today!',
        author: 'Coffee Bear',
        avatar: '🐻',
        time: '15 mins ago'
    },
    {
        category: 'MARKETPLACE',
        title: 'Nintendo Switch for sale',
        description: 'Comes with 3 games and pro controller. Perfect for study breaks!',
        price: 250,
        author: 'Gamer Eagle',
        avatar: '🦅',
        time: '20 mins ago'
    }
];

// Swipe card function
function swipeCard(direction) {
    const card = document.getElementById('current-card');
    
    if (direction === 'right') {
        card.classList.add('swipe-right');
        points += 5;
        showNotification('❤️ Saved!');
    } else {
        card.classList.add('swipe-left');
        points += 1;
        showNotification('👍 Next!');
    }
    
    setTimeout(() => {
        currentCardIndex++;
        if (currentCardIndex < posts.length) {
            updateCard();
            card.classList.remove('swipe-left', 'swipe-right');
        } else {
            showEndOfCards();
        }
    }, 300);
}

// Update card content
function updateCard() {
    const post = posts[currentCardIndex];
    const card = document.getElementById('current-card');
    
    card.innerHTML = `
        <div class="card-header">
            <span class="category">${post.category}</span>
            <span class="time">${post.time}</span>
        </div>
        <div class="card-content">
            <h2 class="card-title">${post.title}</h2>
            <p class="card-description">${post.description}</p>
            ${post.price ? `<div class="card-price">$${post.price}</div>` : ''}
        </div>
        <div class="card-author">
            <div class="avatar">${post.avatar}</div>
            <span>${post.author}</span>
        </div>
    `;
}

// Super like function
function superLike() {
    const card = document.getElementById('current-card');
    showNotification('⭐ Super Liked!');
    points += 10;
    swipeCard('right');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 20px 40px;
        border-radius: 50px;
        font-size: 24px;
        z-index: 1000;
        animation: fadeOut 1s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 1000);
}

// Show end of cards
function showEndOfCards() {
    const container = document.querySelector('.card-container');
    container.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 60px; margin-bottom: 20px;">🎉</div>
            <h2>No more posts!</h2>
            <p style="color: #9CA3AF; margin-top: 10px;">Check back later or create your own</p>
            <button onclick="location.reload()" style="
                margin-top: 20px;
                padding: 10px 30px;
                background: #A855F7;
                color: white;
                border: none;
                border-radius: 20px;
                cursor: pointer;
            ">Refresh</button>
        </div>
    `;
}

// Page navigation
function showPage(page) {
    // Hide all pages
    document.getElementById('app').style.display = 'none';
    document.getElementById('hunt-page').classList.add('hidden');
    document.getElementById('create-page').classList.add('hidden');
    document.getElementById('profile-page').classList.add('hidden');
    
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected page
    switch(page) {
        case 'swipe':
            document.getElementById('app').style.display = 'flex';
            document.querySelectorAll('.nav-btn')[0].classList.add('active');
            break;
        case 'hunt':
            document.getElementById('hunt-page').classList.remove('hidden');
            document.querySelectorAll('.nav-btn')[1].classList.add('active');
            break;
        case 'create':
            document.getElementById('create-page').classList.remove('hidden');
            document.querySelectorAll('.nav-btn')[2].classList.add('active');
            break;
        case 'profile':
            document.getElementById('profile-page').classList.remove('hidden');
            document.querySelectorAll('.nav-btn')[3].classList.add('active');
            break;
    }
}

// QR Scanner simulation
function startScan() {
    showNotification('📷 Opening camera...');
    setTimeout(() => {
        const rewards = [
            '🎉 Found rare hoodie!',
            '💰 Earned 10 coins!',
            '👕 Unlocked SFU T-shirt!',
            '🏆 Secret achievement unlocked!'
        ];
        const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
        showNotification(randomReward);
        coins += 10;
    }, 2000);
}

// Avatar customization
function customizeAvatar() {
    showNotification('🎨 Avatar editor coming soon!');
}

// Wardrobe
function openWardrobe() {
    showNotification('👕 You have 12 items!');
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') swipeCard('left');
    if (e.key === 'ArrowRight') swipeCard('right');
    if (e.key === 'ArrowUp') superLike();
});

// Add swipe gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
});

function handleSwipeGesture() {
    if (touchEndX < touchStartX - 50) swipeCard('left');
    if (touchEndX > touchStartX + 50) swipeCard('right');
}

// Add CSS for fade animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);
