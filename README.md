
🛒 Pokémon Shop

A modern and stylish web application built with React.js that allows users to browse Pokémon, add them to a cart or wishlist, and explore their details. The app integrates with the PokéAPI to fetch dynamic data and provides a seamless user experience with features like a responsive design, a category-based sidebar, and persistent cart/wishlist using localStorage.
📸 Screenshots
Home Page

    Browse Pokémon with pricing and interactive buttons.
    Sidebar for filtering Pokémon by type.

Details Page

    View detailed stats, abilities, and characteristics of a Pokémon.
    Beautiful card layout for enhanced readability.

🚀 Features

    Pokémon Browsing:
        Explore Pokémon fetched from the PokéAPI.
        Dynamic pricing and visual previews.

    Search Functionality:
        Search for Pokémon by their names.

    Category Sidebar:
        Filter Pokémon by types (e.g., Fire, Water, Grass).

    Wishlist & Cart:
        Add Pokémon to the cart or wishlist with visual feedback.
        Persistent state using localStorage.

    Details Page:
        Comprehensive stats, abilities, and additional details for each Pokémon.

    Responsive Design:
        Mobile-friendly layout using Bootstrap.

    Interactive Animations:
        Hover effects and loading spinners for better UX.

🛠️ Technologies Used

    Frontend:
        React.js - A JavaScript library for building user interfaces.
        React Router - For navigation and routing.
        Bootstrap - For styling and responsive design.
        React-Toastify - For notifications.

    API:
        PokéAPI - A RESTful Pokémon API.

📂 Folder Structure

src/
├── components/
│   ├── Sidebar.js         # Sidebar for Pokémon types
│   ├── Navbar.js          # Navigation bar
├── context/
│   ├── ShopContext.js     # State management for cart and wishlist
├── pages/
│   ├── Home.js            # Main page for browsing Pokémon
│   ├── Details.js         # Detailed view of a Pokémon
│   ├── Cart.js            # Cart page
│   ├── Wishlist.js        # Wishlist page
├── services/
│   ├── api.js             # API integration with PokéAPI
├── App.js                 # Main React app
├── index.js               # Entry point

⚙️ Installation and Setup

    Clone the repository:

git clone https://github.com/your-username/pokemon-shop.git
cd pokemon-shop

Install dependencies:

npm install
# or
yarn install

Run the application:

npm start
# or
yarn start

Build the application for production:

    npm run build
    # or
    yarn build

🌟 Features Breakdown
1. Pokémon Listing

    Browse through Pokémon with their names, prices, and images.
    Filter them dynamically using the sidebar categories.

2. Persistent Cart and Wishlist

    Add Pokémon to your cart or wishlist with instant feedback.
    Data persists across page reloads using localStorage.

3. Pokémon Details

    View a detailed Pokémon card with stats, abilities, and more.

📋 Future Improvements

    Add user authentication for personalized carts and wishlists.
    Improve sidebar filtering with multiple type selections.
    Include pagination for the Pokémon list.
    Integrate payment processing for a real-world shopping experience.

🧑‍💻 Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

    Fork the repo.
    Create a new branch:

git checkout -b feature/your-feature-name

Commit your changes:

git commit -m "Add some feature"

Push to the branch:

    git push origin feature/your-feature-name

    Open a pull request.

📜 License

This project is licensed under the MIT License. See the LICENSE file for details.
🙌 Acknowledgments

    PokéAPI for the amazing Pokémon data.
    React.js for the incredible framework.
    Bootstrap for the responsive styling.
