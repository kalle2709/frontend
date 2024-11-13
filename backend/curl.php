<?php
// Define the API endpoint URL
$apiUrl = "https://example.com/api/endpoint";

// Initialize cURL
$ch = curl_init();

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return response as a string

// Execute the GET request
$response = curl_exec($ch);

// Check for errors
if ($response === false) {
    echo "cURL Error: " . curl_error($ch);
} else {
    // Decode JSON data to an associative array
    $data = json_decode($response, true);

    // Print the data for testing
    echo "<h3>API Response:</h3>";
    echo "<pre>";
    print_r($data); // Displays the data in a human-readable format
    echo "</pre>";
}

// Close cURL session
curl_close($ch);
?>
