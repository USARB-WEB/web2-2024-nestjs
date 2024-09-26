import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly cats: any[] = [
    {
      id: 1,
      name: 'Tom'
    },
    {
      id: 2,
      name: 'Garfield'
    },
    {
      id: 3,
      name: 'Kitty'
    },
    {
      id: 4,
      name: 'Felix'
    }
  ];

  create(payload: any): any {
    const newCat = {
      id: payload.id,
      name: payload.name
    };
    this.cats.push(newCat);
    return newCat;
  }

  findAll(): string[] {
    return this.cats;
  }

  update(id: number, payload: any): any {
    const existingCatIndex = this.cats.findIndex(cat => cat.id === id);

    if (existingCatIndex === -1) {
      return 'Cat not found';
    }

    this.cats[existingCatIndex] = {
      ...this.cats[existingCatIndex],
      name: payload.name
    };

    return this.cats[existingCatIndex];
  }
}
