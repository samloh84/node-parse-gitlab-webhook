import _ from "lodash";
import {formatUser} from "./formatUser.js";
import {formatRepository} from "./formatRepository.js";

export function parseTagPushEvent(event, callbacks) {
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

    let checkoutSha = _.get(body, 'checkout_sha');
    let ref = _.get(body, 'ref');


    let message = `${user} tagged ${checkoutSha} with tag ${ref} in ${repository}`;
    return {
        user,
        repository,
        message
    }
}