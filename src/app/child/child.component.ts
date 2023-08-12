import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnDestroy {
  flag = true;
  rupee = 10;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    console.log('oninit');
    console.log(this.route.snapshot.queryParams['id']);
  }
  ngDoCheck() {}
  ngOnChanges() {
    console.log('NgChanges');
  }

  onDelete() {
    this.flag = !this.flag;
  }

  ngOnDestroy() {
    console.log('destroyed');
  }
}
