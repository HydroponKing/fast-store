export interface UserGeolocation {
    lat: string;
    long: string;
}
export interface UserAddress{
    geolocation: UserGeolocation;
    city: string;
    street: string;
    number: number;
    zipcode: string;
}

export interface UserName {
    firstname: string;
    lastname: string;
}

export interface User {
    address: UserAddress;
    id: string;
    email: string;
    username: string;
    password: string;
    name: UserName;
    phone: string;
    __v: number | null;
}

export interface ModalProps {
    onClose: () => void
}

interface NameDataSet {
    "firstname": string;
    "lastname":  string;
}
export interface DataSet {
    id: string;
    email: string;
    username: string;
    name: NameDataSet;
    "phone": string;
}
export interface DataCart {
    productId: number;
    quantity: number;
}
