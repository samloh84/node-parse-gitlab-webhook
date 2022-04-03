import {
    parseMemberEvent
} from "../parseMemberEvent.js";
import * as chai from "chai";
import {readJsonFileSync} from "./util/FileUtil.js";

const group_member_add_event = readJsonFileSync("./test/payloads/group_member_add.json");
const group_member_remove_event = readJsonFileSync("./test/payloads/group_member_remove.json");
const group_member_update_event = readJsonFileSync("./test/payloads/group_member_update.json");


const should = chai.should();

describe('parseMemberEvent', function () {
    it(`should return a message on Add Event`, function () {
        let result = parseMemberEvent(group_member_add_event);
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

    it(`should return a message on Remove Event`, function () {
        let result = parseMemberEvent(group_member_remove_event);
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

    it(`should return a message on Update Event`, function () {
        let result = parseMemberEvent(group_member_update_event);
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
