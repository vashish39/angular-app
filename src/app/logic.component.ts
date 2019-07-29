import {Injectable} from '@angular/core';
import { Operators } from './home/home.component';

@Injectable()
export class OperatorService {
    getOps(): Operators[] {
        return [
            {name: 'Ash', gadget: 'Breach Charge', team: 'FBI', icon: 'assets/1.png', side: 'Attacker'},
            {name: 'Sledge', gadget: 'Hammer', team: 'SAS', icon: 'assets/2.png', side: 'Attacker'},
            {name: 'Mute', gadget: 'Jammer', team: 'GSG-9', icon: 'assets/3.png', side: 'Defender'},
            {name: 'Doc', gadget: 'Stim', team: 'GIGN', icon: 'assets/4.png', side: 'Defender'}
        ];
    }
}
