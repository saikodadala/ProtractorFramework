/*global document, window, alert, console, require, browser,jasmine,
 requirePage, requireData, requireConfig, requireLibrary,
 describe, it, beforeEach, forEach, by, jshint, expect, element, result*/
/*jshint node: true, camelcase: false*/
/*global require: true*/
'use strict';

var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  foreach = require('gulp-foreach'),
  gulpProtractorAngular = require('gulp-angular-protractor'),
  gulpStart = gulp.Gulp.prototype.start,
  currentStartTaskName;

gulp.Gulp.prototype.start = function (task) {
  currentStartTaskName = task;
  gulpStart.apply(this, arguments);
};

function executeWebTests(suiteName, appName) {
  return gulp.src([])
    .pipe(gulpProtractorAngular({
      'configFile': './conf.js',
      'debug': false,
      'autoStartStopServer': false,
      args: [
        '--suite', suiteName,
        '--capabilities.browserName', 'chrome',
        '--params.APPNAME', appName,
        '--params.SUITENAME', currentStartTaskName,
        '--capabilities.platformName', 'Windows'
      ],
      keepAlive: false
    }))
    .on('error', function (e) {
      console.log('Ended with below ERROR::', e);
      process.exit(1);
    })
    .on('end', function () {
      console.log('Test complete');
      process.exit();
    });
}

function executeIEWebTests(suiteName, appName) {
  return gulp.src([])
    .pipe(gulpProtractorAngular({
      'configFile': './conf.js',
      'debug': false,
      'autoStartStopServer': false,
      args: [
        '--suite', suiteName,
        '--capabilities.browserName', 'internet explorer',
        '--capabilities.version', '11',
        '--params.APPNAME', appName,
        '--params.SUITENAME', currentStartTaskName,
        '--capabilities.platformName', 'Windows'
      ],
      keepAlive: false
    }))
    .on('error', function (e) {
      console.log('Ended with below ERROR::', e);
      process.exit(1);
    })
    .on('end', function () {
      console.log('Test complete');
      process.exit();
    });
}

