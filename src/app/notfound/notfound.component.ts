import { Component } from '@angular/core';
import { Operators } from '../home/home.component';
import { OperatorService } from '../logic.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'notfound',
  templateUrl: 'notfound.component.html',
  styleUrls: ['notfound.component.css']
})

export class NotFoundComponent {
    op: Operators[];
    OP = this.op;
    // tslint:disable-next-line:variable-name
    public newName = '';
    public newTeam = '';
    public newGadget = '';
    public newIcon = '';
    public newSide = '';

    addOps() {
        this.op.push({name: this.newName, gadget: this.newGadget, team: this.newTeam, icon: this.newIcon, side: this.newSide});
        console.log(this.op);
    }
}

