import {
    parsePipelineEvent
} from "./parsePipelineEvent.js";
import {parsePushEvent} from "./parsePushEvent.js";
import {
    parseTagPushEvent
} from "./parseTagPushEvent.js";
import {parseIssueEvent} from "./parseIssueEvent.js";
import {parseNoteEvent} from "./parseNoteEvent.js";
import {
    parseMergeRequestEvent
} from "./parseMergeRequestEvent.js";
import {
    parseWikiPageEvent
} from "./parseWikiPageEvent.js";
import {parseJobEvent} from "./parseJobEvent.js";
import {
    parseDeploymentEvent
} from "./parseDeploymentEvent.js";
import {
    parseMemberEvent
} from "./parseMemberEvent.js";
import {
    parseSubgroupEvent
} from "./parseSubgroupEvent.js";
import {
    parseFeatureFlagEvent
} from "./parseFeatureFlagEvent.js";
import {
    parseReleaseEvent
} from "./parseReleaseEvent.js";

const _ = require("lodash");

// https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html


export function parseEvent(event, callbacks) {

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

