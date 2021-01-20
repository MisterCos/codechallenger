import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Constants {
    public static  API_ENDPOINT: string = "https://my-user-manager.herokuapp.com/users";
}