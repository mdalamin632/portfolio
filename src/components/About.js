import React from 'react'

const About = () => {
  const [state] = React.useState({ subHeading: "About Me", text: "Hi! I am Al Amin. I'm Web Designer ‍and i am learnig ReactJS." })
  return (
    <div className='about'>
      <div className="container">
        <div className="common">
          <h1 className="mainHeading">{state.subHeading}</h1>
          <p className="mainContent">{state.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row h-650 alignCenter">
          <div className="col-6">
            <div className="about_img">
              <img className='pic' src="/images/man-01.png" alt="" />
            </div>
          </div>
          <div className="col-6">
            <div className="about_info">
              <h1>Hi There</h1>
              <div className="about_info-p1">
                You can contact me for web development work. I am proficient in HTML, CSS, JavaScript and React
              </div>
              <div className="about_info-p2">
                You can contact me through below for web development work
              </div>
              <div className="info_contacts">
                <div className="row">
                  <div className="col-6">
                    <strong>Name:</strong>
                    <p>Md Al Amin</p>
                  </div>
                  <div className="col-6">
                    <strong>Email:</strong>
                    <p>alamindpi102723@gmail.com</p>
                  </div>
                  <div className="col-6">
                    <strong>Phone:</strong>
                    <p>01824386632</p>
                  </div>
                  <div className="col-6">
                    <strong>Facebook:</strong>
                    <p>Md Al Amin</p>
                  </div>
                  <div className="col-6">
                    <strong>Twitter:</strong>
                    <p>alamin360</p>
                  </div>
                  <div className="col-6">
                    <strong>Whatsapp:</strong>
                    <p>01783240467</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
