import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-popo',
  templateUrl: './popo.component.html',
  styleUrls: ['./popo.component.css']
})
export class PopoComponent {
    help = 'hellllp';

    cards = [
        {
          title: 'Card Title 1',
          subtitle: 'subtitle 1',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
        },
        {
          title: 'Card Title 2',
          subtitle: 'subtitle 2',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
        },
        {
          title: 'Card Title 3',
          subtitle: 'subtitle 3',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
        },
        {
          title: 'Card Title 4',
          subtitle: 'subtitle 4',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
        },
      ];
}
