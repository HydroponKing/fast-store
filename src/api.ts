const linkApi = 'https://fakestoreapi.com'
const productApi = '/products'
const loginApi = '/auth/login'

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


