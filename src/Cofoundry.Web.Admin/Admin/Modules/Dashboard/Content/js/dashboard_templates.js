angular.module('cms.dashboard').run(['$templateCache',function(t){t.put('../Admin/Modules/Dashboard/Js/UIComponents/DashboardComponent.html','<div class="dashboard-item">    <h3>{{vm.heading}}</h3>    <p class="alert" ng-if="vm.numItems === 0">There are no {{vm.entityNamePlural}}</p>    <div ng-transclude ng-if="vm.numItems || vm.loader.isLoading" cms-loading="vm.loader.isLoading">    </div>    <div class="btn-group">        <a class="btn btn-small" href="{{vm.listUrl}}" ng-if="vm.listUrl"><i class="icon-list"></i> All {{vm.entityNamePlural}}</a>        <a class="btn btn-small" href="{{vm.createUrl}}" ng-if="vm.createUrl"><i class="icon-plus"></i> New {{vm.entityName}}</a>    </div></div>');
t.put('../Admin/Modules/Dashboard/Js/Routes/Dashboard.html','<!--HEADER--><cms-page-header cms-title="Dashboard"></cms-page-header><!--CONTENT--><cms-page-body cms-sub-header="with-header">    <div class="dashboard">        <h2>Welcome to Cofoundry</h2>        <p>Thank you for trying out the early feedback release of Cofoundry.</p>        <p>            We\'ll be working on the dashboard area and ways to customize it in a future release. If you want to contribute suggestions please check out issue #61.        </p>        <h3>Getting Started</h3>        <ul>            <li><a href="https://github.com/cofoundry-cms/cofoundry/wiki/" target="_blank">Documentation</a></li>            <li><a href="https://github.com/cofoundry-cms/cofoundry/wiki/Sample-Projects" target="_blank">Sample Projects</a></li>            <li><a href="http://cofoundry.org/" target="_blank">Cofoundry.org</a></li>        </ul>        <h3>Feedback</h3>        <p>            We\'re keen to hear feedback about Cofoundry. Whether you\'ve been playing about with the samples, creating a website, found a bug or have a suggestion we\'d love to hear it.        </p>        <ul>            <li><a href="https://gitter.im/cofoundry-cms/cofoundry/" target="_blank">Chat with us on Gitter</a></li>            <li><a href="http://stackoverflow.com/search?q=cofoundry/" target="_blank">Ask a question on StackOverflow</a></li>            <li><a href="https://twitter.com/cofoundrycms/" target="_blank">Follow us on Twitter</a></li>            <li><a href="https://github.com/cofoundry-cms/cofoundry/issues/" target="_blank">Submit an issue</a></li>            <li><a href="https://www.cofoundry.org/contact/" target="_blank">Contact us directly</a></li>            <li><a href="https://www.cofoundry.org/blog/" target="_blank">Follow our blog</a></li>        </ul>    </div></cms-page-body>');}]);