import job_event from "./payloads/job.json";
import {parseGitLabWebhookJobEvent} from "../index";
import * as chai from "chai";

const should = chai.should();

describe('parseGitLabWebhookJobEvent', function () {
    it(`should return a message`, function () {
        let result = parseGitLabWebhookJobEvent(job_event);
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