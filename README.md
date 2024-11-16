**Project Name**

This is a simple e-commerce application with a basic login system, product display, shopping cart, and contact form. The app uses PHP for API handling and React for the front-end to display the UI and manage user interactions.

**Table of Contents**

1.Installation
2.Features
3.Technologies Used
4.Usage

**Installation**

**Prerequisites**
To run this application, make sure you have the following installed:

1. PHP (for running the backend server)
2. Node.js and npm (for running the React frontend)
3. A browser to access the app


**Steps to run the application**

1. Clone the repository:
   git clone <repository-url>
2. Navigate to the frontend directory and install the necessary dependencies:
   cd frontend
   npm install
3. Start the PHP server:
   php -S localhost:8000
4. Start the React app:
   npm start

   This will start the React app on http://localhost:3000, which will communicate with the PHP backend at    http://localhost:8000.

**Features**

1. **Login Page**: Accepts any user data (username and password) with no validation. The login button is initially disabled and becomes enabled once both fields are populated.
2. **Home Page**: After login, the user is redirected to the home page, which contains a navigation menu with options for Home, Products, Shopping Cart, and Contact. It also displays the Avatar and a Logout button on top.
3. **Products Page**: Displays product data fetched from the PHP backend, which pulls data from an external API. Products include details such as title, price, category, description, and image. Each product has an Add to Cart button that navigates to the cart page.
4. **Cart Page**: Shows the products added to the cart. Users can increase or decrease the quantity of items, and the total price updates accordingly. Multiple items can be added. There is a Process button that opens a modal for card details input.
5. P**ayment Success**: After entering card details, an alert appears confirming payment success, and the user is navigated back to the home page.
6. **Contact Page:** Accepts user input for name, email, and message. Upon form submission, a modal appears confirming that the response has been received.

**Technologies Used**

**Frontend:**
React for building the user interface
Bootstrap for styling
Redux for state management (for cart functionality)
React Router for navigation between pages
**Backend:**
PHP for handling API calls and serving data to the frontend
cURL in PHP to fetch data from an external API


**Images:**

**Login page**

![image](https://github.com/user-attachments/assets/c59fdea6-3e2f-419b-b034-719b66b21e3a)

**Home Page**

![image](https://github.com/user-attachments/assets/6a874bfa-d27a-4288-8e68-8fbbd08ecbce)

**Products Page**

![image](https://github.com/user-attachments/assets/01d0103c-c8ab-4c19-b297-eada90ab8e76)


**Shopping cart with no items**
![image](https://github.com/user-attachments/assets/b6784b18-6e4e-41d0-a3e4-ceef804b207e)

**Cart with items**

![image](https://github.com/user-attachments/assets/b5a679f6-3494-4cb6-98f4-a9ec90af3d2a)


**Proceed Action**

![image](https://github.com/user-attachments/assets/18fc3e22-d32e-4e84-8c82-d7c621e880e4)

**Confirmation Alert**

![image](https://github.com/user-attachments/assets/46c29190-aed7-460c-8ba2-6f78c259be48)

**Contact Page**

![image](https://github.com/user-attachments/assets/ad3f4be7-aecd-4cf4-b290-5bc31caea6f9)


**Response Confirmation**
![image](https://github.com/user-attachments/assets/efd6c75d-b7d3-4031-8e33-d0c7915a3a40)










