<?php
// Allow all origins (you can restrict this to specific origins for better security)
header("Access-Control-Allow-Origin: http://localhost:3000");

// Allow the methods you need (GET, POST, etc.)
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Allow specific headers if needed
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Mock data to send back
$data = [
    "message" => "Hello from PHP",
    "status" => "success"
];

// Send JSON-encoded data
echo json_encode($data);
// var_dump(json_encode($data))
?>
