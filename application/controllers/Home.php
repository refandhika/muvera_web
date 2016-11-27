<?php
require_once(APPPATH.'third_party/ChromePhp.php');
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function index()
	{
		$data['title'] = 'Muvera';

		$this->load->view('template/header', $data);
		$this->load->view('pages/home', $data);
		$this->load->view('template/footer', $data);

	}
}