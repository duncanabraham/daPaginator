# daPaginator

## Intro

daPaginator is an AngularJS filter to allow lists of items to be paged using the built-in "ng-repeat" directive. The paginator comes
in three parts, there's a filter for the list, a control called "daPageControls" to manage the list and an HTML template for the
control buttons.  The buttons assume you're using bootstrap but you could provide your own CSS.

## Getting started

You need to inject the code into your application like so:

```
var myApp = angular.module('testApp',['tydysol.daPaginator']);
```

This allows angular access to the directive and registers the internal service, filter etc

Now you just need to reference the filter and controls on your HTML page like this:

```
<tr ng-repeat="row in (data | daPaginator:{name:'listname', pageSize: 10}) track by $index">

```

In this example the name "listname" and the pageSize could both be provided from variables rather than using static values like this:

```
Controller:
$scope.listName = 'mylist';
$scope.pageSize = '10';
$scope.numbersToShow = '4';

HTML:
<tr ng-repeat="row in (data | daPaginator:{name:listName, pageSize: pageSize, numbersToShow: numbersToShow}) track by $index">
.
.
.
<div da-page-controls name={{listName}}></div>
```
Note: the name used to identify the filter must be the same as the name used on the da-page-controls directive.


## Options

When intialising the list there are a number of parameters you can pass in:

* name:             The list name. This is used to tie the controls to the list and should be unique on the page.
* pageSize:         A number representing the number of items to display on a single page
* currentPage:      Start on a particular page, defaults to the first page
* endStops:         This indicates if the controls should show First and Last buttons - default is true
* numbersToShow:    The number of page buttons to show on the control. Defaults to 8 like this: << < 1 2 3 4 5 6 7 8 > >>



## Template

The template for the buttons looks like this:
```
<ul class="pagination" ng-if="paginator.itemCount > 0">
    <li ng-if="paginator.endStops">
        <a ng-disabled="paginator.currentPage == 0" ng-click="setPage(0)">&laquo;</a>
    </li>
    <li>
        <a ng-disabled="paginator.currentPage == 0" href="" ng-click="setPage(paginator.currentPage - 1)">&lsaquo;</a>
    </li>
    <li ng-repeat="pageNumber in paginator.pageNumbers track by $index" ng-class="{ active : paginator.currentPage == pageNumber, disabled : pageNumber == '...' }">
        <a href="" ng-click="setPage(pageNumber)">{{ pageNumber + 1 }}</a>
    </li>
    <li>
        <a href="" ng-click="setPage(paginator.currentPage + 1)">&rsaquo;</a>
    </li>
    <li ng-if="paginator.endStops">
        <a ng-disabled="paginator.currentPage == paginator.lastPage" ng-click="setPage(paginator.lastPage)">&raquo;</a>
    </li>
</ul>
```
As mentioned above, bootstrap provides CSS for "pagination" but providing your own CSS would be easy enough.


## Example
I've provided a working example in the "testpag" folder.  To make it work do this:
```
cd testpag

npm install

sails lift
```

"npm install" is going to fetch all the dependencies and "sails lift" runs an instance of the Sails.js MVC API framework.  This is a
sledgehammer to crack a nut and could have been done with much less code but I don't mind giving Sails some credit - it's awesome :)


After lifting you can browse to your site on http://localhost:1337/

Within the testpag folder structure you only need to be concerned with:

* views/layout.ejs
* assets/js/dependencies/daPaginator.js
* assets/js/dependencies/test.js

Don't be concerned with the .ejs extension on the layout file, it's HTML which is parsed by a template engine but I'm not using it in that way
and the file is actually just HTML. You should be aware that Sails dynamically injects CSS and JS into this template when lifted so don't
change the `<!-- STYLES -->` or `<!-- SCRIPTS -->` sections just put files into the styles and js folders for them to be automatically linked here.

The "test.js" file is my mocked up AngularJS application with some test data.
