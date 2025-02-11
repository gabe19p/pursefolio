import { Component, OnInit } from '@angular/core';
import {
  RouterLink,
  RouterOutlet,
  RouterLinkActive,
  Router,
  NavigationEnd,
} from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pursefolio';
  private dialogOpen: boolean = false;

  constructor(private dialog: MatDialog) {}

  // dialog for the education
  openEducationDialog() {
    if (!this.dialogOpen) {
      // Check if the dialog is not already open
      this.dialogOpen = true; // change because open
      const dialogRef = this.dialog.open(EducationComponent, {
        panelClass: ['education-dialog'],
      });
      // Reset dialogOpen to false when the dialog is closed
      dialogRef.afterClosed().subscribe(() => {
        this.dialogOpen = false; // Reset the flag
      });
    }
  }

  openProjectsDialog() {
    if (!this.dialogOpen) {
      this.dialogOpen = true;
      const dialogRef = this.dialog.open(ProjectsComponent, {
        panelClass: ['education-dialog'],
      });
      dialogRef.afterClosed().subscribe(() => {
        this.dialogOpen = false;
      });
    }
  }
}
