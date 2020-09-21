import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'rust-wasm-angular';

  ngOnInit(): void {
    const rust = import('../../wasm/pkg');

    rust.then(m => m.greet()).catch(console.error);
  }
}
