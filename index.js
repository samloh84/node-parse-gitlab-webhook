const _ = require("lodash");
const {parsePushEvent} = require("./parsePushEvent.js");
const {parseTagPushEvent} = require("./parseTagPushEvent.js");
const {parseIssueEvent} = require("./parseIssueEvent.js");
const {parseNoteEvent} = require("./parseNoteEvent.js");
const {parseMergeRequestEvent} = require("./parseMergeRequestEvent.js");
const {parseWikiPageEvent} = require("./parseWikiPageEvent.js");
const {parsePipelineEvent} = require("./parsePipelineEvent.js");
const {parseJobEvent} = require("./parseJobEvent.js");
const {parseDeploymentEvent} = require("./parseDeploymentEvent.js");
const {parseMemberEvent} = require("./parseMemberEvent.js");
const {parseSubgroupEvent} = require("./parseSubgroupEvent.js");
const {parseFeatureFlagEvent} = require("./parseFeatureFlagEvent.js");
const {parseReleaseEvent} = require("./parseReleaseEvent.js");
const {parseEvent} = require("./parseEvent.js");

module.exports = {
    parseGitLabWebhookEvent: parseEvent,
    parseGitLabWebhookPushEvent: parsePushEvent,
    parseGitLabWebhookTagPushEvent: parseTagPushEvent,
    parseGitLabWebhookIssueEvent: parseIssueEvent,
    parseGitLabWebhookNoteEvent: parseNoteEvent,
    parseGitLabWebhookMergeRequestEvent: parseMergeRequestEvent,
    parseGitLabWebhookWikiPageEvent: parseWikiPageEvent,
    parseGitLabWebhookPipelineEvent: parsePipelineEvent,
    parseGitLabWebhookJobEvent: parseJobEvent,
    parseGitLabWebhookDeploymentEvent: parseDeploymentEvent,
    parseGitLabWebhookMemberEvent: parseMemberEvent,
    parseGitLabWebhookSubgroupEvent: parseSubgroupEvent,
    parseGitLabWebhookFeatureFlagEvent: parseFeatureFlagEvent,
    parseGitLabWebhookReleaseEvent: parseReleaseEvent
}