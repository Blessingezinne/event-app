export class Event {
  id: string;
  title: string;
  date: Date;
  description: string;
  isActive:boolean;


  constructor(id: string, title: string, date: Date, description: string, isActive: boolean) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.description = description;
    this.isActive = isActive;
  }
}
