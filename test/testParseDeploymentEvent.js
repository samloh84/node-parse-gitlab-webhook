import {
    parseDeploymentEvent
} from "../parseDeploymentEvent.js";
import * as chai from "chai";
import {readJsonFileSync} from "./util/FileUtil.js";

const deployment_event = readJsonFileSync(`./test/payloads/deployment.json`);

const should = chai.should();

describe('parseDeploymentEvent', function () {
    it(`should return a message`, function () {
        let result = parseDeploymentEvent(deployment_event);
        should.exist(result);

        result.should.have.property('user');
        console.log(`User: ${result.user}`);
        result.user.should.not.have.string("undefined");
        result.user.should.not.have.string("null");

        result.should.have.property('project');
        console.log(`Project: ${result.project}`);
        result.project.should.not.have.string("undefined");
        result.project.should.not.have.string("null");


        result.should.have.property('message');
        console.log(`Message: ${result.message}`);
        result.message.should.not.have.string("undefined");
        result.message.should.not.have.string("null");


    })
})
