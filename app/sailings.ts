import { SailingOption } from './sailing-options';

export class Sailing {
    sailing_id: number;
    sailing_name: string;
    sailing_cruise_line_id: number;
    sailing_main_image: string;
    sailing_options: SailingOption[];
}