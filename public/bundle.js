document.addEventListener('DOMContentLoaded', () => {
    // Handle login form submission
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission
            // Simulate successful login (you can add actual login logic here later)
            // alert('Login successful!');
            window.location.href = '/dashboard.html'; // Redirect to /dashboard
        });
    }
});

// document.addEventListener('DOMContentLoaded', () => {
//     const root = document.getElementById('root');
//     root.innerHTML = '<h2>Welcome to Sigma Insurance CRM</h2><p>Manage your clients, policies, claims, and reports efficiently.</p>';

//     // Handle login form submission
//     const loginForm = document.getElementById('login-form');

//     if (loginForm) {
//         loginForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//             // Simulate successful login
//             alert('Login successful!');
//             window.location.href = '/dashboard'; // Redirect to /dashboard
//         });
//     }

//     // Note: The existing code had references to loginLink, signupLink, signupForm, etc.,
//     // but they don't match the provided HTML structure. I've removed those parts
//     // and kept only what's relevant to the login form redirection.

//     // Handle chatbot interactions (keeping this as is, though not present in HTML)
//     const chatbot = document.getElementById('chatbot');
//     const closeChatbotButton = document.getElementById('close-chatbot');
//     const chatbotButton = document.getElementById('chatbot-button');

//     if (chatbotButton && chatbot) {
//         chatbotButton.addEventListener('click', () => {
//             chatbot.classList.add('active');
//         });
//     }

//     if (closeChatbotButton && chatbot) {
//         closeChatbotButton.addEventListener('click', () => {
//             chatbot.classList.remove('active');
//         });
//     }

//     // Dashboard data (keeping this as is, though not used in index.html)
//     const dashboardData = [
//         {
//             companyName: 'HealthCorp',
//             industrySector: 'Healthcare',
//             engagementLevel: 'High',
//             email: 'contact@healthcorp.com',
//             phoneNumber: '123-456-7890',
//             lastInteraction: '2025-03-10 14:30'
//         },
//         {
//             companyName: 'FinanceInc',
//             industrySector: 'Finance',
//             engagementLevel: 'Medium',
//             email: 'info@financeinc.com',
//             phoneNumber: '987-654-3210',
//             lastInteraction: '2025-03-09 10:15'
//         },
//         {
//             companyName: 'TechSolutions',
//             industrySector: 'Technology',
//             engagementLevel: 'Low',
//             email: 'support@techsolutions.com',
//             phoneNumber: '555-123-4567',
//             lastInteraction: '2025-03-08 09:00'
//         }
//     ];

//     const dashboardTableBody = document.getElementById('dashboard-data');

//     if (dashboardTableBody) {
//         dashboardData.forEach((data) => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${data.companyName}</td>
//                 <td>${data.industrySector}</td>
//                 <td>${data.engagementLevel}</td>
//                 <td>${data.email}</td>
//                 <td>${data.phoneNumber}</td>
//                 <td>${data.lastInteraction}</td>
//             `;
//             dashboardTableBody.appendChild(row);
//         });
//     }

//     // Handle logout interaction (keeping this as is, though not present in HTML)
//     const logoutLink = document.getElementById('logout');
//     if (logoutLink) {
//         logoutLink.addEventListener('click', () => {
//             alert('Logout functionality is not implemented yet.');
//         });
//     }
// });