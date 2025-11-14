// Navigation functions
function showSwipeMode() {
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('swipe-mode').classList.remove('hidden');
    loadSwipeCards();
}

function enterSwipeMode() {
    showSwipeMode();
}

function exitSwipeMode() {
    document.getElementById('swipe-mode').classList.add('hidden');
    document.getElementById('home-page').classList.remove('hidden');
}

function showCreatePost() {
    document.getElementById('create-post').classList.remove('hidden');
}

function hideCreatePost() {
    document.getElementById('create-post').classList.add('hidden');
}

// Filter home feed
function filterHome(category) {
    // Update active tab
    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter items
    const items = document.querySelectorAll('.feed-item');
    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else {
            if (item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}

// Swipe cards data
const swipeCards = [
    {
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=600&fit=crop',
        title: 'Creamy Alfredo Pasta',
        subtitle: 'Ready in 20 mins • Free delivery',
        price: 10,
        category: 'FOOD',
        distance: '0.3 km',
        seller: 'Alex Chen',
        rating: '4.9'
    },
    {
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=600&fit=crop',
        title: 'Hawaiian Pizza',
        subtitle: 'Fresh from oven • Pickup',
        price: 15,
        category: 'FOOD',
        distance: '0.5 km',
        seller: 'Pizza Master',
        rating: '4.8'
    },
    {
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=600&fit=crop',
        title: 'Bubble Tea Special',
        subtitle: 'Buy 2 get 1 free',
        price: 6,
        category: 'DRINKS',
        distance: '0.2 km',
        seller: 'Boba House',
        rating: '5.0'
    }
];

let currentCardIndex = 0;

function loadSwipeCards() {
    currentCardIndex = 0;
    updateSwipeCard();
}

function updateSwipeCard() {
    if (currentCardIndex >= swipeCards.length) {
        document.querySelector('.card-stack').innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h2>No more items!</h2>
                <p style="color: #9CA3AF; margin-top: 10px;">Check back later</p>
                <button onclick="exitSwipeMode()" style="
                    margin-top: 20px;
                    padding: 12px 30px;
                    background: linear-gradient(135deg, #FF4458, #FF6B6B);
                    border: none;
                    border-radius: 25px;
                    color: white;
                    cursor: pointer;
                ">Back to Home</button>
            </div>
        `;
        return;
    }
    
    const card = swipeCards[currentCardIndex];
    document.getElementById('current-card').innerHTML = `
        <div class="card-image">
            <img src="${card.image}" alt="${card.title}">
            <div class="image-gradient"></div>
            <div class="price-badge">$${card.price}</div>
            
            <div class="card-info">
                <div class="card-top-row">
                    <span class="card-category">${card.category}</span>
                    <span class="card-distance">${card.distance}</span>
                </div>
                <h2 class="card-title">${card.title}</h2>
                <p class="card-subtitle">${card.subtitle}</p>
                <div class="seller-row">
                    <div class="seller-info">
                        <img class="seller-pic" src="https://i.pravatar.cc/40">
                        <span class="seller-name">${card.seller}</span>
                    </div>
                    <div class="rating">★★★★★ ${card.rating}</div>
                </div>
            </div>
        </div>
        <div class="choice-badge like-badge">WANT</div>
        <div class="choice-badge nope-badge">PASS</div>
    `;
}

function swipeCard(direction) {
    const card = document.getElementById('current-card');
    
    if (direction === 'right') {
        card.classList.add('swipe-right');
        showNotification('Added to cart!');
    } else {
        card.classList.add('swipe-left');
    }
    
    setTimeout(() => {
        currentCardIndex++;
        card.classList.remove('swipe-left', 'swipe-right');
        updateSwipeCard();
    }, 300);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: #10B981;
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        font-weight: 600;
        z-index: 1000;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 2000);
}

// Handle feed item clicks
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.feed-item').forEach(item => {
        item.addEventListener('click', () => {
            if (item.dataset.category !== 'social') {
                showSwipeMode();
            }
        });
    });
});

// Handle post type selection
document.querySelectorAll('.type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});
// Add star/save functionality
function saveItem() {
    const card = document.getElementById('current-card');
    
    // Add save animation
    const star = document.createElement('div');
    star.innerHTML = '⭐';
    star.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 80px;
        z-index: 1000;
        animation: starPop 0.5s ease;
    `;
    document.body.appendChild(star);
    
    // Save to localStorage (or database)
    const currentCard = swipeCards[currentCardIndex];
    let savedItems = JSON.parse(localStorage.getItem('savedItems') || '[]');
    savedItems.push(currentCard);
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
    
    showNotification('⭐ Saved for later!');
    
    setTimeout(() => {
        star.remove();
        // Move to next card
        currentCardIndex++;
        updateSwipeCard();
    }, 500);
}

// Add CSS animation
const style = document.createElement('style');
style.textContent += `
    @keyframes starPop {
        0% { transform: translate(-50%, -50%) scale(0) rotate(0deg); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.2) rotate(180deg); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);
