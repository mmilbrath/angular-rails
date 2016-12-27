import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Proposal} from './proposal';

@Injectable()
export class ProposalService {
    private proposalUrl = 'http://localhost:3003/proposals';

    constructor(private http: Http) {
    }

    getProposals(): Observable<Proposal[]> {
        return this.http.get(this.proposalUrl + ".json")
            .map((response: Response) => <Proposal[]>response.json())
            .catch(this.handleError);
    }

    getProposal(id: number) {
        return this.http.get(this.proposalUrl + "/" + id + ".json");
    }

    createProposal(proposal: Proposal) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.proposalUrl + ".json", JSON.stringify(proposal), options)
            .map((res: Response) => res.json());
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}