import { SailingOption } from './sailing-options';

export class Sailing {
    id: number;
    name: string;
    cruiseLineId: number;
    image: string;
    sailingOptions: SailingOption[];
}