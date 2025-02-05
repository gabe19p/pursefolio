import { Component, Inject, OnInit, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { WorkInfo } from '../models/work-info';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pin-dialog',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', overflow: 'hidden' })),
      state('expanded', style({ height: 'auto' })),
      transition('collapsed <=> expanded', [animate('300ms ease-in-out')]),
    ]),
    trigger('fadeSkills', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      // Add a longer delay for the fade-in and fade-out
      transition('visible <=> hidden', [
        animate('1s ease-in-out', style({ opacity: 0 })), // Fade out
        animate('1s ease-in-out', style({ opacity: 1 })), // Fade in
      ]),
    ]),
  ],
  templateUrl: './pin-dialog.component.html',
  styleUrls: ['./pin-dialog.component.scss'],
})
export class PinDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { info: WorkInfo },
    public dialogRef: MatDialogRef<PinDialogComponent>
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  // Expansion state and toggle
  isExpanded: boolean = false;

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;

    if (this.isExpanded) {
      // You can adjust the size as needed when the content expands
      setTimeout(() => {
        this.dialogRef.updateSize('80vw', 'auto'); // Or adjust the width dynamically
      }, 200); // Small delay to allow smooth transition
    } else {
      this.dialogRef.updateSize('60vw', 'auto'); // Resize back when collapsed
    }
  }
}
