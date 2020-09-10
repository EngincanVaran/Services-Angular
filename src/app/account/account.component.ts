import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from "../shared/logging.service";
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountService],
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsService: AccountService ) {}

  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id,status);
    this.loggingService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
