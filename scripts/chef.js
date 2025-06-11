function completeOrder(orderId) {
    if (confirm(`Mark Order #${orderId} as completed?`)) {
        const orderCard = document.querySelector(`.order-id:contains("Order #${orderId}")`).closest('.order-card');
        orderCard.querySelector('.order-actions').innerHTML = `
            <span class="completed-badge">
                <i class="fas fa-check-circle"></i> Completed
            </span>
        `;
        orderCard.style.borderLeft = '5px solid #4CAF50';
        
        // In real app: Send notification to student here
        console.log(`Notification sent for Order #${orderId}`);
    }
}