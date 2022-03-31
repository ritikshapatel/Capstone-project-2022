import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscriptions } from '../models/Subscriptions';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  baseURL = "https://bookeapi.azurewebsites.net/";

  constructor(private http: HttpClient) { }

  getSubscription(): Observable<Subscriptions[]> {
    let url = this.baseURL + 'api/StripePayment/GetActiveSubscriptions';
    return this.http.get<any>(url);
  }
  
}
