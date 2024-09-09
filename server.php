<?php
    $todoList = file_get_contents("./data/todolist.json");
    //var_dump($todoList); 

    $todoListJson = json_decode($todoList, true);

    header("Content-type: application/json");
    echo json_encode($todoListJson)
?>