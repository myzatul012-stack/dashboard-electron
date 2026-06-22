import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb-browser';

@Injectable({
  providedIn: 'root'
})
export class PouchdbAuthService {

  private db = new PouchDB('users');

  constructor() {
    this.seedLocalUsers();
  }

  private async seedLocalUsers() {
    const localUsers = [
      { _id: 'local@test.com', email: 'local@test.com', password: 'Local@123' }
    ];

    for (const user of localUsers) {
      try {
        await this.db.get(user._id);
      } catch {
        await this.db.put(user);
        console.log(`PouchDB: seeded user ${user._id}`);
      }
    }
  }

  async validate(email: string, password: string): Promise<boolean> {
    try {
      const user: any = await this.db.get(email);
      return user.email === email && user.password === password;
    } catch {
      return false;
    }
  }
}