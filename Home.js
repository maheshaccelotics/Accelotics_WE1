import React from 'react';
import './Home.css'
import Navbar from './navbar';


function Home() {
  return (
    <div className="container">
      <Navbar/>
      <center>
        <div className="solution_head">
          <h1>SOFTWARE SOLUTIONS DEVELOPMENT WITH <br /> THE LATEST TECHNOLOGIES</h1>
          <p>Today, every business faces the challenge of performing Digital Transformation.
            Whether you aim to use AR to simplify <br/> a part of your value chain or create an IoT
            ecosystem with Smart Contracts, our engineers <br/>know all key tech stacks needed to
            help you in this way. Accelotics has been <br/>leveraging emerging technologies to help
            our clients with impactful, enterprise-wide software solutions.</p>
        </div>
        <div className="enterprise">
          <h1>ENTERPRISE SOFTWARE SOLUTIONS<br />POWERED BY THE LATEST TECH</h1>
          <p>From the manufacturing line to the meeting room, our software
            development solutions will help you elevate your <br/>Enterprise Core and overcome the challenges of
            technological transformation both in daily and large-scale operations.</p>
        </div>
        <div className="center"style={{display:'grid',gridTemplateColumns:'20% 20% 20% 20%',gridColumnGap:"2px"}}>
          <div className="about">
            <h1 className="about-hover">A B O U T</h1>
            <p className='about-text'>This is a great place to tell <br /> your story and give people<br /> more insight into who you <br /> are, what you do, and why <br /> it’s all about you.</p>
          </div>
          <div className="about">
            <h1 className="about-hover">A B O U T</h1>
            <p className='about-text'>This is a great place to tell <br /> your story and give people <br /> more insight into who you <br /> are, what you do, and why <br /> it’s all about you.</p>
          </div>
          <div className="about">
            <h1 className="about-hover">A B O U T</h1>
            <p className='about-text'>This is a great place to tell <br /> your story and give people<br /> more insight into who you <br /> are, what you do, and why <br /> it’s all about you.</p>
          </div>
          <div className="about">
            <h1 className="about-hover">A B O U T</h1>
            <p className='about-text'>This is a great place to tell <br /> your story and give people<br /> more insight into who you <br /> are, what you do, and why <br /> it’s all about you.</p>
          </div>
        </div>
        <div className="development">
          <h1>SOFTWARE DEVELOPMENT<br /> PLATFORMS, TECHNOLOGIES & <br />LANGUAGES</h1>
          <p>Smart solutions are the core of all that we do at Technowall.
            Our experts are bringing you wide-ranging expertise in all the <br/>areas needed for a
            reliable software development solution that works across the board.</p>
        </div>
      </center>
      <div className="big_data">
        <h1>ENTERPRISE SOFTWARE DEVELOPMENT |<br /> BIG DATA | DATA ANALYTICS |<br /> CLOUD COMPUTING</h1>
        
      </div>
      <div className='pic'>
          <ul>
            <img className="img"src="https://static.wixstatic.com/media/cf7615_8bc760f3255f47b5a31f465f8414a806~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aws.png"></img>
            <li className='list'>Amazon <br/>web services</li>
            <img className="img"src="https://static.wixstatic.com/media/cf7615_b0f861c1cc9d41579c89164f0e7772da~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/azure.png"></img>
            <li className='list'>Microsoft Azure</li>
            <img className="img"src="https://static.wixstatic.com/media/cf7615_ecad7704bf0442a9bda450c3b36cee96~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/gcp.png"></img>
            <li className='list'>Google Cloud<br/>Platform</li>
            <img className="img"src="https://static.wixstatic.com/media/cf7615_7a4285347d9c45d99d1f8fd303f887a9~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/openstack.png"></img>
            <li className='list'>Openstack</li>
            <img className="img"src="https://static.wixstatic.com/media/cf7615_f3987486746b4b8b94da448dba41a57d~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/kubernetes.png"></img>
            <li className='list'>Kubernetes</li>
          </ul>
        </div>
        <div className='pic_1'>
          <ul>
            <img className="img_1"src='https://static.wixstatic.com/media/cf7615_a1f8c7d096ef4c0ca24fb3a3a91d9e86~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/java.png'></img>
            <li className='list-1'>Java</li>
            <img className="img_1"src='https://static.wixstatic.com/media/cf7615_47fef1d3b6fc4f8faef378df53ea4f89~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/scala.png'></img>
            <li className='list-1'>Scala</li>
            <img className="img_1"src='https://static.wixstatic.com/media/cf7615_caec872ff9f54b638159469c58c258b3~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c.png'></img>
            <li className='list-1'>C++</li>
            <img className="img_1"src='https://static.wixstatic.com/media/cf7615_4259b2aa02bb4e288ffdbff5102fc53c~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c-sharp.png'></img>
            <li className='list-1'>C Sharp</li>
            <img className="img_1"src='https://static.wixstatic.com/media/cf7615_a13e102a38074d8e941e7215823b87ed~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/spring.png'></img>
            <li className='list-1'>Spring</li>
          </ul>
        </div>
        <div className='pic_2'>
          <ul>
            <img className="img_2"src="https://static.wixstatic.com/media/cf7615_379b6af66cd143f9a105399011e22366~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/net.png"></img>
            <li className='list-2'>Microsoft <br/>ASP.NET</li>
            <img className="img_2"src="https://static.wixstatic.com/media/cf7615_4c6081ffb81e4b00935715c7d3f57061~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/my-sql.png"></img>
            <li className='list-2'>My SQL</li>
            <img className="img_2"src="https://static.wixstatic.com/media/cf7615_e3a36ae5d8894419a57704acb4e45f77~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/oracle.png"></img>
            <li className='list-2'>Oracle</li>
            <img className="img_2"src="https://static.wixstatic.com/media/cf7615_b2baa7368ae94781902252bd8e464329~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ms-sql.png"></img>
            <li className='list-2'>Microsoft<br/>SQL Server</li>
          </ul>
        </div>
      <div className="web">
        <h1> WEB DEVELOPMENT</h1>
      </div>
      <div className='web-icon'>
        <ul>
          <li className='iconname'>JavaScript</li>
          <img className='icon'src="https://static.wixstatic.com/media/cf7615_2f86d5db604248ae8e0c4a613414425b~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/js.png"></img>
          <li className='iconname'>Node JS</li>
          <img className='icon'src="https://static.wixstatic.com/media/cf7615_0acb65dc379a47be88b88bf2a7b65a3b~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/node.png"></img>
          <li className='iconname'>JQuery</li>
          <img className='icon'src="https://static.wixstatic.com/media/cf7615_dda1820751ad491585090ffb4b2d52dc~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/jquery.png"></img>
          <li className='iconname'>PHP</li>
          <img className='icon'src="https://static.wixstatic.com/media/cf7615_5a20f122cbe5429db22b54c0a9599334~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/php.png"></img>
        </ul>
      </div>
      <div className='web-icon1'>
        <ul>
          <li className='iconname1'>Symfony</li>
          <img className='icon1'src="https://static.wixstatic.com/media/cf7615_b0f0183c7fba44c8992e99e3cedcf200~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/symfony.png"></img>
          <li className='iconname1'>Ruby</li>
          <img className='icon1'src="https://static.wixstatic.com/media/cf7615_ddaacf5e2b084098bdcdeb507cf5802e~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ruby.png"></img>
          <li className='iconname1'>Python</li>
          <img className='icon1'src="https://static.wixstatic.com/media/cf7615_f2f65a0488524092bc41a496ad3dcc6e~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/python.png"></img>
          <li className='iconname1'>Angular JS</li>
          <img className='icon1'src="https://static.wixstatic.com/media/cf7615_d31568d38ecb47ce85a5fb886e3e7739~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/angular.png"></img>
          <li className='iconname1'>React</li>
          <img className='icon1'src="https://static.wixstatic.com/media/cf7615_f6251b7171a342998403fb2502eb16e1~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/react.png "></img>
        </ul>
      </div>
      <div className="mobile">
        <h1>MOBILE DEVELOPMENT</h1>
      </div>
      <div className='mob'>
        <ul>
          <img className='mobile-icon'src="https://static.wixstatic.com/media/cf7615_a2d3c6f5721a4411bbd44b6c72ee3b61~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_a2d3c6f5721a4411bbd44b6c72ee3b61~mv2.png"></img>
          <li className='mobile-list'>iOS</li>
          <img className='mobile-icon'src="https://static.wixstatic.com/media/cf7615_b1b875c40037443e927cf1743d1bd08a~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_b1b875c40037443e927cf1743d1bd08a~mv2.png"></img>
          <li className='mobile-list'>Android</li>
          <img className='mobile-icon'src="https://static.wixstatic.com/media/cf7615_102901c0068241a79db28914a9a3a6f5~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_102901c0068241a79db28914a9a3a6f5~mv2.png"></img>
          <li className='mobile-list'>Xamarin H</li>
        </ul>
      </div>
      <div className='mob1'>
        <ul>
          <img className='mobile-icon1'src="https://static.wixstatic.com/media/cf7615_09eafca26ee84ae78e3bf2ed365b27b6~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_09eafca26ee84ae78e3bf2ed365b27b6~mv2.png"></img>
          <li className='mobile-list1'>HTML5</li>
          <img className='mobile-icon1'src="https://static.wixstatic.com/media/cf7615_067bf7a79ba042c39c21ed5e40a93933~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_067bf7a79ba042c39c21ed5e40a93933~mv2.png"></img>
          <li className='mobile-list1'>JavaScript</li>
        </ul>
      </div>
      <div className="iot">
        <h1>IoT DEVELOPMENT</h1>
      </div>
      <div className='iot-icon'>
        <ul>
          <li className='ionname'>Android Firmware</li>
          <img className='icon'src="https://static.wixstatic.com/media/cf7615_d2a10a6bfbbe42bd945a9ccff04e460b~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_d2a10a6bfbbe42bd945a9ccff04e460b~mv2.png"></img>
          <li className='ionname'>Android Auto</li>
          <img className='ion'src="https://static.wixstatic.com/media/cf7615_ac7848c4932a40059a75c5664b797d89~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_ac7848c4932a40059a75c5664b797d89~mv2.png"></img>
          <li className='ionname'>Wear OS</li>
          <img className='ion'src="https://static.wixstatic.com/media/cf7615_ee24f2f2b0164b9cbd25e2c3f6c589fb~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_ee24f2f2b0164b9cbd25e2c3f6c589fb~mv2.png"></img>
          <li className='ionname'>Microsoft Azure<br/>IoT Suit</li>
          <img className='ion'src="https://static.wixstatic.com/media/cf7615_1e3afb64b2034c538d9337c67e6f4343~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_1e3afb64b2034c538d9337c67e6f4343~mv2.png"></img>
        </ul>
      </div>
      <div className='iot-icon1'>
        <ul>
          <li className='ionname1'>Android Things</li>
          <img className='ion1'src="https://static.wixstatic.com/media/cf7615_ea48104d32a049a4a403c66742413106~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_ea48104d32a049a4a403c66742413106~mv2.png"></img>
          <li className='ionname1'>AWS IoT</li>
          <img className='icon1'src="https://static.wixstatic.com/media/cf7615_148a46c696474d9395484044b2a5c936~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_148a46c696474d9395484044b2a5c936~mv2.png"></img>
          <li className='ionname1'>Google Cloud<br/>IoT</li>
          <img className='ion1'src="https://static.wixstatic.com/media/cf7615_8747d95adc7146a99982855a3032d946~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_8747d95adc7146a99982855a3032d946~mv2.png"></img>
          <li className='ionname1'>Embedded Linux</li>
          <img className='ion1'src="https://static.wixstatic.com/media/cf7615_d35b80ce39084ebea171deaab8a5a824~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_d35b80ce39084ebea171deaab8a5a824~mv2.png"></img>
        </ul>
      </div>
      <div className="machine_learning">
        <h1>ARTIFICIAL INTELLIGENCE<br />&<br />MACHINE LEARNING</h1>
      </div>
      <div className='ai'>
        <ul>
          <img className='ai-icon'src="https://static.wixstatic.com/media/cf7615_753cd9a6aa44439483d11e32781ed018~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_753cd9a6aa44439483d11e32781ed018~mv2.png"></img>
          <li className='ai-list'>TensorFlow</li>
          <img className='ai-icon'src="https://static.wixstatic.com/media/cf7615_2fa40315c8044ae39aeaf8a762fe1e53~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_2fa40315c8044ae39aeaf8a762fe1e53~mv2.png"></img>
          <li className='ai-list'>Spark</li>
        </ul>
      </div>
      <div className='ai1'>
        <ul>
          <img className='ai-icon1'src="https://static.wixstatic.com/media/cf7615_abf830419a2444ccbcc5c211c15c228a~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_abf830419a2444ccbcc5c211c15c228a~mv2.png"></img>
          <li className='ai-list1'>DL4J</li>
        </ul>
      </div>
      <div className="ar">
        <h1>AR & VR <br />DEVELOPMENT</h1>
      </div>
      <div className="vr">
        <ul>
          <img className="vr-icon"src="https://static.wixstatic.com/media/cf7615_46ecb54db75a4e3fb9ed2c133a891320~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_46ecb54db75a4e3fb9ed2c133a891320~mv2.png"></img>
          <li className="vr-list">Unity</li>
          <img className="vr-icon"src="https://static.wixstatic.com/media/cf7615_c1c259bde5454a3ab26edcadc85ec13f~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_c1c259bde5454a3ab26edcadc85ec13f~mv2.png"></img>
          <li className="vr-list">Web Assembly</li>
        </ul>
      </div>
    </div>
  
  );
}

export default Home;
