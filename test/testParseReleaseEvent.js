import {readJsonFileSync} from "./util/FileUtil.js";
import * as chai from "chai";

import {parseReleaseEvent} from "../parseReleaseEvent.js";

const release_event = readJsonFileSync('./test/payloads/release.json');


const should = chai.should();

describe('parseReleaseEvent', function () {
    it(`should return a message`, function () {
        let result = parseReleaseEvent(release_event);
        should.exist(result);

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