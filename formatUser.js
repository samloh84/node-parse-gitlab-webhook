import _ from "lodash";

export function formatUser(event) {
    let body = _.get(event, 'body');


    let user = _.get(body, 'user');
    let user_name, user_username;

    if (_.isNil(user)) {
        user_name = _.get(body, 'user_name');
        user_username = _.get(body, 'user_username');
    } else {
        user_name = _.get(user, 'name');
        user_username = _.get(user, 'username');
    }

    return `${user_name} [${user_username}]`;
}