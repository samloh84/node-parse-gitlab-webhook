import _ from "lodash";
import {formatUser} from "./formatUser";
import {formatRepository} from "./formatRepository";

export function parseGitLabWebhookWikiPageEvent(event, callbacks) {
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
    let wikiPageUrl = _.get(object_attributes, 'url');
    let wikiPageTitle = _.get(object_attributes, 'title');
    let actionVerbs = {
        'create': 'created',
        'update': 'updated',
        'delete': 'deleted',
    }

    let actionVerb = actionVerbs[action];
    let message = `${user} ${actionVerb} a [Wiki Page ${wikiPageTitle}](${wikiPageUrl}) in ${repository}`;
    return {user, repository, message}

}