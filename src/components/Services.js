import React from 'react'
import { FaGithub,FaCamera,FaBullseye,FaApple,FaFileVideo,FaSearch } from 'react-icons/fa';
const Services = () => {
  const [header] = React.useState({mainHeader:"SERVICES", subHeading:"My Services", text:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi soluta quis dolore."});
  return (
    <div className='services'>
      <div className="container">
        <div className="services_header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeading">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>
          <div className="row bgMain">
            <div className="col-4 bgMain">
              <div className="services_box">
                <FaGithub className="commonIcon" />
                <div className="services_box-header">Web development</div>
                <div className="services_box-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam ad totam aspernatur eaque,
                </div>
              </div>
            </div>
            <div className="col-4 bgMain">
              <div className="services_box">
                <FaCamera className="commonIcon" />
                <div className="services_box-header">Photography</div>
                <div className="services_box-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam ad totam aspernatur eaque,
                </div>
              </div>
            </div>
            <div className="col-4 bgMain">
              <div className="services_box">
                <FaBullseye className="commonIcon" />
                <div className="services_box-header">Web designer</div>
                <div className="services_box-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam ad totam aspernatur eaque,
                </div>
              </div>
            </div>
            <div className="col-4 bgMain">
              <div className="services_box">
                <FaApple className="commonIcon" />
                <div className="services_box-header">App development</div>
                <div className="services_box-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam ad totam aspernatur eaque,
                </div>
              </div>
            </div>
            <div className="col-4 bgMain">
              <div className="services_box">
                <FaFileVideo className="commonIcon" />
                <div className="services_box-header">Vidio Editing</div>
                <div className="services_box-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam ad totam aspernatur eaque,
                </div>
              </div>
            </div>
            <div className="col-4 bgMain">
              <div className="services_box">
                <FaSearch className="commonIcon" />
                <div className="services_box-header">SEO Expert</div>
                <div className="services_box-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam ad totam aspernatur eaque,
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
