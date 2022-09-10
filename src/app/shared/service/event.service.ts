import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
providedIn: 'root'

})
export class EventService {
  private EVENT_BASE_URL ='event';

  constructor(private httpClient: HttpClient) { }

  public getAllEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.EVENT_BASE_URL);
  }

}
