import React from 'react'



const Contact = () => {
    return (
        <div className="contact_info">
            <div className="container_fluid">
                <div className="row">
                <div className="common">
                        <h1 className="mainHeading">Contact Me</h1>
                        <p className="mainContent">
                            Here are some products that you can order. The price of each product is mentioned. You can order any product you want. You can contact us through the address given above to order the product. thank you
                        </p>
                        <div className="commonBorder"></div>
                    </div>
                    <div className='col-lg-10'>
                        {/* phone number */}
                        <div className="contact_info_item ">
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Phone :
                                </div>
                                <div className="contact_info_text">
                                    01824386632
                                </div>
                            </div>
                        </div>
                        <div className="contact_info_item">
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Email :
                                </div>
                                <div className="contact_info_text">
                                    alamindpi102723@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className="contact_info_item">
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Address :
                                </div>
                                <div className="contact_info_text">
                                    Rangpur, Sadar Rangpur.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
