

import React from 'react'

function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (
        <div >
            <div className='fixed-bottom ' >
                <p className='bg-primary text-white d-flex justify-content-center align-items-center' style={{ height: "3.5rem" }}> &copy;{getCurrentYear()} My Bank. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;