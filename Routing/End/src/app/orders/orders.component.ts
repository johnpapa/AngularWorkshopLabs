import { Component, OnInit } from '@angular/core';
//*** TODO: Import ActivatedRoute from @angular/router
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../core/data.service';
import { IOrder } from '../shared/interfaces';

@Component({
    selector: 'orders',
    templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {

    orders: IOrder[];
    
    /*** 
        TODO: Inject ActivatedRoute into the constructor. 
              Give it a name of "route" and make it private.
    ***/
    constructor(private route: ActivatedRoute, private dataService: DataService) { }

    ngOnInit() { 
        /***
            TODO: 1. Grab the customerId route parameter value using
                     this.route.snapshot.paramMap.get('customerId')

                  2. Convert the route parameter value to an integer 
                     and assign it to the id constant below.
        ***/
        const id = +this.route.snapshot.paramMap.get('customerId');
        this.dataService.getOrders(id)
            .subscribe((orders: IOrder[]) => {
                this.orders = orders;
        });
    }

}