import {readFileSync} from "node:fs";
import * as chai from "chai";

import {parseNoteEvent} from "../parseNoteEvent.js";
import {readJsonFileSync} from "./util/FileUtil.js";

const note_code_snippet_event = readJsonFileSync("./payloads/note_code_snippet.json");
const note_commit_event = readJsonFileSync("./payloads/note_commit.json");
const note_issue_event = readJsonFileSync("./payloads/note_issue.json");
const note_merge_request_event = readJsonFileSync("./payloads/note_merge_request.json");

const should = chai.should();

describe('parseGitLabWebhookNoteEvent', function () {
    it(`should return a message on Code Snippet Event`, function () {
        let result = parseNoteEvent(note_code_snippet_event);
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

    it(`should return a message on Commit Event`, function () {
        let result = parseNoteEvent(note_commit_event);
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
    it(`should return a message on Issue Event`, function () {
        let result = parseNoteEvent(note_issue_event);
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

    it(`should return a message on Merge Request Event`, function () {
        let result = parseNoteEvent(note_merge_request_event);
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