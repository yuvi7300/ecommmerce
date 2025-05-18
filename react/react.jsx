import React, { useState } from 'react';

function App() {
    const [cart, setCart] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    const items = [
        {
            id: 1,
            name: 'Peter England(White)',
            price: 300,
            image: 'images/grabit1.jpeg',
        },
        {
            id: 2,
            name: 'Sneaker(White)',
            price: 200,
            image: 'images/shose1.jpeg',
        },
        {
            id: 3,
            name: 'Peter England(Casual)',
            price: 350,
            image: 'images/grabit 2.jpeg',
        },
        {
            id: 4,
            name: 'SportShoe(Greay)',
            price: 150,
            image: 'images/shose2.jpeg',
        },
        {
            id: 5,
            name: 'Peter England(White)',
            price: 300,
            image: 'images/grabit1.jpeg',
        },
        {
            id: 6,
            name: 'Sneaker(White)',
            price: 200,
            image: 'images/shose1.jpeg',
        },
        {
            id: 7,
            name: 'Peter England(Casual)',
            price: 350,
            image: 'images/grabit 2.jpeg',
        },
        {
            id: 8,
            name: 'SportShoe(Greay)',
            price: 150,
            image: 'images/shose2.jpeg',
        },
        {
            id: 9,
            name: 'Peter England(White)',
            price: 300,
            image: 'images/grabit1.jpeg',
        },
        {
            id: 10,
            name: 'Sneaker(White)',
            price: 200,
            image: 'images/shose1.jpeg',
        },
        {
            id: 11,
            name: 'Peter England(Casual)',
            price: 350,
            image: 'images/grabit 2.jpeg',
        },
        {
            id: 12,
            name: 'SportShoe(Greay)',
            price: 150,
            image: 'images/shose2.jpeg',
        },
    ];

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const handleAddToCart = () => {
        setCart([...cart, selectedItem]);
        setShowModal(false);
    };

    return (
        <div>
            <header>
                <nav>
                    <input type="search" id="search-bar" placeholder="Search for clothes and shoes" />
                    <button id="search-btn">Search</button>
                </nav>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li>
                            <button onClick={() => console.log(cart)}>Cart ({cart.length})</button>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <h1>Home Page</h1>
                <section id="mixed-pitchers">
                    {items.map((item) => (
                        <div key={item.id} className="pitcher">
                            <img src={item.image} alt={item.name} />
                            <a href="#" onClick={() => handleItemClick(item)}>
                                {item.name} - ${item.price}
                            </a>
                        </div>
                    ))}
                </section>
            </main>
            {showModal && (
                <div className="modal">
                    <h2>{selectedItem.name}</h2>
                    <p>Price: ${selectedItem.price}</p>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                    <button onClick={() => setShowModal(false)}>Close</button>
                </div>
            )}
            <footer>
                <p>&copy; 2023 Grab-It. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
