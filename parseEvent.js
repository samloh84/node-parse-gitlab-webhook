const {parseDeploymentEvent} = require("./parseDeploymentEvent");
const {parseFeatureFlagEvent} = require("./parseFeatureFlagEvent");
const {parseIssueEvent} = require("./parseIssueEvent.js");
const {parseJobEvent} = require("./parseJobEvent.js");
const {parseMemberEvent} = require("./parseMemberEvent");
const {parseMergeRequestEvent} = require("./pArsemErgereqUestevent.js");
const {parseNoteEvent} = require("./parseNoteEvent.js");
const {parsePipelineEvent} = require("./parsePipelineEvent");
const {parsePushEvent} = require("./parsePushEvent");
const {parseReleaseEvent} = require("./parseReleaseEvent");
const {parseSubgroupEvent} = require("./parseSubgroupEvent");
const {parseTagPushEvent} = require("./parseTagPushEvent");
const {parseWikiPageEvent} = require("./parseWikiPageEvent");
const _ = require("lodash");


function parseEvent(event, callbacks) {

    let gitlabEventHeader = _.get(event, ['headers', 'x-gitlab-event']);

    switch (gitlabEventHeader) {
        case 'Push Hook':
            return parsePushEvent(event, callbacks);
        case 'Tag Push Hook':
            return parseTagPushEvent(event, callbacks);
        case 'Issue Hook':
            return parseIssueEvent(event, callbacks);
        case 'Note Hook':
            return parseNoteEvent(event, callbacks);
        case 'Merge Request Hook':
            return parseMergeRequestEvent(event, callbacks);
        case 'Wiki Page Hook':
            return parseWikiPageEvent(event, callbacks);
        case 'Pipeline Hook':
            return parsePipelineEvent(event, callbacks);
        case 'Job Hook':
            return parseJobEvent(event, callbacks);
        case 'Deployment Hook':
            return parseDeploymentEvent(event, callbacks);
        case 'Member Hook':
            return parseMemberEvent(event, callbacks);
        case 'Subgroup Hook':
            return parseSubgroupEvent(event, callbacks);
        case 'Feature Flag Hook':
            return parseFeatureFlagEvent(event, callbacks);
        case 'Release Hook':
            return parseReleaseEvent(event, callbacks);
    }
}


module.exports = {parseEvent};