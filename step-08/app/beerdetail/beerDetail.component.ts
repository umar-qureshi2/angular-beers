import {Component, OnInit}      from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location}               from '@angular/common';
import {BeerService}            from '../beers.service';


@Component({
    selector: 'beer-detail',
    templateUrl: './beerDetail.html',
    providers: [BeerService]
})
export class BeerDetail implements OnInit {
    beer = {};

    constructor(private route: ActivatedRoute,
                private beerService: BeerService) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.getBeer(params['id']);
        });
    }

    getBeer(beerId: String) {
        this.beerService.getBeer(beerId)
            .then(
                beer => this.beer = beer,
                error => this.errorMessage = <any>error);
    }
}
