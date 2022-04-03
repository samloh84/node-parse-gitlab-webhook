import {parseGitLabWebhookDeploymentEvent} from "../index.js";
import * as chai from "chai";
import {readFileSync} from "node:fs";

const deployment_event = readFileSync("./payloads/deployment.json");

const should = chai.should();

describe('parseGitLabWebhookDeploymentEvent', function () {
    it(`should return a message`, function () {
        let result = parseGitLabWebhookDeploymentEvent(deployment_event);
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
