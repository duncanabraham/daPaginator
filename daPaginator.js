/**
 * daPaginator - An AngularJS pagination filter
 * 
 * When faced with adding pagination to a directive where the unique
 * name of the control is determined at run-time I struggled to make other
 * paginators do exactly what I wanted so I thought it best to write my 
 * own.
 * 
 * Credits
 * =======
 * I've used the dirPagination module for some time so a big hand 
 * to Michael Bromley for his excellent work.  Some parts of that
 * awesome directive may be similar to parts of this filter :)
 * 
 * (C) Copyright 2016 Duncan Abraham <duncan.abraham@tydusolutions.co.uk>
 */

'use strict';

/**
 * Options passed into this filter
 */

(function () {
    var moduleName = 'tydusol.daPaginator';

    /**
     * Work out which numbers to show on the page selection bar
     */
    var getPageNumbers = function (options) {
        var result = [];
        for (var i = 0; i <= options.lastPage; i++) {
            result.push(i);
        }
        var startPage = options.currentPage;
        if (startPage < options.numbersToShow) {
            startPage = 0;
        } else if (startPage > options.lastPage - options.numbersToShow) {
            startPage = options.lastPage - options.numbersToShow + 1;
        } else {
            startPage--;
        }
        return result.length > options.numbersToShow ? result.slice(startPage, startPage + options.numbersToShow) : result;
    };

    /**
     * Define the module
     */
    var module;
    /**
     * If the module doesn't exist create a new one, else use the existing module
     */
    try {
        module = angular.module(moduleName);
    } catch (err) {
        module = angular.module(moduleName, []);
    }

    /**
     * Define a filter to return a subset of a list based on the named paginator values
     */
    module.filter('daPaginator', ['pagingService', function (pagingService) {
        return function (input, options) {
            options.itemCount = input.length;
            var result,
                thisPaginatorName = options.name,
                thisPaginator = pagingService.getPaginator(thisPaginatorName, options),
                offset = thisPaginator.currentPage * thisPaginator.pageSize;
            result = input.slice(offset, offset + thisPaginator.pageSize);
            return result;
        };
    }]);

    /**
     * Define a control to interact with the paginator. The control needs to identify the required paginator and
     * allow the currentPage to be set.
     * 
     * It should also keep a watch on the page size as this could be changed externally and will effect the number
     * of pages, current page etc if changed
     */
    module.directive('daPageControls', ['pagingService', 'pagingTemplate', function (pagingService, pagingTemplate) {
        return {
            restrict: 'AE',
            templateUrl: function (elem, attrs) {
                return attrs.templateUrl || pagingTemplate.getPath();
            },
            scope: {
                pagername: '='
            },
            link: function (scope, element, attrs) {
                console.log('scope: ', scope);
                scope.paginator = pagingService.getPaginator(attrs.name, {});
                scope.setPage = function (n) {
                    if (n >= 0 && n <= scope.paginator.lastPage) {
                        scope.paginator.currentPage = n;
                        scope.paginator.pageNumbers = getPageNumbers(scope.paginator);
                    }
                };

                scope.$watch(scope.paginator.pageSize, function () {
                    scope.paginator.lastPage = (Math.ceil(+scope.paginator.itemCount / +scope.paginator.pageSize)) - 1;
                    scope.paginator.pageNumbers = getPageNumbers(scope.paginator);
                });
            }
        };
    }]);


    /**
     * Define a service to manage a list of named paginators, thereby allowing more than 1 per page.
     */
    module.service('pagingService', function () {
        var pages = {};
        
        /**
         * Getter and Setter for the paginator
         */
        this.getPaginator = function (pageName, options) {
            if (!pages[pageName]) {
                pages[pageName] = {
                    itemCount: +options.itemCount || 0,
                    currentPage: +options.currentPage || 0,
                    pageSize: +options.pageSize || 0,
                    endStops: options.endStops || true,
                    numbersToShow: +options.numbersToShow || 8
                };
            } else {
                pages[pageName].pageSize = +options.pageSize;
            }

            pages[pageName].lastPage = (Math.ceil(+pages[pageName].itemCount / +pages[pageName].pageSize)) - 1;
            pages[pageName].pageNumbers = getPageNumbers(pages[pageName]);

            return pages[pageName];
        };

    });

    /**
     * Provide a template for the navigation arrows etc.  The template can be in a folder called templates or this can
     * be replaced using the option "templateUrl" in the filter definition options.
     */
    module.provider('pagingTemplate', function () {

        var templatePath = 'templates/daPaginator.html';

        this.setPath = function (path) {
            templatePath = path;
        };

        this.$get = function () {
            return {
                getPath: function () {
                    return templatePath;
                }
            };
        };
    });

})();