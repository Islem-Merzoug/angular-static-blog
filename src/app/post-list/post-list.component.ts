import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts = [
    {
      title: 'mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, efficitur malesuada justo. Nulla iaculis nibh quis nisi consequat, a tristique ipsum maximus. Nulla facilisi. Sed porta, tellus hendrerit elementum sagittis, diam turpis pharetra mauris, non varius velit ipsum eu nisi. Nunc nisl augue, aliquet molestie aliquet a, rutrum eget leo. Nam in placerat mauris. Cras non dui mi. Nam erat lacus, feugiat pharetra commodo ut, ornare et nibh. Donec nec leo hendrerit,',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'mon deuxieme post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, efficitur malesuada justo. Nulla iaculis nibh quis nisi consequat, a tristique ipsum maximus. Nulla facilisi. Sed porta, tellus hendrerit elementum sagittis, diam turpis pharetra mauris, non varius velit ipsum eu nisi. Nunc nisl augue, aliquet molestie aliquet a, rutrum eget leo. Nam in placerat mauris. Cras non dui mi. Nam erat lacus, feugiat pharetra commodo ut, ornare et nibh. Donec nec leo hendrerit,',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'un nouveau post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, efficitur malesuada justo. Nulla iaculis nibh quis nisi consequat, a tristique ipsum maximus. Nulla facilisi. Sed porta, tellus hendrerit elementum sagittis, diam turpis pharetra mauris, non varius velit ipsum eu nisi. Nunc nisl augue, aliquet molestie aliquet a, rutrum eget leo. Nam in placerat mauris. Cras non dui mi. Nam erat lacus, feugiat pharetra commodo ut, ornare et nibh. Donec nec leo hendrerit,',
      loveIts: 0,
      created_at: new Date()
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
