import {
    parseFeatureFlagEvent
} from "../parseFeatureFlagEvent.js";
import * as chai from "chai";
import {readJsonFileSync} from "./util/FileUtil.js";

const feature_flag_event = readJsonFileSync("./test/payloads/feature_flag.json");

const should = chai.should();

describe('parseFeatureFlagEvent', function () {
    it(`should return a message`, function () {
        let result = parseFeatureFlagEvent(feature_flag_event);
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