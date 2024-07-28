import React from 'react'
import './servicio.css'
import DesarrolloSofIcon from '../../assets/icon-serv-desSoft.png'
import DesarrolloSofIconLight from '../../assets/iconLight-serv-desSoft.png'
import AppMobileIcon from '../../assets/icon-serv-mobile.png'
import AppMobileIconLight from '../../assets/iconLight-serv-mobile.png'
import DesignIcon from '../../assets/icon-serv-design.png'
import DesignIconLight from '../../assets/iconLight-serv-design.png'
import DataBaseIcon from '../../assets/icon-serv-bd.png'
import DataBaseIconLight from '../../assets/iconLight-serv-bd.png'
import TestingIcon from '../../assets/icon-serv-testing.png'
import TestingIconLight from '../../assets/iconLight-serv-testing.png'
import TrainingIcon from '../../assets/icon-serv-bookmark.png'
import TrainingIconLight from '../../assets/iconLight-serv-bookmark.png'
import TechIcon from '../../assets/icon-serv-tech.png'
import TechIconLight from '../../assets/iconLight-serv-tech.png'
import SistmIcon from '../../assets/icon-serv-sistIn.png'
import SistmIconLight from '../../assets/iconLight-serv-sistIn.png'
import SupportIcon from '../../assets/icon-serv-shield.png'
import SupportIconLight from '../../assets/iconLight-serv-shield.png'


const Servicios = ({theme}) => {
  return (
    <div className='service-container' id='service'>
        <div className="rectangle-down"></div>    
        <div className="service-title">
            <h2>¿Por qué elegirnos?</h2>
            <h1 className='title'>Servicio integral de 360°</h1>
            <p>Nuestro enfoque de 360 grados garantiza que cada proyecto se maneje 
               con profesionalismo y se adapte a las necesidades específicas 
               de nuestros clientes.</p>
        </div>
        <div className="service-list">
            <div className="service">
                <div className="iconService-container">
                    <img src={theme == 'dark' ? DesarrolloSofIcon : DesarrolloSofIconLight} alt=""  />
                </div>
                <h2>Desarrollo de software</h2>
                <p>Utilizamos metodologías ágiles que <br />
                   nos permiten adaptarnos rápidamente a <br />
                   los cambios del mercado y a las necesidades <br />
                   del cliente, desarrollando soluciones únicas.
                </p>
            </div>

            <div className="service">
                <div className="iconService-container">
                    <img src={theme == 'dark' ? AppMobileIcon : AppMobileIconLight} alt="" id='mobileIcon' />
                </div>
                <h2>Aplicaciones móviles</h2>
                <p>Desde aplicaciones nativas hasta híbridas, nos <br />
                   aseguramos de que cada aplicación cumpla con <br />
                   estándares de altos de rendimiento, <br />
                   seguridad y experiencia del usuario.
                </p>
            </div>

            <div className="service">
                <div className="iconService-container">
                    <img src={theme == 'dark' ? DesignIcon : DesignIconLight } alt="" id='mobileIcon' />
                </div>
                <h2>Diseño Ui/Ux</h2>
                <p>Creamos interfaces intuitivas y experiencias de <br />
                   usuario memorables. Desde la investigación <br />
                   hasta la implementación final, garantizamos <br />
                   una navegación fluida y atractiva.
                </p>
            </div>


            <div className="service">
                <div className="iconService-container">
                    <img src={theme == 'dark' ? DataBaseIcon : DataBaseIconLight }  alt="" />
                </div>
                <h2>Base de datos</h2>
                <p>Construimos la columna vertebral de tu <br />
                   aplicación con bases de datos diseñadas a <br />
                   medida, potenciando el rendimiento y la <br />
                   confiabilidad de tu sistema digital.
                </p>
            </div>
            <div className="service">
                <div className="iconService-container">
                    <img src={theme == 'dark' ? TestingIcon : TestingIconLight } alt="" />
                </div>
                <h2>Servicio de testing</h2>
                <p>Nos aseguramos de que cada línea de código <br />
                   funcione como debería, y así, lograr que tu <br />
                   aplicación pueda brillar con seguridad y <br />
                   rendimiento.
                </p>
            </div>
            <div className="service">
                <div className="iconService-container">
                    <img src={theme == 'dark' ? TrainingIcon : TrainingIconLight } alt="" />
                </div>
                <h2>Formación y Capacitación</h2>
                <p>Potenciamos tu equipo con conocimientos y <br />
                   habilidades especializadas para dominar <br />
                   tecnologías clave y optimizar el uso de <br />
                   nuestras soluciones.
                </p>
            </div>
            

            <div className="service">
                <div className="iconService-container">
                    <img src={theme == 'dark' ? TechIcon : TechIconLight } alt="" />
                </div>
                <h2>Consultoría Tecnológica</h2>
                <p>Asesoramiento especializado para definir <br />
                  estrategias digitales y optimizar procesos <br />
                  facilitando la innovación digital, mediante la <br />
                  adopción de tecnologías adecuadas.
                </p>
            </div>

            <div className="service">
                <div className="iconService-container">
                    <img src={theme == 'dark' ? SistmIcon : SistmIconLight } alt="" />
                </div>
                <h2>Mantenimiento y soporte</h2>
                <p>Servicios continuos para garantizar el <br />
                   rendimiento y la seguridad de las soluciones <br />
                   desarrolladas, para maximizar la disponibilidad <br />
                   y rendimiento del sistema.
                </p>
            </div>

            <div className="service">
                <div className="iconService-container">
                    <img src={theme == 'dark' ? SupportIcon : SupportIconLight } alt="" />
                </div>
                <h2>Mantenimiento y soporte</h2>
                <p>Servicios continuos para garantizar el <br />
                   rendimiento y la seguridad de las soluciones <br />
                   desarrolladas, para maximizar la disponibilidad <br />
                   y rendimiento del sistema.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Servicios