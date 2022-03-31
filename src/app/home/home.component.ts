import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionService } from '../services/subscription.service';
import { Subscriptions } from '../models/Subscriptions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscription1Price: any;
  subscription2Price: any;
  subscription3Price: any;
  subscription1Description: string | any;
  subscriptionData: any = [];

  public _subscriptions: any = [
    {
      "subscriptionId": 1,
      "price": 0,
      "enabled": true,
      "title": "string",
      "description": "string"
    },
    {
      "subscriptionId": 2,
      "price": 9.99,
      "enabled": true,
      "title": "string",
      "description": "string"
    },
    {
      "subscriptionId": 3,
      "price": 12.99,
      "enabled": true,
      "title": "string",
      "description": "string"
    }
  ]


  constructor(private _subscriptionService: SubscriptionService, private _router: Router) {
    _subscriptionService.getSubscription().subscribe((subscriptions) => {
      if (subscriptions != null && subscriptions.length > 1) {
        this._subscriptions = subscriptions;
      }
    })
  }


  ngOnInit(): void {

  }

  public navigate() {
    this._router.navigate(['service']);
  }
}

