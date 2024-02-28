import { EmployeesComponent } from './pages/employees/employees.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    // Redirect to default Path
    {
        path: "",
        pathMatch: 'full',
        redirectTo: "/groceries/home"
    },
    {
        path: "groceries",
        children: [
            { //! Default Route
                path: "home",
                component: HomeComponent
            },
            {
                path: "employees",
                loadComponent: () => import("./pages").then(comp => comp.EmployeesComponent)
            },
            {
                path: "products",
                loadComponent: () => import("./pages").then(comp => comp.ProductsComponent)
            },
            {
                path: "suppliers",
                loadComponent: () => import("./pages").then(comp => comp.SuppliersComponent)
            },
            {
                path: "sales",
                loadComponent: () => import("./pages").then(comp => comp.SalesComponent)
            },
            {
                path: "orders",
                loadComponent: () => import("./pages").then(comp => comp.OrdersComponent)
            },
            {
                path: "customers",
                loadComponent: () => import("./pages").then(comp => comp.CustomersComponent)
            }            
        ]
    }
];
