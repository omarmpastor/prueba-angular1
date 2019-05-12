import template from './heroes.directive.html';

export default function () {
    return {
        restrict: 'E',
        replace: false,
        template,
        link: (scope, element, attrs) => { },
        scope: {
            heroes: "=",
            onAdd: "&"
        }
    };
}
