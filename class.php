<?php
if(isset($_POST['action']) && method_exists("Partner", $_POST['action'])) {
	//include("../config/console.php");
	//include("../config/global_vars.php");
	//include("../control/ChromePhp.php");
	$action = $_POST['action'];
	require("../config/db.php");
	$p = new Partner();
	$p->$action();
	unset($p);
}

class Partner {

	private $email = "";
	private $db = null;
	private $table;
	private $country;

	private $response = [];
	// Constructor
	public function __construct(){
		global $key;
		$this->email = $_SESSION['username'];
		$this->db = connectDB();
		$this->table = 'tb_partners';
		$this->country = $_COOKIE['COUNTRY'];
	}

	public function addTuples($data) {
		$this->response['tuples'] = $data;
	}

	public function statusOK() {
		$this->addResponse("status","OK");
	}
	public function error($error) {
		$this->addResponse("status","ERROR");
		$this->addResponse("message",$error);
	}

	public function addResponse($name, $data) {
		$this->response[$name] = $data;
	}

	public function getResponse() {
		$result = json_encode($this->response, JSON_FORCE_OBJECT);
		return trim($result);
	}
}

?>
