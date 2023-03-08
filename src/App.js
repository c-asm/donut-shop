// Components
import Header from './components/Header';
import DonutCard from './components/DonutCard';

// Styles
import './css/Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Assets
import donuts_img from './assets/img/donuts.hd.png';
import donut_pink_image from "./assets/img/donut.pink.png";
import donut_blue_image from "./assets/img/donut.blue.png";


export default function App() {
	return (<>
		<Header />

		<Container>
			<Row id='main-row'>				
				<Col sm={7} id='main-col'>
					<div id='title'>
						<span>Donuts are good!</span><br/>
						<span>And you can try them out right now!</span>
					</div>

					<div id='card-list'>
						<DonutCard name='Blue color' image={donut_blue_image} price='$1.99' />
						<DonutCard name='Pink color' image={donut_pink_image} price='$2.59' />
					</div>
				</Col>

				<Col id='donutsimg' className='d-none d-xl-block'>
					<img src={donuts_img} />
				</Col>
			</Row>
		</Container>
	</>)
}