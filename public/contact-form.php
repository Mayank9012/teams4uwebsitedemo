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

$firstName = isset($data['firstName']) ? trim($data['firstName']) : '';
$lastName = isset($data['lastName']) ? trim($data['lastName']) : '';
$businessEmail = isset($data['businessEmail']) ? trim($data['businessEmail']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$jobTitle = isset($data['jobTitle']) ? trim($data['jobTitle']) : '';
$company = isset($data['company']) ? trim($data['company']) : '';
$industry = isset($data['industry']) ? trim($data['industry']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';
$marketingConsent = isset($data['marketingConsent']) ? ($data['marketingConsent'] ? 'Yes' : 'No') : 'No';
$termsAccepted = isset($data['termsAccepted']) ? ($data['termsAccepted'] ? 'Yes' : 'No') : 'No';

if (empty($firstName) || empty($lastName) || empty($businessEmail) || empty($phone) || empty($jobTitle) || empty($company) || empty($industry) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'All required fields must be filled']);
    exit();
}

if (!filter_var($businessEmail, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email address']);
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

    $mail->setFrom('info@teams4u.in', 'Teams4U Contact Form');
    $mail->addAddress('info@teams4u.in');
    $mail->addReplyTo($businessEmail, "$firstName $lastName");

    $mail->isHTML(false);
    $mail->Subject = 'New Contact Form Submission - Teams4U';
    
    $emailBody = "New Contact Form Submission\n\n";
    $emailBody .= "First Name: $firstName\n";
    $emailBody .= "Last Name: $lastName\n";
    $emailBody .= "Business Email: $businessEmail\n";
    $emailBody .= "Phone: $phone\n";
    $emailBody .= "Job Title: $jobTitle\n";
    $emailBody .= "Company: $company\n";
    $emailBody .= "Industry: $industry\n";
    $emailBody .= "Message: $message\n";
    $emailBody .= "Marketing Consent: $marketingConsent\n";
    $emailBody .= "Terms Accepted: $termsAccepted\n";
    
    $mail->Body = $emailBody;

    $mail->send();
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Form submitted successfully']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to send email: ' . $mail->ErrorInfo]);
}
?>
