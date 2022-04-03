const subgroup_add_event = require('./payloads/subgroup_add.json');
const subgroup_remove_event = require('./payloads/subgroup_remove.json');
const {parseGitLabWebhookSubgroupEvent} = require('../index');
import * as chai from "chai";
const should = chai.should();

describe('parseGitLabWebhookSubgroupEvent', function () {

    it(`should return a message on Add Event`, function () {
        let result = parseGitLabWebhookSubgroupEvent(subgroup_add_event);
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
        let result = parseGitLabWebhookSubgroupEvent(subgroup_remove_event);
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