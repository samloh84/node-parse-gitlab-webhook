import {readJsonFileSync} from "./util/FileUtil.js";
import * as chai from "chai";

import {
    parseTagPushEvent
} from "../parseTagPushEvent.js";

const tag_push_event = readJsonFileSync('./payloads/tag_push.json');


const should = chai.should();

describe('parseGitLabWebhookTagPushEvent', function () {
    it(`should return a message`, function () {
        let result = parseTagPushEvent(tag_push_event);
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