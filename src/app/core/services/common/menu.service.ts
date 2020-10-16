import { Injectable } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';


@Injectable({ providedIn: 'root' })
export class MenuService {
    getAll() {
        const data: MenuItem[] = [
            {
                icon: 'home',
                label: 'Home',
                // path: AppRoute.LOGIN
            },
        ];
        return data;
    }
}