gulp.task('EDI_Request', ['JShint'], function () {
  executeWebTests('EDI_Request', 'SPRAGUE_NATURAL_GAS');
});
gulp.task('EDI_History', ['JShint'], function () {
  executeWebTests('EDI_History', 'SPRAGUE_NATURAL_GAS');
});
gulp.task('EDI_Review', ['JShint'], function () {
  executeWebTests('EDI_Review', 'SPRAGUE_NATURAL_GAS');
});
gulp.task('EDI_ValidationRules', ['JShint'], function () {
  executeWebTests('EDI_ValidationRules', 'SPRAGUE_NATURAL_GAS');
});
gulp.task('EDI_Request_History_Review_Validation', ['JShint'], function () {
  executeWebTests('EDI_Request_History_Review_Validation', 'SPRAGUE_NATURAL_GAS');
});
gulp.task('Refrence_nomGroupAdder', ['JShint'], function () {
  executeWebTests('Refrence_nomGroupAdder', 'SPRAGUE_NATURAL_GAS');
});
gulp.task('userStories', ['JShint'], function () {
  executeWebTests('userStories', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('basisCurvesAndRecipes', ['JShint'], function () {
  executeWebTests('basisCurvesAndRecipes', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('quickPrice', ['JShint'], function () {
  executeWebTests('quickPrice', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('ReferencesUpdation', ['JShint'], function () {
  executeWebTests('ReferencesUpdation', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('UserStories_Iteration3_DealEntry', ['JShint'], function () {
  executeWebTests('UserStories_Iteration3_DealEntry', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('UserStories_Iteration3_SalesAdmin', ['JShint'], function () {
  executeWebTests('UserStories_Iteration3_SalesAdmin', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('UserStories_Iteration1_SalesAdmin', ['JShint'], function () {
  executeWebTests('UserStories_Iteration1_SalesAdmin', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('UserStories_Iteration1_DealEntry', ['JShint'], function () {
  executeWebTests('UserStories_Iteration1_DealEntry', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('UserStories_Iteration5_NatGasAdmin', ['JShint'], function () {
  executeWebTests('UserStories_Iteration5_NatGasAdmin', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('createShortContract', ['JShint'], function () {
  executeWebTests('createShortContract', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('hedgeDeal', ['JShint'], function () {
  executeWebTests('hedgeDeal', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('DealEntryTests', ['JShint'], function () {
  executeWebTests('dealEntryTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('DealEntryHedgeDealTests', ['JShint'], function () {
  executeWebTests('dealEntryHedgeDealTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('DealEntryRevenueReviewTests', ['JShint'], function () {
  executeWebTests('dealEntryRevenueReviewTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('DealEntryCostReviewTests', ['JShint'], function () {
  executeWebTests('dealEntryCostReviewTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('DealEntryDealUDFTests', ['JShint'], function () {
  executeWebTests('dealEntryDealUDFTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('DealEntryStatusChangeTests', ['JShint'], function () {
  executeWebTests('dealEntryStatusChangeTests', 'SPRAGUE_NATURAL_GAS');
});


gulp.task('test', ['JShint'], function () {
  executeWebTests('customTest', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('balancingTolerance', ['JShint'], function () {
  executeWebTests('balancingTolerance', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('capacityManagement', ['JShint'], function () {
  executeWebTests('capacityManagement', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('capacityValuation', ['JShint'], function () {
  executeWebTests('capacityValuation', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('urlToFunctionalChange', ['JShint'], function () {
  executeWebTests('urlToFunctionalChange', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('SalesAdminTestFile', ['JShint'], function () {
  executeWebTests('SalesAdminTestFile', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('CloneArchiveReprice', ['JShint'], function () {
  executeWebTests('CloneArchiveReprice', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('customerSalesAdminTests', ['JShint'], function () {
  executeWebTests('customerSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('SalesRepTests', ['JShint'], function () {
  executeWebTests('SalesRepTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('salesRepAndAdminFailed', ['JShint'], function () {
  executeWebTests('salesRepAndAdminFailed', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('NomGroup', ['JShint'], function () {
  executeWebTests('NomGroup', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('RepriceMultipleQuotes', ['JShint'], function () {
  executeWebTests('RepriceMultipleQuotes', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('DocumentGeneration', ['JShint'], function () {
  executeWebTests('DocumentGeneration', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('usageImport', ['JShint'], function () {
  executeWebTests('usageImport', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('SalesAdminTests', ['JShint'], function () {
  executeWebTests('SalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});
/*For Chrome*/
gulp.task('Sprague-Regression-SalesAdmin', ['JShint'], function () {
  executeWebTests('customerSalesAdminTests,basisCurvesTests,basisRecipesTests,accountsSalesAdminTests,accountImportSalesAdminTests,nomGroupImportSalesAdminTests,ediReviewSalesAdminTests,ediRequestSalesAdminTests,ediHistorySalesAdminTests,ediTransactionTypeSalesAdminTests,nomAnalysisQueueSalesAdminTests,selectNomGroupSalesAdminTests,customerPerformanceSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-Regression-SalesRep', ['JShint'], function () {
  executeWebTests('capacityManagementTests,myQuotesSalesRepTests,customerSalesRepTests,accountsSalesRepTests,accountImportSalesRepTests,usageSalesRepTests,ediHistorySalesRepTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-CapacityManagement-Chrome', ['JShint'], function () {
  executeWebTests('capacityManagementTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-BasisCurves-Chrome', ['JShint'], function () {
  executeWebTests('basisCurvesTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-BasisRecipes-Chrome', ['JShint'], function () {
  executeWebTests('basisRecipesTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-References-Chrome', ['JShint'], function () {
  executeWebTests('referencesTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-MyQuotes-SalesRep', ['JShint'], function () {
  executeWebTests('myQuotesSalesRepTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-MyQuotes-SalesAdmin', ['JShint'], function () {
  executeWebTests('myQuotesSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});
gulp.task('Sprague-MyQuotes-DealEntry', ['JShint'], function () {
  executeWebTests('myQuotesDealEntryTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-Customer-SalesRep', ['JShint'], function () {
  executeWebTests('customerSalesRepTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-Customer-SalesAdmin', ['JShint'], function () {
  executeWebTests('customerSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-Accounts-SalesRep', ['JShint'], function () {
  executeWebTests('accountsSalesRepTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-Accounts-SalesAdmin', ['JShint'], function () {
  executeWebTests('accountsSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-Account-Import-SalesRep', ['JShint'], function () {
  executeWebTests('accountImportSalesRepTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-Account-Import-SalesAdmin', ['JShint'], function () {
  executeWebTests('accountImportSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-Usage-SalesRep', ['JShint'], function () {
  executeWebTests('usageSalesRepTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-NOM-Group-SalesAdmin', ['JShint'], function () {
  executeWebTests('selectNomGroupSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-Account-Usage', ['JShint'], function () {
  executeWebTests('accountUsageTest', 'SPRAGUE_NATURAL_GAS')
});

gulp.task('Sprague-NOM-Group-Import-SalesAdmin', ['JShint'], function () {
  executeWebTests('nomGroupImportSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-NOM-Analysis-Queue-SalesAdmin', ['JShint'], function () {
  executeWebTests('nomAnalysisQueueSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-CPR-SalesAdmin', ['JShint'], function () {
  executeWebTests('customerPerformanceSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-EDI-Request-SalesAdmin', ['JShint'], function () {
  executeWebTests('ediRequestSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-EDI-History-SalesRep', ['JShint'], function () {
  executeWebTests('ediHistorySalesRepTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-EDI-History-SalesAdmin', ['JShint'], function () {
  executeWebTests('ediHistorySalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-EDI-Review-SalesAdmin', ['JShint'], function () {
  executeWebTests('ediReviewSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-EDI-Transaction-Type-SalesAdmin', ['JShint'], function () {
  executeWebTests('ediTransactionTypeSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

/*For Internet Explorer*/
gulp.task('Sprague-Regression-SalesAdmin-IE', ['JShint'], function () {
  executeIEWebTests('capacityManagementTests,customerSalesAdminTests,accountsSalesAdminTests,accountImportSalesAdminTests,nomGroupImportSalesAdminTests,ediReviewSalesAdminTests,ediRequestSalesAdminTests,ediHistorySalesAdminTests,ediTransactionTypeSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});
gulp.task('Sprague-Regression-SalesRep-IE', ['JShint'], function () {
  executeIEWebTests('capacityManagementTests,customerSalesRepTests,accountsSalesRepTests,accountImportSalesRepTests,usageSalesRepTests,customerPerformanceSalesRepTests,ediHistorySalesRepTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-CapacityManagement-IE', ['JShint'], function () {
  executeIEWebTests('capacityManagementTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-BasisCurves-IE', ['JShint'], function () {
  executeIEWebTests('basisCurvesTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-BasisRecipes-IE', ['JShint'], function () {
  executeIEWebTests('basisRecipesTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-References-IE', ['JShint'], function () {
  executeIEWebTests('referencesTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-MyQuotes-SalesRep-IE', ['JShint'], function () {
  executeIEWebTests('myQuotesSalesRepTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-MyQuotes-SalesAdmin-IE', ['JShint'], function () {
  executeIEWebTests('myQuotesSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-Custom-IE', ['JShint'], function () {
  executeIEWebTests('customTest', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-Customer-SalesRep-IE', ['JShint'], function () {
  executeIEWebTests('customerSalesRepTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-Customer-SalesAdmin-IE', ['JShint'], function () {
  executeIEWebTests('customerSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-Accounts-SalesRep-IE', ['JShint'], function () {
  executeIEWebTests('accountsSalesRepTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-Accounts-SalesAdmin-IE', ['JShint'], function () {
  executeIEWebTests('accountsSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-Account-Import-SalesRep-IE', ['JShint'], function () {
  executeIEWebTests('accountImportSalesRepTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-Account-Import-SalesAdmin-IE', ['JShint'], function () {
  executeIEWebTests('accountImportSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-Usage-SalesRep-IE', ['JShint'], function () {
  executeIEWebTests('usageSalesRepTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-NOM-Group-SalesAdmin-IE', ['JShint'], function () {
  executeIEWebTests('selectNomGroupSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-NOM-Group-Import-SalesAdmin-IE', ['JShint'], function () {
  executeIEWebTests('nomGroupImportSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-NOM-Analysis-Queue-SalesAdmin-IE', ['JShint'], function () {
  executeIEWebTests('nomAnalysisQueueSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-CPR-SalesRep-IE', ['JShint'], function () {
  executeIEWebTests('customerPerformanceSalesRepTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-EDI-Request-SalesAdmin-IE', ['JShint'], function () {
  executeIEWebTests('ediRequestSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-EDI-History-SalesRep-IE', ['JShint'], function () {
  executeIEWebTests('ediHistorySalesRepTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-EDI-History-SalesAdmin-IE', ['JShint'], function () {
  executeIEWebTests('ediHistorySalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('Sprague-EDI-Review-SalesAdmin-IE', ['JShint'], function () {
  executeIEWebTests('ediReviewSalesAdminTests', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('googleTest', ['JShint'], function () {
  executeIEWebTests('googleTest', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('JShint', function () {
  gulp.src(['**/*.json', '!node_modules/**/*.*', '!JasmineResult/**/*.*', 'conf.js', 'gulpfile.js', 'library/actionLibrary.js', 'utils/logger.js', 'package.json'])
    .pipe(jshint());
});