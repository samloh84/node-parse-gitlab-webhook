import _ from "lodash";
import {formatUser} from "./formatUser.js";
import {formatRepository} from "./formatRepository.js";

export function parseMergeRequestEvent(event, callbacks) {
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
    let mergeRequestUrl = _.get(object_attributes, 'url');
    let mergeRequestId = _.get(object_attributes, 'id');
    let mergeRequestTitle = _.get(object_attributes, 'title');
    let actionVerbs = {
        'open': 'opened',
        'close': 'closed',
        'reopen': 'reopened',
        'update': 'updated',
        'approved': 'approved',
        'unapproved': 'unapproved',
        'merge': 'merged'
    }

    let actionVerb = actionVerbs[action];
    let message = `${user} ${actionVerb} a [Merge Request ${mergeRequestId} ${mergeRequestTitle}](${mergeRequestUrl}) in ${repository}`;
    return {user, repository, message}

}