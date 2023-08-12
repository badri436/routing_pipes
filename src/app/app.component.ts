import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ChildComponent } from './child/child.component';
import { Router } from '@angular/router';
import { ExampleService } from './service/example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'route-app';
  curr = 50;
  name = 'hello';
  arr = [4, 5, 8];

  constructor(private route: Router, private example: ExampleService) {}

  ngOnInit() {
    // this.route.navigate(['/auth'], { queryParams: { id: 5 } });
    this.example.getPost(7).subscribe((val) => {
      console.log(val);
    });
    this.example.getExample();
  }
  ngDoCheck() {
    console.log('ng DO check');
  }

  ngOnChanges(change: SimpleChanges) {
    console.log('ng Change');
  }
  ngOnDestroy() {
    console.log('ng Destroy');
  }
  ngAfterViewInit() {
    console.log('ng After view init');
  }
  deleteAction() {
    this.arr = [];
  }
}
