
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface RentalPackage {
  name: string;
  price: string;
  features: string[];
}

export interface RentalVehicle {
  id: string;
  name: string;
  description: string;
  amenities: string[];
  image: string;
}
