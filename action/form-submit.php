<?php
  $vname = $_POST['name'];
  $vemail = $_POST['email'];
  $vquery = $_POST['query'];
  $vmessage = $_POST['info'];

  $email_from = "test@gmail.com";

  $email_subject = "New Website Submission";

  $email_body = "Visitor Name: $vname.\n".
                  "Visitor Email: $vemail.\n".
                    "Visitor Subject: $vquery.\n".
                      "Visitor Message: $vmessage.\n";

  $to = "bradleyarcher98@gmail.com";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $vemail \r\n";

  mail($to,$email_subject,$email_body,$headers);

  header("location: contact.html");

?>
