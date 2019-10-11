<?php
function console($data) {
    
    if(gettype($data) === 'object' || is_array($data)) {
        $response = json_encode($data);
        echo "
        <script action='autoRemove'>
            try {
                window.ChromePhp = JSON.parse('$response');
            }catch {
                window.ChromePhp = JSON.stringify('$response');
            }
        </script>
        ";
        echo "
            <script action='autoRemove'>
                try {
                    const console____json = JSON.parse(`$response`);
                    window.ChromePhp = JSON.parse('$response');
                    console.log('JSON:', console____json);
                }catch{
                    window.ChromePhp = JSON.stringify('$response');
                    console.log('Array:', `$response`);
                }
            </script>
        ";
    }else {
        echo "
            <script action='autoRemove'>
                window.ChromePhp = '$data';
                console.log('String:', `$data`);
            </script>
        ";
    }
}
?>
