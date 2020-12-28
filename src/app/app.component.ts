import { Component } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  movies = [
    {
      name: "Complete online javascript course",
      isDisable: false
    },
    {
      name: "Jog around the park 3x",
      isDisable: false
    },
    {
      name: "10minutes meditation",
      isDisable: false
    },
    {
      name: "Read for 1hour",
      isDisable: false
    },
    {
      name: "Pick up groceries.",
      isDisable: false
    },
    {
      name: "Complete Todo app on front end mentor",
      isDisable: false
    }
  ];

  delete(index: any) {
    this.movies.splice(index, 1);
  }

  addNew() {
    this.movies.push({
      name: "new item",
      isDisable: false
    });
  }
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
