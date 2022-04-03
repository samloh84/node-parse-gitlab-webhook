import _ from "lodash";

export function formatProject(event) {
    let body = _.get(event, 'body');
    let project = _.get(body, 'project');
    let project_name = _.get(project, 'name');
    let project_homepage = _.get(project, 'homepage');
    let project_web_url = _.get(project, 'web_url');

    return `[Project ${project_name}](${project_homepage || project_web_url})`;
}