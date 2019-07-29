import { Component } from '@angular/core';
import { OperatorService } from '../logic.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'Home-app',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
    title = 'Operators List';
    op: Operators[];
    // tslint:disable-next-line:variable-name
    constructor(private _operatorService: OperatorService) {
        this.op = _operatorService.getOps();
    }
    labels = 'Edit';
    selectedHero: Operators;
    checked: boolean;
    onSelect(hero: Operators): void {
        this.selectedHero = hero;
    }

    remove(hero: Operators) {
        const index: number = this.op.indexOf(hero);
        if (index !== -1) {
            this.op.splice(index, 1);
        }
    }

    editOps() {
        if (!this.checked) {
            this.labels = 'Done';
        } else {
            this.labels = 'Edit';
        }
    }
}

export class Operators {
    name: string;
    gadget: string;
    team: string;
    icon: string;
    side: string;
}

