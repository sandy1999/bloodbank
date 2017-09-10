export interface BDonors{
    name:string,
    age:string,
    bloodGroup:string,
    contactNumber:string,
    address: Address
}

export interface Address{
    streetNumber:number,
    locality:string,
    city:string,
    state:string
} 