import { userData, avatarArts } from "../data/userData.js"

const alphabets = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

class random {

    MinToMax(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)

    }

    FromAnArray(array) {
        return array[Math.floor(Math.random() * array.length)]
    }

    ColorHSL() {
        return `hsl(${this.MinToMax(0, 360)}, ${this.MinToMax(0, 100)}%, ${this.MinToMax(0, 100)}%)`
    }

    ColorRGB() {
        return `rgb(${this.MinToMax(0, 255)}, ${this.MinToMax(0, 255)}, ${this.MinToMax(0, 255)})`
    }

    ColorHEX() {
        return `#${this.MinToMax(0, 255).toString(16).padStart(2, '0')}${this.MinToMax(0, 255).toString(16).padStart(2, '0')}${this.MinToMax(0, 255).toString(16).padStart(2, '0')}`
    }

    User() {
        return this.FromAnArray(userData)
    }

    Avatar({ avatarStyle, query, imageType, queryLength }) {
        let autoQuery = query || 'auto'
        let avatar = avatarStyle || 'auto'
        let image = imageType || 'auto'

        if (queryLength && autoQuery === 'auto') {
            autoQuery = ''
            for (let i = 0; i < queryLength; i++) {
                autoQuery += alphabets[Math.floor(Math.random() * alphabets.length)]
            }
        } else if (autoQuery === 'auto') {
            autoQuery = alphabets[this.MinToMax(0, 25)] + alphabets[this.MinToMax(0, 25)] + alphabets[this.MinToMax(0, 25)] + alphabets[this.MinToMax(0, 25)]
        }
        if (avatar === 'auto') avatar = ((this.FromAnArray(avatarArts)).replaceAll(' ', '-')).toLowerCase()
        if (image === 'auto') image = 'svg'

        return `https://api.dicebear.com/9.x/${avatar}/${image}?seed=${autoQuery}`
    }



}

const Random = new random();
export default Random