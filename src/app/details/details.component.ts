import { Component, Input } from '@angular/core';
import { Operators } from '../home/home.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {
    @Input() op: Operators;
    checked = true;

    remove() {
        if (this.checked) {
            this.checked = !this.checked;
        }
    }
}

