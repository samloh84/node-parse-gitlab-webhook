const _ = require("lodash");
const {parseGitLabWebhookPushEvent} = require("./parseGitLabWebhookPushEvent");
const {parseGitLabWebhookTagPushEvent} = require("./parseGitLabWebhookTagPushEvent");
const {parseGitLabWebhookIssueEvent} = require("./parseGitLabWebhookIssueEvent");
const {parseGitLabWebhookNoteEvent} = require("./parseGitLabWebhookNoteEvent");
const {parseGitLabWebhookMergeRequestEvent} = require("./parseGitLabWebhookMergeRequestEvent");
const {parseGitLabWebhookWikiPageEvent} = require("./parseGitLabWebhookWikiPageEvent");
const {parseGitLabWebhookPipelineEvent} = require("./parseGitLabWebhookPipelineEvent");
const {parseGitLabWebhookJobEvent} = require("./parseGitLabWebhookJobEvent");
const {parseGitLabWebhookDeploymentEvent} = require("./parseGitLabWebhookDeploymentEvent");
const {parseGitLabWebhookMemberEvent} = require("./parseGitLabWebhookMemberEvent");
const {parseGitLabWebhookSubgroupEvent} = require("./parseGitLabWebhookSubgroupEvent");
const {parseGitLabWebhookFeatureFlagEvent} = require("./parseGitLabWebhookFeatureFlagEvent");
const {parseGitLabWebhookReleaseEvent} = require("./parseGitLabWebhookReleaseEvent");

module.exports = {
    parseGitLabWebhookEvent,
    parseGitLabWebhookPushEvent,
    parseGitLabWebhookTagPushEvent,
    parseGitLabWebhookIssueEvent,
    parseGitLabWebhookNoteEvent,
    parseGitLabWebhookMergeRequestEvent,
    parseGitLabWebhookWikiPageEvent,
    parseGitLabWebhookPipelineEvent,
    parseGitLabWebhookJobEvent,
    parseGitLabWebhookDeploymentEvent,
    parseGitLabWebhookMemberEvent,
    parseGitLabWebhookSubgroupEvent,
    parseGitLabWebhookFeatureFlagEvent,
    parseGitLabWebhookReleaseEvent
}