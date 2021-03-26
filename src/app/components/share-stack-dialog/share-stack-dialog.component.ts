import { Inject, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-share-stack-dialog',
  templateUrl: './share-stack-dialog.component.html',
  styleUrls: ['./share-stack-dialog.component.css']
})
export class ShareStackDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ShareStackDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{friendId:number}
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
