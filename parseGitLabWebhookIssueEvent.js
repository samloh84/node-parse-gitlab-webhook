import _ from "lodash";
import {formatUser} from "./formatUser";
import {formatRepository} from "./formatRepository";

export function parseGitLabWebhookIssueEvent(event, callbacks) {
    let body = _.get(event, 'body');

    let formatUserCallback = _.get(callbacks, 'formatUser');
    let formatRepositoryCallback = _.get(callbacks, 'formatRepository');

    let user;
    if (!_.isNil(formatUserCallback)) {
        user = formatUserCallback(event);
    } else {
        user = formatUser(event);
    }

    let repository;
    if (!_.isNil(formatRepositoryCallback)) {
        repository = formatRepositoryCallback(event);
    } else {
        repository = formatRepository(event);
    }

    let object_attributes = _.get(body, 'object_attributes');


    let action = _.get(object_attributes, 'action');
    let issueUrl = _.get(object_attributes, 'url');
    let issueId = _.get(object_attributes, 'id');
    let issueTitle = _.get(object_attributes, 'title');
    let actionVerbs = {
        'open': 'opened',
        'close': 'closed',
        'reopen': 'reopened',
        'update': 'updated',
    }

    let actionVerb = actionVerbs[action];
    let message = `${user} ${actionVerb} an [Issue ${issueId} ${issueTitle}](${issueUrl}) in ${repository}`;
    return {
        user,
        repository,
        message
    }

}