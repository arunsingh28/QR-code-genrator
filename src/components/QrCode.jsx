import QRCode from 'qrcode'
import { useState } from 'react'


const QrCode = ({ value }) => {
    const [code, setCode] = useState(null)

    const generateQrCode = () => {
        QRCode.toDataURL(value, {
            errorCorrectionLevel: 'H',
        }, (err, url) => {
            if (err) {
                console.error(err)
            } else {
                setCode(url)
            }
        })
    }




    return (
        <>
            <button onClick={generateQrCode}>Creat Code</button>
            <img src={code} height="200" width="200" alt={code} />
        </>
    )
}

export default QrCode