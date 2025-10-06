# Co zostało zrobione

### 06.10.2025

### 1. Instalacja @angular/material

```
npm i -g @angular/material
```

#

### 2. Dodanie folderów `enum` oraz `interface` do `app`

```
/src/app/enum/role.enum.ts:

export enum RoleEnum {
  user = 'User',
  admin = 'Admin',
}

```

#

```
/src/app/interface/user.interface.ts:

import { RoleEnum } from '../enum/role.enum'; // auto-uzupełni po wpisaniu RoleEnum

export interface UserInterface {
  name: string;
  surname: string;
  role: RoleEnum;
  email: string;
}
```

#

### 3. Poprawa tablicy `users` w `u1.component.ts`, żeby role działały z RoleEnum (zaznaczyłem pustym komentarzem)

```
const users: UserInterface[] = [
  {
    name: 'Jacek',
    surname: 'Mąciwór',
    role: RoleEnum.admin, //
    email: 'jmaciwor@gmail.com',
  },
  {
    name: 'Ania',
    surname: 'Wilczydół',
    role: RoleEnum.user, //
    email: 'a.wilczydol@a.b',
  },
  {
    name: 'Marek',
    surname: 'Krzywy',
    role: RoleEnum.user, //
    email: 'mkrzywy@pol.pl',
  },
];
```

## !!! Przed wykonaniem kroku czwartego, dodaj do `imports` te moduły:

- `MatTableModule` - potrzebne dla tabeli
- `MatFormField` - potrzebne dla późniejszego filtrowania
- `MatInputModule` - potrzebne dla późniejszego filtrowania

#

### 4. Wstawienie do pliku `u1.component.html` tabeli (wzoru) z [tej strony](https://v19.material.angular.dev/components/table/overview)

#

### 5. Dodanie filtrowania z [tej strony](https://v19.material.angular.dev/components/table/examples) przed tabelą w pliku `u1.component.html`

### 6. Dodanie odpowiednich linii do kodu `u1.component.ts`, żeby filtrowanie działało

```
export class U1Component {
  displayedColumns: string[] = ['name', 'surname', 'role', 'email'];
  dataSource = new MatTableDataSource(users);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
```
