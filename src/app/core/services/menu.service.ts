import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { RoutePath } from '../configs/route-path.config';


@Injectable({ providedIn: 'root' })
export class MenuService {
    getAll() {
        const data: MenuItem[] = [
            {
                icon: 'home',
                label: 'Home',
                path: RoutePath.LOGIN
            },
        ];
        return data;
    }
}
