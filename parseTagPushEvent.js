import _ from "lodash";
import {formatUser} from "./formatUser.js";
import {formatProject} from "./formatProject.js";

export function parseTagPushEvent(event, callbacks) {
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

    let checkoutSha = _.get(body, 'checkout_sha');
    let ref = _.get(body, 'ref');


    let message = `${user} tagged ${checkoutSha} with tag ${ref} in ${project}`;
    return {
        user,
        project,
        message
    }
}