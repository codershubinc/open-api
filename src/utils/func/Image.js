class image {
    imageApi(){
        return 
    }
    image(
        imageType,
        size,
        query,
        rotate=0,
        scale=100,
        radius=0,
        size=96,
        backgroundColor
    ){
        return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${query}`
    }
}
