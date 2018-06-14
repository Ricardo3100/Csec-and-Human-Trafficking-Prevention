<form #contactForm="ngForm" (ngSubmit)="submit(content)">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstName" placeholder="Your name.." [(ngModel)]="contact.firstName" (blur)="checkIfEmpty('firstName')">
        <span class="error red" *ngIf="errors.firstName">This field cannot be empty</span>

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastName" placeholder="Your last name.." [(ngModel)]="contact.lastName" required (blur)="checkIfEmpty('lastName')">
        <span class="error red" *ngIf="errors.lastName">This field cannot be empty</span>

        <label for="email">E-Mail</label>
        <input type="text" id="email" name="email" placeholder="Your e-mail address.." [(ngModel)]="contact.email" required (blur)="checkIfEmpty('email')">
        <span class="error red" *ngIf="errors.email">This field cannot be empty</span>

        <label for="subject">Comments</label>
        <textarea id="comments" name="comments" placeholder="Write something.." style="height:200px" [(ngModel)]="contact.comments"
          required (blur)="checkIfEmpty('comments')"></textarea>
        <span class="error red" *ngIf="errors.comments">This field cannot be empty</span>

        <button class="btn btn-primary">
          <span *ngIf="!loading">
            Submit
          </span>
          <span *ngIf="loading">
            <i class="fas fa-spinner fa-spin"></i>
          </span>
        </button>


        <!-- Button trigger modal -->

        <ng-template #content let-c="close" let-d="dismiss">
          <div class="modal-header">
            <h4 class="modal-title">Thank You</h4>
            <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Thank you for contacting us! We will be getting back to you shortly.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-dark" (click)="c('Close click')" (click)="clear();">Close</button>
          </div>
        </ng-template>

      </form>