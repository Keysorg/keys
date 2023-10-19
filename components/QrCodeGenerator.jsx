import React from 'react';
import QRCode from "react-qr-code";

const QrCodeGenerator = ({ qrCodeValue }) => {

    return (
        <>
            <QRCode
                value={qrCodeValue}
                className='qr-code'
            />
        </>
    )
}

export default QrCodeGenerator