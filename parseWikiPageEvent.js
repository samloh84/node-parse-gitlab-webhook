import _ from "lodash";
import {formatUser} from "./formatUser.js";
import {formatProject} from "./formatProject.js";

export function parseWikiPageEvent(event, callbacks) {
    let body = _.get(event, 'body');

    let formatUserCallback = _.get(callbacks, 'formatUser');
    let formatProjectCallback = _.get(callbacks, 'formatProject');

    let user;
    if (!_.isNil(formatUserCallback)) {
        user = formatUserCallback(event);
    } else {
        user = formatUser(event);
    }

    let project;
    if (!_.isNil(formatProjectCallback)) {
        project = formatProjectCallback(event);
    } else {
        project = formatProject(event);
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
    let message = `${user} ${actionVerb} a [Wiki Page ${wikiPageTitle}](${wikiPageUrl}) in ${project}`;
    return {user, project, message}

}