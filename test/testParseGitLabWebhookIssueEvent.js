import issue_event from "./payloads/issue.json";
import * as chai from "chai";
import {parseGitLabWebhookIssueEvent} from "../index";

const should = chai.should();

describe('parseGitLabWebhookIssueEvent', function () {
    it(`should return a message`, function () {
        let result = parseGitLabWebhookIssueEvent(issue_event);
        should.exist(result);

        result.should.have.property('user');
        console.log(`user: ${result.user}`);
        result.user.should.not.have.string("undefined");
        result.user.should.not.have.string("null");

        result.should.have.property('repository');
        console.log(`repository: ${result.repository}`);
        result.repository.should.not.have.string("undefined");
        result.repository.should.not.have.string("null");


        result.should.have.property('message');
        console.log(`Message: ${result.message}`);
        result.message.should.not.have.string("undefined");
        result.message.should.not.have.string("null");

    })
})