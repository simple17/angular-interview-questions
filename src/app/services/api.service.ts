import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormFieldset } from '../interfaces/FormFieldset';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getFormStructure = (): Observable<FormFieldset[]> => {
    const mockResponse: FormFieldset[] = [
      {
        legend: 'Fieldset 1',
        fields: [
          { name: 'field1_1', label: 'Field 1_1', type: 'text' },
          { name: 'field1_2', label: 'Field 1_2', type: 'text' },
        ],
      },
      {
        legend: 'Fieldset 2',
        fields: [
          { name: 'field2_1', label: 'Field 2_1', type: 'text' },
          { name: 'field2_2', label: 'Field 2-2', type: 'number' },
          { name: 'field2_3', label: 'Field 2_3', type: 'checkbox' },
        ],
      },
    ];
    return of(mockResponse);
  };

  constructor() {}
}
