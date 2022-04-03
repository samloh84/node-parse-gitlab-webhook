import {
    parseMemberEvent
} from "../parseMemberEvent.js";
import * as chai from "chai";
import {readJsonFileSync} from "./util/FileUtil.js";

const group_member_add_event = readJsonFileSync("./payloads/group_member_add.json");
const group_member_remove_event = readJsonFileSync("./payloads/group_member_remove.json");
const group_member_update_event = readJsonFileSync("./payloads/group_member_update.json");


const should = chai.should();

describe('parseGitLabWebhookMemberEvent', function () {
    it(`should return a message on Add Event`, function () {
        let result = parseMemberEvent(group_member_add_event);
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

    it(`should return a message on Remove Event`, function () {
        let result = parseMemberEvent(group_member_remove_event);
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

    it(`should return a message on Update Event`, function () {
        let result = parseMemberEvent(group_member_update_event);
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
