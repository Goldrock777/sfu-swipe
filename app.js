// Sample posts with real food images
const posts = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=600&fit=crop',
        title: 'Creamy Alfredo Pasta',
        subtitle: 'Ready in 20 mins • Free delivery',
        price: 10,
        category: 'FOOD',
        distance: '0.3 km away',
        seller: {
            name: 'Alex Chen',
            avatar: 'https://i.pravatar.cc/40?img=3',
            rating: 4.9,
            verified: true
        }
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=600&fit=crop',
        title: 'Hawaiian Pizza',
        subtitle: 'Hot & Fresh • Pickup at SUB',
        price: 15,
        category: 'FOOD',
        distance: '0.5 km away',
        seller: {
            name: 'Pizza Pro',
            avatar: 'https://i.pravatar.cc/40?img=5',
            rating: 4.8,
            verified: true
        }
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=600&fit=crop',
        title: 'Fresh Bubble Tea',
        subtitle: 'Brown Sugar Milk Tea',
        price: 6,
        category: 'DRINKS',
        distance: '0.2 km away',
        seller: {
            name: 'Boba Boss',
            avatar: 'https://i.pravatar.cc/40?img=8',
            rating: 5.0,
            verified: true
        }
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=600&fit=crop',
        title: 'Juicy Burger Combo',
        subtitle: 'Burger + Fries + Drink',
        price: 12,
        category: 'FOOD',
        distance: '0.4 km away',
        seller: {
            name: 'Burger Lab',
            avatar: 'https://i.pravatar.cc/40?img=12',
            rating: 4.7,
            verified: false
        }
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=600&fit=crop',
        title: 'Healthy Salad Bowl',
        subtitle: 'Vegan • Gluten Free',
        price: 8,
        category: 'FOOD',
        distance: '0.6 km away',
        seller: {
            name: 'Green Life',
            avatar: 'https://i.pravatar.cc/40?img=15',
            rating: 4.6,
            verified: true
        }
    }
];

let currentIndex = 0;

// Update card display
function updateCard() {
    if (currentIndex >= posts.length) {
        showEndOfCards();
        return;
    }
    
    const post = posts[currentIndex];
    const card = document.getElementById('current-card');
    
    card.innerHTML = `
        <div class="card-image">
            <img src="${post.image}" alt="${post.title}">
            <div class="image-gradient"></div>
            <div class="price-badge">$${post.price}</div>
            
            <div class="card-info">
                <div class="card-top-row">
                    <span class="card-category">${post.category}</span>
                    <span class="card-distance">${post.distance}</span>
                </div>
                
                <h2 class="card-title">${post.title}</h2>
                <p class="card-subtitle">${post.subtitle}</p>
                
                <div class="seller-row">
                    <div class="seller-info">
                        <img class="seller-pic" src="${post.seller.avatar}" alt="${post.seller.name}">
                        <span class="seller-name">${post.seller.name}</span>
                        ${post.seller.verified ? `
                            <svg class="verified-check" width="16" height="16" viewBox="0 0 24 24" fill="#3B82F6">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        ` : ''}
                    </div>
                    <div class="rating">
                        <span class="stars">★★★★★</span>
                        <span class="rating-count">${post.seller.rating}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="choice-badge like-badge">WANT</div>
        <div class="choice-badge nope-badge">PASS</div>
    `;
}

// Swipe functionality with touch
let startX = null;
let currentX = null;
let cardBeingDragged = null;

function handleStart(e) {
    cardBeingDragged = document.getElementById('current-card');
    startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
}

function handleMove(e) {
    if (!startX || !cardBeingDragged) return;
    
    currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const diffX = currentX - startX;
    const rotate = diffX * 0.1;
    
    cardBeingDragged.style.transform = `translateX(${diffX}px) rotate(${rotate}deg)`;
    
    if (diffX > 50) {
        cardBeingDragged.classList.add('swipe-right');
        cardBeingDragged.classList.remove('swipe-left');
    } else if (diffX < -50) {
        cardBeingDragged.classList.add('swipe-left');
        cardBeingDragged.classList.remove('swipe-right');
    } else {
        cardBeingDragged.classList.remove('swipe-left', 'swipe-right');
    }
}

function handleEnd() {
    if (!startX || !cardBeingDragged) return;
    
    const diffX = currentX - startX;
    const threshold = 80;
    
    if (Math.abs(diffX) > threshold) {
        const direction = diffX > 0 ? 'right' : 'left';
        swipeCard(direction);
    } else {
        cardBeingDragged.style.transform = '';
        cardBeingDragged.classList.remove('swipe-left', 'swipe-right');
    }
    
    startX = null;
    currentX = null;
    cardBeingDragged = null;
}

// Add touch listeners
document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('current-card');
    
    // Touch events
    card.addEventListener('touchstart', handleStart, {passive: true});
    card.addEventListener('touchmove', handleMove, {passive: true});
    card.addEventListener('touchend', handleEnd);
    
    // Mouse events (for desktop testing)
    card.addEventListener('mousedown', handleStart);
    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseup', handleEnd);
    card.addEventListener('mouseleave', handleEnd);
    
    updateCard();
});

// Swipe card function
function swipeCard(direction) {
    const card = document.getElementById('current-card');
    
    if (direction === 'right') {
        card.classList.add('swipe-right');
        showNotification('Added to cart!');
    } else {
        card.classList.add('swipe-left');
    }
    
    setTimeout(() => {
        currentIndex++;
        updateCard();
        card.classList.remove('swipe-left', 'swipe-right');
        card.style.transform = '';
    }, 300);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(16, 185, 129, 0.9);
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        font-weight: 600;
        z-index: 1000;
        animation: slideUp 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 2000);
}

// Show end of cards
function showEndOfCards() {
    const stack = document.querySelector('.card-stack');
    stack.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <div style="font-size: 60px; margin-bottom: 20px;">✨</div>
            <h2 style="font-size: 24px; margin-bottom: 10px;">You've seen it all!</h2>
            <p style="color: #9CA3AF;">Check back in a bit for more</p>
            <button onclick="location.reload()" style="
                margin-top: 20px;
                padding: 12px 30px;
                background: linear-gradient(135deg, #FF4458, #FF6B6B);
                border: none;
                border-radius: 25px;
                color: white;
                font-weight: 600;
                cursor: pointer;
            ">Refresh</button>
        </div>
    `;
}

// Page navigation
function showPage(page) {
    if (page === 'home') {
        document.getElementById('app').style.display = 'flex';
        document.getElementById('create-page').classList.add('hidden');
    } else if (page === 'create') {
        document.getElementById('create-page').classList.remove('hidden');
    }
}

// Select image (placeholder)
function selectImage() {
    showNotification('Camera opening...');
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from { transform: translate(-50%, 100%); opacity: 0; }
        to { transform: translate(-50%, 0); opacity: 1; }
    }
`;
document.head.appendChild(style);
