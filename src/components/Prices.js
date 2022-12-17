import React from 'react'


const Prices = () => {
    const [state] = React.useState([
        {
            id:1,
            heading: 'Basic',
            price:50,
            msg1:'5GB Storage Space',
            msg2:'20GB Mounthly Bandwidth',
            msg3:'My SQL Database',
            msg4:'100 Email Account',
            msg5:'10 Free Domain Name'
        },
        {
            id:2,
            heading: 'Standard',
            price:80,
            msg1:'8GB Storage Space',
            msg2:'30GB Mounthly Bandwidth',
            msg3:'My SQL Database',
            msg4:'150 Email Account',
            msg5:'15 Free Domain Name'
        },
        {
            id:3,
            heading: 'Premium',
            price:100,
            msg1:'10GB Storage Space',
            msg2:'40GB Mounthly Bandwidth',
            msg3:'My SQL Database',
            msg4:'200 Email Account',
            msg5:'20 Free Domain Name'         
        }
    ]);
    return (
        <div>
            <div className="prices">
                <div className="container">
                    <div className="common">
                        <h3 className="heading">CHOOSE A PLAN</h3>
                        <h1 className="mainHeading">Pricing Plan</h1>
                        <p className="mainContent">
                            Here are some products that you can order. The price of each product is mentioned. You can order any product you want. You can contact us through the address given above to order the product. thank you
                        </p>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="row">
                        {state.map(pricess =>(
                            <div className="col-4" key={pricess.id}>
                            <div className="price">
                                <div className="priceHeading">{pricess.heading}</div>
                                <div className="price_rs"><span>$</span>{pricess.price}</div>
                                <ul>
                                    <li>{pricess.msg1}</li>
                                    <li>{pricess.msg2}</li>
                                    <li>{pricess.msg3}</li>
                                    <li>{pricess.msg4}</li>
                                    <li>{pricess.msg5}</li>
                                </ul>
                                <div className="price_btn">
                                <a href="" className='btn btn-outline'>
                                    Punchase
                                </a>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prices;
