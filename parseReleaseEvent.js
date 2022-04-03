import _ from "lodash";
import {formatUser} from "./formatUser.js";
import {formatProject} from "./formatProject.js";

export function parseReleaseEvent(event, callbacks) {
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

    let verb = _.get(body, 'action');
    switch (verb) {
        case 'create':
            verb = 'created';
            break;
        case 'update':
            verb = 'updated';
            break;
    }
    let release_name = _.get(body, 'name');
    let release_url = _.get(body, 'url');
    let tag = _.get(body, 'tag');

    let message = `[Release ${release_name}](${release_url}) has been ${verb} using Tag ${tag} in ${project}`;


    return {
        user,
        project,
        message
    }
}