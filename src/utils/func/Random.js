import { userData, avatarArts } from "../../lib/data/userData.js"

const alphabets = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', '/', ':', ';', '<', '>', ',', '.', '?', '~']

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
        let autoQuery = query?.replaceAll(' ', '+') || 'auto'
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

    alphas(l = 5) {
        try {
            let r = ''
            for (let i = 0; i < l; i++) {
                r += this.FromAnArray(alphabets)
                
            }
            console.log('r', r);
            return r
        } catch (error) {
            // console.log('alphabets error', error);
            throw new Error(error)

        }
    }

    numbers(l = 5) {
        let r = ''
        for (let i = 0; i < l; i++) {
            r += this.FromAnArray(numbers)
        }
        return r
    }

    symbols(l = 5) {
        let r = ''
        for (let i = 0; i < l; i++) {
            r += this.FromAnArray(symbols)
        }
        return r
    }

    id() {
        return this.alphas(5) + this.numbers(5) + this.symbols(5) + this.alphas(5) + this.numbers(5)
    }

    lid(l = 5, s = false, n = false) {
        let r = ''
        let al = alphabets
        if (s && n) {
            al = [...alphabets, ...numbers, ...symbols]
        } else if (s) {
            al = [...alphabets, ...symbols]
        } else if (n) {
            al = [...alphabets, ...numbers]
        }
        for (let i = 0; i < l; i++) {
            r += this.FromAnArray(al)
        }
        return r
    }

}

const Random = new random();
export default Random