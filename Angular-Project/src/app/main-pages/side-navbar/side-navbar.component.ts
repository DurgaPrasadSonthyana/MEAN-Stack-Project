import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from 'src/app/services/main.service';
import { IMenu } from '../interface/IMenu';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
 sidemenuList = [
    {
        "text": "Dashboard",
        "icon": "dashboard",
        "routerLink": "/main/dashboard"
    },
    {
        "text": "Tables",
        "icon": "people",
        "routerLink": "/main/tables"
    },
    {
        "text": "Supplier",
        "icon": "supervised_user_circle",
        "routerLink": "/main/supplier"
    },
    {
        "text": "Suit",
        "icon": "inventory_2",
        "children": [{
                "text": "Category",
                "icon": "category",
                "routerLink": "/main/category1"
            },
            {
                "text": "Sub Category",
                "icon": "layers",
                "routerLink": "/main/sub-category"
            },
            {
                "text": "Product",
                "icon": "all_inbox",
                "routerLink": "/main/product"
            },
            // {
            //     "text": "Sankeerth",
            //     "icon": "all_inbox",
            //     "routerLink": "/main/product"
            // }
        ]
    },
    {
        "text": "Expense",
        "icon": "inventory_2",
        "children": [{
                "text": "Category",
                "icon": "category",
                "routerLink": "/main/category2"
            },
            {
                "text": "Manage Expense",
                "icon": "layers",
                "routerLink": "/main/manage-expense"
            },
            {
                "text": "Statement",
                "icon": "all_inbox",
                "routerLink": "/main/statement"
            }
        ]
    },
    {
        "text": "Purchases",
        "icon": "receipt",
        "children": [{
                "text": "New Purchases",
                "icon": "local_atm",
                "routerLink": "/main/new-purchases"
            },
            {
                "text": "Purchases History",
                "icon": "history",
                "routerLink": "/main/history"
            }
        ]
    },
    {
        "text": "Sales",
        "icon": "calculate",
        "children": [{
                "text": "New Sales",
                "icon": "point_of_sale",
                "routerLink": "/main/new-sales"
            },
            {
                "text": "Sales History",
                "icon": "history",
                "routerLink": "/main/sales-history"
            }
        ]
    },
    {
        "text": "User",
        "icon": "analytics",
        "children":[{
            "text": "Registration",
            "icon": "people",
            "routerLink": "/user/registration"
        }]
    },
    
    {
        "text": "More",
        "icon": "analytics",
        "children":[{
            "text": "Edit",
            "icon": "edit",
            "routerLink": "/more/edit"
        }]
    },
    {
        "text": "Admin",
        "icon": "analytics",
        "children":[
        {
            "text": "Company Information",
            "icon": "edit",
            "routerLink": "/admin/company-info"
        },
       {
        "text": "Department",
        "icon": "people",
        "routerLink": "/admin/department"
    },
    {
        "text": "Designation",
        "icon": "people",
        "routerLink": "/admin/designation"
    },
    {
        "text": "Work Location",
        "icon": "people",
        "routerLink": "/admin/work-location"
    },
    {
        "text": "Client popup",
        "icon": "people",
        "routerLink": "/admin/client-popup"
    },
    {
        "text": "Crud",
        "icon": "people",
        "routerLink": "/admin/crud"
    }
    ]
    }
]

  menuList:any= [];
  constructor(private httpService: MainService) { }

  ngOnInit() {
    this.menuList = this.sidemenuList;
  }

}
