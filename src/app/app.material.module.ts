import { CommonModule } from '@angular/Common';
import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';

import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatOptionModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  NativeDateModule
} from '@angular/material';

@NgModule({
  imports: [
    LayoutModule,
    OverlayModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatOptionModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    NativeDateModule,
  ],
  exports: [
    LayoutModule,
    OverlayModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatOptionModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    NativeDateModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class AppMaterialModule { }
