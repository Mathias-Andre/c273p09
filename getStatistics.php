<?php

include ('dbFunctions.php');

$statistics = Array();
$query = "SELECT * FROM statistics ORDER BY id";
$result = mysqli_query($link, $query);

while ($row = mysqli_fetch_assoc($result)) {
    $statistics[] = $row;
}

mysqli_close($link);

echo json_encode($statistics);
?>
