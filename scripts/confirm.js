document.addEventListener('DOMContentLoaded', () => {
    const orderData = JSON.parse(sessionStorage.getItem('currentOrder'));

    // This how it was in the prev page, use it 
        // const orderData = {
        //     items: orderItems,
        //     total: orderItems.reduce((sum, item) => sum + item.totalPrice, 0),
        //     date: new Date().toLocaleString(),
        //     orderId: Math.floor(Math.random() * 1000000)
        // };
    
    if (!orderData) {
        window.location.href = 'meals.html';
        return;
    };
});