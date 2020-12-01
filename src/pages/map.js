import React from 'react'
import Header from '../components/Header'

const Map = () => {
    return (
        <div>
            <Header />
            <iframe
                title='The location'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.74093021055!2d34.72720489161435!3d32.08805767614251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1606850506760!5m2!1sen!2sil"
                width="100%"
                height="1000"
                frameborder="0"
                style={{border:0}}
                allowfullscreen=""
                aria-hidden="false">
            </iframe>
        </div>
    )
}

export default Map
