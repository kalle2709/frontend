<?php
session_start();

// Allow CORS requests from any origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json"); // Set the response type to JSON

// Handle OPTIONS requests sent by browsers before actual POST requests (preflight for CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Define the external API URL to fetch products
$apiUrl = "https://fakestoreapi.com/products";

// Fetch products from the external API and return them
$apiUrl = "https://example.com/api/endpoint";

// Fetch data from the API
$response = file_get_contents($apiUrl);

// Check if the request was successful
if ($response !== false) {
    // Decode JSON data to an associative array
    $data = json_decode($response, true);

    // Print the data
    echo "<pre>";
    print_r($data);
    echo "</pre>";
} else {
    echo "Error: Could not fetch data from the API.";
}

// if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'getProducts') {
//     $products = file_get_contents($apiUrl); // Decode the JSON response into an array
//     echo json_encode($products); // Send back as JSON
//     var_dump(json_encode($products));
//     exit();
// }

// Add item to cart
// if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'addToCart') {
//     $productId = $_POST['product_id'];

//     // Initialize cart if not set
//     if (!isset($_SESSION['cart'])) {
//         $_SESSION['cart'] = [];
//     }

//     // Add to cart or increase quantity if item exists
//     if (!isset($_SESSION['cart'][$productId])) {
//         $_SESSION['cart'][$productId] = 1;
//     } else {
//         $_SESSION['cart'][$productId]++;
//     }

//     echo json_encode(["cart" => $_SESSION['cart']]);
//     exit();
// }

// Retrieve cart items
// if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'getCart') {
//     echo json_encode(["cart" => $_SESSION['cart'] ?? []]);
//     exit();
// }

// Update or remove item in the cart
// if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'updateCart') {
//     $productId = $_POST['product_id'];
//     $quantity = (int)$_POST['quantity'];

//     // If quantity is 0 or negative, remove item from cart
//     if ($quantity <= 0) {
//         unset($_SESSION['cart'][$productId]);
//     } else {
//         $_SESSION['cart'][$productId] = $quantity;
//     }

//     echo json_encode(["cart" => $_SESSION['cart']]);
//     exit();
// }
?>
