---
title: PHP Snippets
---

```php
define('PHPMAILERHOST', 'email-smtp.us-east-1.amazonaws.com');
define('PHPMAILERPORT', 587);
define("PHPMAILER_SECURE", 'tls');

$phpmailer_smtpuser = 'AKIAXGYXHSXXLB4ANFNN';
$phpmailer_smtppassword = 'BAroBzqSTsbzXvqwdTrpy9UZJbi/T1NNxfbZNWixhVnw';

$phpmailer_smtpoptions = array(
  'ssl' => array(
    'verify_peer' => false,
    'verify_peer_name' => false,
    'allow_self_signed' => true
  )
);
```
