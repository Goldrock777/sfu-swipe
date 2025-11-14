// Add these new business-focused posts
const businessPosts = [
    {
        category: 'FOOD',
        title: 'Fresh Pasta - $10',
        description: 'Homemade alfredo or marinara. Ready in 20 mins. Free delivery to AQ!',
        price: 10,
        author: 'Pasta Pro',
        avatar: '👨‍🍳',
        rating: '4.8',
        sales: 23,
        tags: ['Delivery', 'Pickup', 'Vegetarian'],
        verified: true
    },
    {
        category: 'FOOD',
        title: 'Meal Prep Bundle',
        description: '5 healthy meals for $40. Chicken, rice, veggies. Perfect for busy week!',
        price: 40,
        author: 'Meal Master',
        avatar: '🍱',
        rating: '4.9',
        sales: 47,
        tags: ['Healthy', 'Bulk Deal', 'Gluten-Free']
    },
    {
        category: 'MARKETPLACE',
        title: 'CMPT Textbooks Bundle',
        description: 'All CMPT 120, 125, 225 books. Save $100 vs bookstore!',
        price: 120,
        author: 'Book Dealer',
        avatar: '📚',
        rating: '5.0',
        sales: 12
    },
    {
        category: 'SERVICES',
        title: 'Math Tutoring',
        description: 'Calc I & II help. $25/hour. 90% of my students get A or B!',
        price: 25,
        author: 'Math Genius',
        avatar: '🧮',
        rating: '4.9',
        sales: 89
    },
    {
        category: 'SOCIAL',
        title: 'Prof just extended deadline!',
        description: 'CMPT 276 assignment now due Monday instead of Friday. We live another day!',
        author: 'Lucky Student',
        avatar: '😅',
        meme: true
    }
];

// Replace old posts array with business posts
let posts = [...businessPosts];

// Function to message seller
function messageSeller() {
    showNotification('Opening chat with seller...');
    // In real app, would open chat
}

// Function to select business type
function selectBusinessType(type) {
    document.querySelectorAll('.biz-type-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.closest('.biz-type-btn').classList.add('active');
    
    // Update form based on type
    const titleInput = document.getElementById('title-input');
    const descInput = document.getElementById('description-input');
    const priceSection = document.querySelector('.price-input-section');
    
    switch(type) {
        case 'food':
            titleInput.placeholder = 'What food are you selling?';
            descInput.placeholder = 'Describe your dish, ingredients, portion size...';
            priceSection.style.display = 'flex';
            break;
        case 'product':
            titleInput.placeholder = 'What product are you selling?';
            descInput.placeholder = 'Condition, brand, why you\'re selling...';
            priceSection.style.display = 'flex';
            break;
        case 'service':
            titleInput.placeholder = 'What service do you offer?';
            descInput.placeholder = 'Your experience, availability, what\'s included...';
            priceSection.style.display = 'flex';
            break;
        case 'meme':
            titleInput.placeholder = 'Got campus tea to spill?';
            descInput.placeholder = 'Share your meme, joke, or campus update...';
            priceSection.style.display = 'none';
            break;
    }
}

// Create listing function
function createListing() {
    const title = document.getElementById('title-input').value;
    const description = document.getElementById('description-input').value;
    const price = document.getElementById('price-input').value;
    
    if (!title || !description) {
        showNotification('Fill in all fields!');
        return;
    }
    
    // Add to posts
    const newListing = {
        category: document.querySelector('.biz-type-btn.active span:last-child').textContent.toUpperCase(),
        title: title,
        description: description,
        price: price ? parseInt(price) : null,
        author: 'You',
        avatar: '👤',
        rating: 'New Seller',
        sales: 0,
        time: 'Just now'
    };
    
    posts.unshift(newListing);
    showNotification('Listed! Your product is live 🚀');
    
    // Clear form
    document.getElementById('title-input').value = '';
    document.getElementById('description-input').value = '';
    document.getElementById('price-input').value = '';
    
    // Go to marketplace
    setTimeout(() => {
        showPage('marketplace');
        currentCardIndex = 0;
        updateCard();
    }, 1000);
}

// Update showPage function for new pages
function showPage(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    const mainApp = document.getElementById('app');
    
    // Reset nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    switch(page) {
        case 'marketplace':
            mainApp.style.display = 'flex';
            document.getElementById('sell-page').classList.add('hidden');
            document.getElementById('create-page').classList.add('hidden');
            document.getElementById('orders-page').classList.add('hidden');
            document.getElementById('profile-page').classList.add('hidden');
            document.querySelectorAll('.nav-btn')[0].classList.add('active');
            break;
        case 'sell':
            mainApp.style.display = 'none';
            document.getElementById('sell-page').classList.remove('hidden');
            document.querySelectorAll('.nav-btn')[1].classList.add('active');
            break;
        case 'create':
            mainApp.style.display = 'none';
            document.getElementById('create-page').classList.remove('hidden');
            break;
        case 'orders':
            mainApp.style.display = 'none';
            document.getElementById('orders-page').classList.remove('hidden');
            document.querySelectorAll('.nav-btn')[3].classList.add('active');
            break;
        case 'profile':
            mainApp.style.display = 'none';
            document.getElementById('profile-page').classList.remove('hidden');
            document.querySelectorAll('.nav-btn')[4].classList.add('active');
            break;
    }
}

// Preview listing
function previewListing() {
    showNotification('Preview coming soon!');
}

// Initialize tag selection
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('tag-option')) {
        e.target.classList.toggle('selected');
    }
});
