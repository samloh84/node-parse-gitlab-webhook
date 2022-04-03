import {
    parseGitLabWebhookPipelineEvent
} from "./parseGitLabWebhookPipelineEvent";
import {parseGitLabWebhookPushEvent} from "./parseGitLabWebhookPushEvent";
import {parseGitLabWebhookTagPushEvent} from "./parseGitLabWebhookTagPushEvent";
import {parseGitLabWebhookIssueEvent} from "./parseGitLabWebhookIssueEvent";
import {parseGitLabWebhookNoteEvent} from "./parseGitLabWebhookNoteEvent";
import {
    parseGitLabWebhookMergeRequestEvent
} from "./parseGitLabWebhookMergeRequestEvent";
import {
    parseGitLabWebhookWikiPageEvent
} from "./parseGitLabWebhookWikiPageEvent";
import {parseGitLabWebhookJobEvent} from "./parseGitLabWebhookJobEvent";
import {
    parseGitLabWebhookDeploymentEvent
} from "./parseGitLabWebhookDeploymentEvent";
import {parseGitLabWebhookMemberEvent} from "./parseGitLabWebhookMemberEvent";
import {
    parseGitLabWebhookSubgroupEvent
} from "./parseGitLabWebhookSubgroupEvent";
import {
    parseGitLabWebhookFeatureFlagEvent
} from "./parseGitLabWebhookFeatureFlagEvent";
import {parseGitLabWebhookReleaseEvent} from "./parseGitLabWebhookReleaseEvent";

const _ = require("lodash");

// https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html


function parseGitLabWebhookEvent(event, callbacks) {

    let gitlabEventHeader = _.get(event, ['headers', 'x-gitlab-event']);

    switch (gitlabEventHeader) {
        case 'Push Hook':
            return parseGitLabWebhookPushEvent(event, callbacks);
        case 'Tag Push Hook':
            return parseGitLabWebhookTagPushEvent(event, callbacks);
        case 'Issue Hook':
            return parseGitLabWebhookIssueEvent(event, callbacks);
        case 'Note Hook':
            return parseGitLabWebhookNoteEvent(event, callbacks);
        case 'Merge Request Hook':
            return parseGitLabWebhookMergeRequestEvent(event, callbacks);
        case 'Wiki Page Hook':
            return parseGitLabWebhookWikiPageEvent(event, callbacks);
        case 'Pipeline Hook':
            return parseGitLabWebhookPipelineEvent(event, callbacks);
        case 'Job Hook':
            return parseGitLabWebhookJobEvent(event, callbacks);
        case 'Deployment Hook':
            return parseGitLabWebhookDeploymentEvent(event, callbacks);
        case 'Member Hook':
            return parseGitLabWebhookMemberEvent(event, callbacks);
        case 'Subgroup Hook':
            return parseGitLabWebhookSubgroupEvent(event, callbacks);
        case 'Feature Flag Hook':
            return parseGitLabWebhookFeatureFlagEvent(event, callbacks);
        case 'Release Hook':
            return parseGitLabWebhookReleaseEvent(event, callbacks);
    }
}

