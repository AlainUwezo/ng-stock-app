import { map, Observable } from 'rxjs';
import { ProductService } from './../../../core/services/product.service';
import { Product } from './../../../core/models/product.model';
import { Component, ViewChild, OnInit, Renderer2 } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ListProductComponent implements OnInit{

  nav_width = 280;
  today_date = new Date();
  products$: Observable<Product[]>;

  dataSource = new MatTableDataSource<Product>();

  columnsKeys = ['id', 'name', 'type', 'price', 'quantity', 'expiredAt', 'sell', 'delete', 'modify'];
  name = 'name';

  columnsToDisplayWithExpand = [...this.columnsKeys, 'expand'];
  expandedElement: Product;


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    this.productService.getAllProduct().subscribe((data)=>{
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    // this.dataSource$ = this.route.data.pipe(
    //   map(data => data['products'])
    // )
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.sort.sortChange.subscribe(() => {
        this.paginator.pageIndex = 0;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onFilterList(){
    alert("Filtre");
  }
}
