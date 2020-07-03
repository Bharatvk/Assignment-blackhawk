import { Component } from '@angular/core';
import { OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assignment-blackhawk';
  public datePickerEnabled:any= false;
  public enabled= true;
  public buttonColour = "primary";
  public buttonDisabled = false; 
  searchAllControl = new FormControl();
  searchFirstControl = new FormControl();
  options: string[] = ['Dog', 'Cat', 'Monkey'];
  options2: string[] = ['Dog', 'Cat', 'Monkey'];

  filteredOptions: Observable<string[]>;
  newOptions: Observable<string[]>;
  ngOnInit() {
    this.filteredOptions = this.searchAllControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterArray(value))
      );
      console.log()

      this.newOptions = this.searchFirstControl.valueChanges.pipe(
        startWith(''),
        map(value => this.filterbyFirstLetter(value))
      );
  }

  private filterArray(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => 
      option.toLowerCase().includes(filterValue));
  }

  private filterbyFirstLetter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options2.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  toggle(event: any){
    if(event.checked){
      this.datePickerEnabled = true;
    } else {
      this.datePickerEnabled = false;
    }
  }

}