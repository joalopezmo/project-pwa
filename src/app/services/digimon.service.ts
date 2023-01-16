import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Digimon } from '../models/digimon.interface';

@Injectable({
  providedIn: 'root',
})
export class DigimonService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://digimon-api.vercel.app/api/digimon';
  }

  // method http por retuns the array of all digimons

  getAllDigimons(): Observable<Digimon[]> {
    return this.httpClient.get<Digimon[]>(this.baseUrl);
  }

  getDigimonByName(name: string): Observable<Digimon[]> {
    return this.httpClient.get<Digimon[]>(`${this.baseUrl}/name/${name}`);
  }

  getDigimonByLevel(level: string): Observable<Digimon> {
    return this.httpClient.get<Digimon>(`${this.baseUrl}/level/${level}`);
  }
}
