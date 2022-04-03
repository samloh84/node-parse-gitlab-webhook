import _ from "lodash";

export function formatRepository(event) {
    let body = _.get(event, 'body');
    let repository = _.get(body, 'repository');
    let repository_name = _.get(repository, 'name');
    let repository_homepage = _.get(repository, 'homepage');

    return `[Repository ${repository_name}](${repository_homepage})`;
}