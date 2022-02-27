# QR (Quick Response) Genrator using javascript in React

## Genrating code with QRCode lib
```
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

```

## Package

`npm install qrcode`