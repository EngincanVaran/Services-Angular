export class LoggingService {

    logAccountAdded(account: string){
        console.log("A server added, new server: " + account)
    }

    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}