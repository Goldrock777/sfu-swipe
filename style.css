* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #7C3AED;
    --secondary: #EC4899;
    --success: #10B981;
    --warning: #F59E0B;
    --danger: #EF4444;
    --dark: #1F2937;
    --darker: #111827;
    --light: #F3F4F6;
}

html {
    height: -webkit-fill-available;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(135deg, var(--dark) 0%, var(--darker) 100%);
    color: white;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    overflow: hidden;
}

#app {
    height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 430px;
    margin: 0 auto;
    position: relative;
}

/* Header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: rgba(0,0,0,0.3);
    backdrop-filter: blur(10px);
}

.logo {
    display: flex;
    flex-direction: column;
}

.logo-text {
    font-size: 20px;
    font-weight: bold;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.tagline {
    font-size: 10px;
    color: #9CA3AF;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.header-stats {
    display: flex;
    gap: 12px;
    align-items: center;
}

.earnings-badge {
    background: linear-gradient(135deg, #10B981, #059669);
    padding: 6px 12px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 4px;
}

.dollar {
    font-size: 12px;
    opacity: 0.8;
}

.amount {
    font-size: 18px;
    font-weight: bold;
}

.label {
    font-size: 10px;
    opacity: 0.8;
}

.streak {
    background: rgba(255,255,255,0.1);
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 16px;
}

/* Success Banner */
.success-banner {
    background: linear-gradient(90deg, rgba(16,185,129,0.2), rgba(168,85,247,0.2));
    padding: 8px;
    text-align: center;
    font-size: 14px;
    animation: slideDown 0.5s ease;
}

@keyframes slideDown {
    from { transform: translateY(-100%); }
    to { transform: translateY(0); }
}

/* Category Tabs */
.category-tabs {
    display: flex;
    gap: 10px;
    padding: 15px 20px;
    overflow-x: auto;
    scrollbar-width: none;
}

.category-tabs::-webkit-scrollbar {
    display: none;
}

.tab-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 10px 16px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 60px;
}

.tab-btn.active {
    background: var(--primary);
    border-color: var(--primary);
    transform: scale(1.05);
}

.tab-icon {
    font-size: 20px;
}

/* Card Container */
.card-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 130px;
}

.card {
    width: 100%;
    max-width: 350px;
    background: white;
    color: var(--dark);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
}

.card.swipe-left {
    transform: translateX(-150%) rotate(-30deg);
    opacity: 0;
}

.card.swipe-right {
    transform: translateX(150%) rotate(30deg);
    opacity: 0;
    border: 3px solid var(--success);
}

.business-badge {
    background: linear-gradient(135deg, var(--warning), var(--danger));
    color: white;
    padding: 8px;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #E5E7EB;
}

.seller-info {
    display: flex;
    gap: 10px;
}

.seller-avatar {
    font-size: 32px;
}

.seller-name {
    font-weight: bold;
    font-size: 14px;
}

.seller-rating {
    font-size: 12px;
    color: #6B7280;
}

.verified-badge {
    background: var(--success);
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
}

.card-content {
    padding: 20px;
}

.product-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.product-description {
    font-size: 14px;
    color: #4B5563;
    line-height: 1.6;
    margin-bottom: 15px;
}

.product-tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.tag {
    background: #F3F4F6;
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 12px;
}

.price-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-top: 1px solid #E5E7EB;
    border-bottom: 1px solid #E5E7EB;
    margin-bottom: 15px;
}

.price {
    font-size: 32px;
    font-weight: bold;
    color: var(--success);
}

.availability {
    background: rgba(16,185,129,0.1);
    color: var(--success);
    padding: 6px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
}

.action-hint {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #9CA3AF;
}

/* Action Buttons */
.action-buttons {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 20px;
    position: fixed;
    bottom: 70px;
    left: 0;
    right: 0;
    max-width: 430px;
    margin: 0 auto;
    z-index: 50;
    background: linear-gradient(to top, var(--darker), transparent);
}

.action-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 12px 20px;
    border-radius: 15px;
    border: none;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    color: white;
}

.btn-label {
    font-size: 10px;
    font-weight: 600;
}

.action-btn:active {
    transform: scale(0.95);
}

.pass {
    background: #6B7280;
}

.message {
    background: var(--primary);
}

.buy {
    background: var(--success);
}

/* Bottom Navigation */
.bottom-nav {
    display: flex;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(10px);
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 100;
    max-width: 430px;
    margin: 0 auto;
    border-top: 1px solid rgba(255,255,255,0.1);
}

.nav-btn {
    flex: 1;
    background: none;
    border: none;
    color: #9CA3AF;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 11px;
}

.nav-btn.active {
    color: var(--primary);
}

.nav-btn span:first-child {
    font-size: 20px;
}

.create-btn {
    position: relative;
}

.plus-icon {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: white;
    box-shadow: 0 4px 12px rgba(124,58,237,0.4);
}

/* Pages */
.page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--darker);
    display: flex;
    flex-direction: column;
    max-width: 430px;
    margin: 0 auto;
    overflow-y: auto;
}

.hidden {
    display: none;
}

