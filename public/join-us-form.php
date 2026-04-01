<?php
require 'PHPMAILER/PHPMailer.php';
require 'PHPMAILER/SMTP.php';
require 'PHPMAILER/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

error_reporting(0);
ini_set('display_errors', 0);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit();
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON data']);
    exit();
}

$fullName = isset($data['fullName']) ? trim($data['fullName']) : '';
$mobile = isset($data['mobile']) ? trim($data['mobile']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$state = isset($data['state']) ? trim($data['state']) : '';
$city = isset($data['city']) ? trim($data['city']) : '';
$pincode = isset($data['pincode']) ? trim($data['pincode']) : '';
$workTypes = isset($data['workTypes']) ? $data['workTypes'] : [];
$availability = isset($data['availability']) ? $data['availability'] : [];
$languages = isset($data['languages']) ? $data['languages'] : [];
$hasSmartphone = isset($data['hasSmartphone']) ? $data['hasSmartphone'] : '';
$hasExperience = isset($data['hasExperience']) ? $data['hasExperience'] : '';
$consentAccurate = isset($data['consentAccurate']) ? ($data['consentAccurate'] ? 'Yes' : 'No') : 'No';
$consentTerms = isset($data['consentTerms']) ? ($data['consentTerms'] ? 'Yes' : 'No') : 'No';
$consentCommunication = isset($data['consentCommunication']) ? ($data['consentCommunication'] ? 'Yes' : 'No') : 'No';

if (empty($fullName) || empty($mobile) || empty($state) || empty($city) || empty($pincode)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'All required fields must be filled']);
    exit();
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'info@teams4u.in';
    $mail->Password = 'clfs iwjy nzqw amzo';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('info@teams4u.in', 'Teams4U Join Us Form');
    $mail->addAddress('info@teams4u.in');
    if (!empty($email)) {
        $mail->addReplyTo($email, $fullName);
    }

    $mail->isHTML(false);
    $mail->Subject = 'New Join Us Application - Teams4U';
    
    $emailBody = "New Join Us Application\n\n";
    $emailBody .= "Full Name: $fullName\n";
    $emailBody .= "Mobile: $mobile\n";
    $emailBody .= "Email: $email\n";
    $emailBody .= "State: $state\n";
    $emailBody .= "City: $city\n";
    $emailBody .= "Pincode: $pincode\n";
    $emailBody .= "Work Types: " . implode(', ', $workTypes) . "\n";
    $emailBody .= "Availability: " . implode(', ', $availability) . "\n";
    $emailBody .= "Languages: " . implode(', ', $languages) . "\n";
    $emailBody .= "Has Smartphone: $hasSmartphone\n";
    $emailBody .= "Has Experience: $hasExperience\n";
    $emailBody .= "Consent Accurate: $consentAccurate\n";
    $emailBody .= "Consent Terms: $consentTerms\n";
    $emailBody .= "Consent Communication: $consentCommunication\n";
    
    $mail->Body = $emailBody;

    $mail->send();
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Application submitted successfully']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to send email: ' . $mail->ErrorInfo]);
}
?>
