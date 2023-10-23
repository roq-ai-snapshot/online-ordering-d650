import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DeliveryDriverInterface {
  id?: string;
  name: string;
  phone_number: string;
  vehicle_type: string;
  license_number: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface DeliveryDriverGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  phone_number?: string;
  vehicle_type?: string;
  license_number?: string;
  user_id?: string;
}
