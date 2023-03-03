import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <main className='container'>
            <div>

                <h1 className='title'>Sobre nosotros</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quisquam repellat ea officiis aut hic
                    praesentium nisi earum totam? In consequuntur consequatur fugit mollitia, harum dicta quia quas debitis
                    nobis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos autem corrupti reprehenderit
                    inventore
                    quis quia. Obcaecati dolores adipisci magnam a impedit, minima eius. Eius dolorum illum ratione sequi
                    hic
                    necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, odio, amet vel
                    distinctio
                    numquam similique tempore nihil incidunt dignissimos saepe officiis blanditiis ea sapiente illum modi
                    consequatur sit adipisci autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
                    eos
                    deleniti veniam sed beatae distinctio! Est recusandae laborum nisi quae id laudantium voluptate, quia,
                    iusto
                    ullam iure consectetur debitis dolorum.

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quisquam repellat ea officiis aut hic
                    praesentium nisi earum totam? In consequuntur consequatur fugit mollitia, harum dicta quia quas debitis
                    nobis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos autem corrupti reprehenderit
                    inventore
                    quis quia. Obcaecati dolores adipisci magnam a impedit, minima eius. Eius dolorum illum ratione sequi
                    hic. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quisquam repellat ea officiis aut hic
                    praesentium nisi earum totam? In consequuntur consequatur fugit mollitia, harum dicta quia quas debitis
                    nobis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos autem corrupti reprehenderit
                    inventore
                    quis quia. Obcaecati dolores adipisci magnam a impedit, minima eius. Eius dolorum illum ratione sequi
                    hic</p>
            </div>
            <form>
                <div className='mb-3'>
                    <h2 className='subtitle'>Contactanos</h2>
                    <label for="exampleFormControlInput1" className='form-label'>Correo electronico</label>
                    <input type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
                <div className='mb-3'>
                    <label for="exampleFormControlTextarea1" className='form-label'>Consultanos</label>
                    <textarea className='form-control' id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
            <Link to='/'>
                <Button className='sendFormButton'>Enviar</Button>
            </Link>
        </main>
    )
}

export default AboutUs