/* Page Header */
.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: rgba(0,0,0,0.3);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255,255,255,0.1);
}

.back-btn, .settings-btn, .edit-btn, .preview-btn {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
}

.page-title {
    font-size: 18px;
    font-weight: 600;
}

/* Dashboard Container */
.dashboard-container {
    padding: 20px;
}

.earnings-card {
    background: linear-gradient(135deg, var(--success), #059669);
    border-radius: 20px;
    padding: 25px;
    margin-bottom: 20px;
    text-align: center;
}

.earnings-card h3 {
    font-size: 14px;
    opacity: 0.9;
    margin-bottom: 10px;
}

.big-number {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 20px;
}

.earnings-stats {
    display: flex;
    justify-content: space-around;
}

.stat-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.stat-num {
    font-size: 20px;
    font-weight: bold;
}

.stat-label {
    font-size: 12px;
    opacity: 0.8;
}

/* Quick Actions */
.quick-actions {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
}

.quick-action-btn {
    flex: 1;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 15px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.quick-action-btn:active {
    transform: scale(0.95);
}

.action-icon {
    font-size: 24px;
}

/* Listings */
.section h3 {
    font-size: 16px;
    margin-bottom: 15px;
}

.listing-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255,255,255,0.05);
    padding: 15px;
    border-radius: 12px;
    margin-bottom: 10px;
}

.listing-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.listing-title {
    font-weight: 600;
}

.listing-stats {
    font-size: 12px;
    color: #9CA3AF;
}

.listing-price {
    font-size: 20px;
    font-weight: bold;
    color: var(--success);
}

/* Create Container */
.create-container {
    padding: 20px;
    padding-bottom: 100px;
}

.business-type-selector {
    display: flex;
    gap: 10px;
    margin-bottom: 25px;
}

.biz-type-btn {
    flex: 1;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 12px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.biz-type-btn.active {
    background: var(--primary);
    border-color: var(--primary);
}

.biz-icon {
    font-size: 24px;
}

/* Form Elements */
.form-section {
    margin-bottom: 20px;
}

.form-input, .form-textarea {
    width: 100%;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 15px;
    color: white;
    font-size: 16px;
    margin-bottom: 15px;
}

.form-textarea {
    min-height: 100px;
    resize: vertical;
}

.price-input-section {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.price-input {
    flex: 1;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 15px;
    color: white;
    font-size: 16px;
}

.availability-select {
    flex: 1;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 15px;
    color: white;
}

.delivery-options {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.tags-section h4 {
    font-size: 14px;
    margin-bottom: 10px;
    color: #9CA3AF;
}

.tag-options {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tag-option {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 8px 12px;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;
}

.tag-option.selected {
    background: var(--primary);
    border-color: var(--primary);
}

.post-listing-btn {
    width: 100%;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    border: none;
    padding: 18px;
    border-radius: 15px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(124,58,237,0.3);
}

/* Orders */
.orders-container {
    padding: 20px;
}

.order-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.order-tab {
    flex: 1;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 12px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
}

.order-tab.active {
    background: var(--primary);
    border-color: var(--primary);
}

.order-item {
    display: flex;
    align-items: center;
    gap: 15px;
    background: rgba(255,255,255,0.05);
    padding: 15px;
    border-radius: 12px;
    margin-bottom: 12px;
}

.order-status {
    padding: 6px 10px;
    border-radius: 8px;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 0.5px;
}

.order-status.pending {
    background: var(--warning);
    color: white;
}

.order-status.ready {
    background: var(--success);
    color: white;
}

.order-info {
    flex: 1;
}

.order-title {
    font-weight: 600;
    margin-bottom: 4px;
}

.order-seller, .order-time {
    font-size: 12px;
    color: #9CA3AF;
}

.order-price {
    font-size: 20px;
    font-weight: bold;
    color: white;
}

/* Profile */
.profile-container {
    padding: 20px;
}

.profile-header {
    text-align: center;
    margin-bottom: 30px;
}

.avatar-large {
    font-size: 60px;
    margin-bottom: 15px;
}

.username {
    color: #9CA3AF;
    margin-bottom: 15px;
}

.profile-badges {
    display: flex;
    gap: 8px;
    justify-content: center;
    flex-wrap: wrap;
}

.badge {
    background: rgba(255,255,255,0.1);
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 12px;
}

.business-stats {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
}

.stat-box {
    flex: 1;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 20px;
    border-radius: 12px;
    text-align: center;
}

.stat-number {
    font-size: 24px;
    font-weight: bold;
    color: var(--primary);
    margin-bottom: 8px;
}

.achievement-section h3 {
    font-size: 16px;
    margin-bottom: 15px;
}

.achievements {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 30px;
}

.achievement {
    background: rgba(255,255,255,0.05);
    padding: 10px 15px;
    border-radius: 10px;
    font-size: 14px;
}

.achievement.locked {
    opacity: 0.4;
}

.cta-button {
    width: 100%;
    background: var(--primary);
    color: white;
    border: none;
    padding: 15px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
}

/* Mobile Responsive */
@media (max-width: 430px) {
    #app, .page, .bottom-nav, .action-buttons {
        max-width: 100%;
    }
}
