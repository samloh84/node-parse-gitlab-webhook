import {readJsonFileSync} from "./util/FileUtil.js";
import * as chai from "chai";

import {
    parseSubgroupEvent
} from "../parseSubgroupEvent.js";

const subgroup_add_event = readJsonFileSync('./payloads/subgroup_add.json');
const subgroup_remove_event = readJsonFileSync('./payloads/subgroup_remove.json');


const should = chai.should();

describe('parseGitLabWebhookSubgroupEvent', function () {

    it(`should return a message on Add Event`, function () {
        let result = parseSubgroupEvent(subgroup_add_event);
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
        let result = parseSubgroupEvent(subgroup_remove_event);
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