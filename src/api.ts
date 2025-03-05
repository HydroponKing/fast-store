const linkApi = 'https://fakestoreapi.com'

const productApi = '/products'
const loginApi = '/auth/login'
const usersApi = '/users'
const cartApi = '/carts/'

export interface Product {
    id: number;
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export interface AuthData {
    username: string;
    password: string;
}

export interface AuthResponse {
    token: string
}

export async function fetchProducts(): Promise<Product[]>{
    try {
        const response = await fetch(linkApi + productApi)
        if (!response.ok) {
            throw new Error (`HTTP ERROR STATUS: ${response.status}`)
        }
        const data: Product[] = await response.json()
        return data
    }catch (error) {
        console.error('ERROR FETCH', error)
        throw error
    }
}

export async function fetchAuth(credentials:AuthData): Promise<AuthResponse> {
    try {
        const response = await fetch(linkApi + loginApi, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        if (!response.ok){
            const errorData = await response.json().catch(()=> null)
            throw new Error (errorData?.message || `HTTP ERROR - ${response.status}`)
        }
        const data: AuthResponse = await response.json();
        return data
    }catch (error){
        console.error(`AUTH  FAIL IS - `, error)
        throw error
    }
}

export async function fetchGetUser (userName){
    try {
        const response = await fetch(linkApi + usersApi)
        if (!response.ok) {
            throw new Error (`HTTP ERROR STATUS: ${response.status}`)
        }
        const data = await response.json()
        const user = await data.find(person => person.username === userName)
        return user
    }catch (error) {
        console.error('ERROR FETCH', error)
        throw error
    }
}

export async function fetchGetUserId (userName){
    try {
        const response = await fetch(linkApi + usersApi)
        if (!response.ok) {
            throw new Error (`HTTP ERROR STATUS: ${response.status}`)
        }
        const data = await response.json()
        const user = await data.find(person => person.username === userName)
        return user.id
    }catch (error) {
        console.error('ERROR FETCH', error)
        throw error
    }
}

export const fetchGetCard = async () => {
    try {
        const username = localStorage.getItem('name')
        if (!username) {
            throw new Error("USER NOT IN LOCALSTORAGE")
        }
        const userId = await fetchGetUserId(username)
        const cartUrl = `${linkApi}${cartApi}${userId}`
        const response = await fetch(cartUrl)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const cartData = await response.json()
        return cartData.products

    }catch (error) {
        console.error('ERROR FETCH', error)
        throw error
    }
}



