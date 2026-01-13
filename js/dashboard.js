const AUTH_KEY = 'curreca_distributor_session';

// LOGIN PAGE LOGIC
if (document.getElementById('login-form')) {
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('dist-id').value;
        const pass = document.getElementById('dist-pass').value;

        if ((id === 'DIST001' || id === 'DIST002') && pass === 'curreca123') {
            const user = { id: id, name: id === 'DIST001' ? 'MediCare Agency' : 'Assam Pharma House' };
            localStorage.setItem(AUTH_KEY, JSON.stringify(user));
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid Credentials. Try DIST001 / curreca123');
        }
    });
}

// DASHBOARD PAGE LOGIC
if (document.getElementById('dashboard-app')) {
    const session = JSON.parse(localStorage.getItem(AUTH_KEY));
    
    // Auth Check
    if (!session) {
        window.location.href = 'dashboard-login.html';
    } else {
        document.getElementById('dist-name').innerText = session.name;
    }

    // Logout
    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem(AUTH_KEY);
        window.location.href = 'index.html';
    });

    // Mock "Place Order" Functionality
    const addToCartBtns = document.querySelectorAll('.add-cart-btn'); // Would be dynamic in real app
    // Render Order History (Mock)
    const orderTable = document.getElementById('orders-body');
    if(orderTable){
        orderTable.innerHTML = `
            <tr><td>#ORD-8821</td><td>12 Jan 2026</td><td>₹ 45,200</td><td><span style="color:orange">Processing</span></td></tr>
            <tr><td>#ORD-8810</td><td>05 Jan 2026</td><td>₹ 12,500</td><td><span style="color:green">Delivered</span></td></tr>
        `;
    }
}