import { Link } from 'react-router-dom';
import './Footer.css';

const footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-row'>

                    <div className='footer-col'>
                        <h4>Nosotros</h4>
                        <ul>
                            <li><Link to='/'> Sobre nosotros</Link></li>
                            <li><Link to='/'> Integrantes</Link></li>
                            <li><Link to='/'> Nuestra politica</Link></li>
                        </ul>
                    </div>

                    <div className='footer-col'>
                        <h4>Ayuda</h4>
                        <ul>
                            <li><Link to='/'>Estado de la compra</Link></li>
                            <li><Link to='/'>Devoluciones</Link></li>
                            <li><Link to='/'>Medios de pago</Link></li>
                            <li><Link to='/'>Atencion al cliente</Link></li>
                        </ul>
                    </div>

                    <div className='footer-col'>
                        <h4>Redes sociales</h4>
                        <div className='redes-sociales'>
                            <Link to='/'><i><img src={require('../../assets/icons/facebook.png')} /> </i></Link>
                            <Link to='/'><i><img src={require('../../assets/icons/instagram.png')} /> </i></Link>
                            <Link to='/'><i><img src={require('../../assets/icons/twitter.png')} /> </i></Link>
                            <Link to='/'><i><img src={require('../../assets/icons/discord.png')} /> </i></Link>
                        </div>
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default footer;

