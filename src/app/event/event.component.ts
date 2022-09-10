import {Component, OnInit} from '@angular/core';
import {EventService} from "../shared/service/event.service";



@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'date', 'description', 'isActive'];
  dataSource : Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(value =>
     this.dataSource = value
    );
  }

}
