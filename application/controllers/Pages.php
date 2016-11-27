<?php
require_once(APPPATH.'third_party/ChromePhp.php');
defined('BASEPATH') OR exit('No direct script access allowed');

class Pages extends CI_Controller {

	public function index()
	{
		$data['title'] = 'Muvera';

		$this->load->view('template/header', $data);
		$this->load->view('pages/home', $data);
		$this->load->view('template/footer', $data);

	}

	public function aboutus()
	{
		$data['title'] = 'About Us';

		$this->load->view('template/header', $data);
		$this->load->view('pages/aboutus', $data);
		$this->load->view('template/footer', $data);

	}

	public function contact()
	{
		$data['title'] = 'Contact';

		$this->load->view('template/header', $data);
		$this->load->view('pages/contact', $data);
		$this->load->view('template/footer', $data);

	}

	public function product()
	{
		$data['title'] = 'Product';

		$this->load->view('template/header', $data);
		$this->load->view('pages/product', $data);
		$this->load->view('template/footer', $data);

	}

	public function service()
	{
		$data['title'] = 'Service';

		$this->load->view('template/header', $data);
		$this->load->view('pages/service', $data);
		$this->load->view('template/footer', $data);

	}

}