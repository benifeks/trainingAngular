import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DataTable, OutSelectedColumn } from 'src/models/makeUpTableModels';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
})
export class FieldComponent {
  @Output() outColumn: EventEmitter<OutSelectedColumn> =
    new EventEmitter<OutSelectedColumn>();
  @Input() dataTable: DataTable;

  public changeArrow(event: any, column: string): void {
    let selectedColumn: OutSelectedColumn = {
      idColumn: event.target.id,
      nameColumn: column,
    };

    this.outColumn.emit(selectedColumn);
  }
}
