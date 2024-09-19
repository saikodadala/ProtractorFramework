/*jslint node: true, stupid: true*/
/*global jasmine2, jasmine, browser, by, requireUtils, $   */
'use strict';
var jasminePtor = require('./library/jasminePtorFailfast');
var CSV_Processor = require('./library/CSV_Processor');
var basePath = __dirname,
  today = new Date(),
  fs = require('fs'),
  os = require('os'),
  osName = require('os-name'),
  path = require('path'),
  PageObjectsPath = basePath + '/pageObjects/',
  testDataObjectsPath = basePath + '/testDataObjects/';
global.new_suite = true;
global.LOGLEVEL = 'DEBUG';
global.quitOnFailure = false;
global.current_TestCase = "";
global.current_Suite = "";
global.suite_To_Be_Executed = "Demo Suite";
global.csvProcessor = new CSV_Processor();
global.captureScreenshotsForAllSteps = false;
global.serviceLocation = '';
global.cashOutInfo = '';
global.detailedAverage = '';




global.downloadsPath = path.resolve(basePath, './downloads');
var dbConfig = {
  server: "qangdb01",
  database: "NatGas",
  user: "NatGas",
  password: "5pr!ng14",
  port: 1433
};



exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  framework: 'jasmine2',
  //rootElement: "",
  // capabilities: {
  //     'browserName': 'internet explorer',
  //     'platform': 'Windows',
  //     'version': '11'-MyQuotes
  // },

  multiCapabilities: [
  {
    'browserName': 'chrome',
    'platform': 'ANY',
    'version': 'ANY',
    'chromeOptions': {
      //  args: ['--headless', '--window-size=1920,1080'],
      prefs: {
        'download': {
          'default_directory': downloadsPath
        },
        'safebrowsing': {
          'enabled': true,
        }
      }
    }
  },
  ],

  //  jvmArgs: ['-Dwebdriver.ie.driver=../webdriver-manager/selenium/IEDriverServer_Win32_2.53.1.exe'],
  suites: {    
    googleTest: ['testCases/googleSearch/*.js']
    


  },
  // A callback function called once configs are read but before any environment
  // setup. This will only run once, and before onPrepare.

  // You can specify a file containing code to run by setting beforeLaunch to
  // the filename string.
  beforeLaunch: function () {
    // At this point, global variable 'protractor' object will NOT be set up,
    // and globals from the test framework will NOT be available. The main
    // purpose of this function should be to bring up test dependencies.
    console.log("BEFORE LAUNCH");
    global.csvProcessor.initialize(testDataObjectsPath + 'testData.csv');
    global.csvProcessor.readDatafromFile(function (data) {
      global.csvProcessor.initData(data);
    });
  },
  // A callback function called once configs are read but before any environment
  // setup. This will only run once, and before onPrepare.
  // You can specify a file containing code to run by setting beforeLaunch to
  // the filename string.
  onPrepare: function () {

    /**
     * global parameter declarations
     */
    browser.ignoreSynchronization = false;

    var disableNgAnimate = function () {
      angular
        .module('disableNgAnimate', [])
        .run(['$animate', function ($animate) {
          $animate.enabled(false);
        }]);
    };

    var disableCssAnimate = function () {
      angular
        .module('disableCssAnimate', [])
        .run(function () {
          var style = document.createElement('style');
          style.type = 'text/css';
          style.innerHTML = '* {' +
            '-webkit-transition: none !important;' +
            '-moz-transition: none !important' +
            '-o-transition: none !important' +
            '-ms-transition: none !important' +
            'transition: none !important' +
            '}';
          document.getElementsByTagName('head')[0].appendChild(style);
        });
    };
    browser.addMockModule('disableNgAnimate', disableNgAnimate);
    browser.addMockModule('disableCssAnimate', disableCssAnimate);

    global.requirePage = function (relativePath) {
      if (fs.existsSync(PageObjectsPath + relativePath + '.js')) {
        return require(PageObjectsPath + relativePath + '.js');
      }
;
    };

    global.requireData = function (relativePath) {
      if (fs.existsSync(testDataObjectsPath + relativePath + '.json')) {
        return require(testDataObjectsPath + relativePath + '.json');
      }
    };
    global.requireLibrary = function (relativePath) {
      return require(basePath + '/library/' + relativePath + '.js');
    };

    global.requireUtils = function (relativePath) {
      return require(basePath + '/utils/' + relativePath + '.js');
    };

    global.currentTimeStamp = function () {
      var today = new Date();
      var timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'H_' + today.getMinutes() + 'M_' + today.getSeconds() + 'S';
      return timeStamp;
    };

    global.commonFunctions = requireLibrary('common');
    global.reporter = requireLibrary('reporter');
    global.actions = requireLibrary('actionLibrary');
    global.genericData = requireData('genericData');
    global.current_Suite = browser.params.SUITENAME;
    global.suite_To_Be_Executed = browser.params.SUITENAME;
    global.AppURL = 'https://angular.io/';
    browser.driver.manage().window().maximize();    
    browser.manage().timeouts().pageLoadTimeout(180000);
    browser.manage().deleteAllCookies();
    params: {
      APPNAME: ''
      SUITENAME: ''
    }
    global.APPNAME = browser.params.APPNAME;
    global.SUITENAME = browser.params.SUITENAME;
    global.TIMESTAMP = (today.getMonth() + 1) + '' + today.getDate() + '' + today.getHours() + '' + today.getMinutes() + '' + today.getSeconds();

   

    global.currentTimeStampDiff = function () {
      var today = new Date();
      var twoDigitMonth = ((today.getMonth() + 1) >= 10) ? (today.getMonth() + 1) : '0' + (today.getMonth() + 1);
      var twoDigitDate = ((today.getDate()) >= 10) ? (today.getDate()) : '0' + (today.getDate());
      var twoDigitHour = ((today.getHours()) >= 10) ? (today.getHours()) : '0' + (today.getHours());
      var twoDigitMins = ((today.getMinutes()) >= 10) ? (today.getMinutes()) : '0' + (today.getMinutes());
      var twoDigitSecs = ((today.getSeconds()) >= 10) ? (today.getSeconds()) : '0' + (today.getSeconds());
      var threeDigitMilliSecs = ((today.getMilliseconds()) >= 100) ? (today.getMilliseconds()) : ((today.getSeconds()) >= 10) ? '0' + (today.getSeconds()) : '00' + (today.getSeconds());
      var timeStamp = twoDigitDate + '-' + twoDigitMonth + '-' + today.getFullYear() + ' ' + twoDigitHour + ':' + twoDigitMins + ':' + twoDigitSecs + ':' + threeDigitMilliSecs;
      return timeStamp;
    };

    global.STARTED_TIMESTAMP = global.currentTimeStampDiff();
    global.appLogger = requireUtils('logger');
    global.REPORT_DIR = basePath + '/results/JasmineReport/' + global.SUITENAME + '-' + global.TIMESTAMP + '/';
    global.GALLOP_REPORT_DIR = basePath + '/results/CignitiReport/' + global.SUITENAME + '-' + global.TIMESTAMP + '/';

    var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter'),
      ScreenShotReporter = require('protractor-jasmine2-screenshot-reporter'),
      jasmineReporters = require('jasmine-reporters'),
      SpecReporter = require('jasmine-spec-reporter');
    require('fs').mkdir(REPORT_DIR, function () {
      console.log("Results directory created!");
    });
    require('fs').mkdir(GALLOP_REPORT_DIR, function () {
      console.log("Results directory created!");
    });

 
    jasmine.getEnv().addReporter(new jasminePtor().launch());
    browser.driver.getCapabilities().then(function (caps) {
      global.browserName = caps.get('browserName');
      global.BROWSER_TO_BE_EXECUTED = global.browserName.toUpperCase();     
      global.platform = osName(os.platform(), os.release());
      reporter.reportInitialization();
    });


    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: global.REPORT_DIR,
      firePrefix: 'xmloutput'
    }));

    jasmine.getEnv().addReporter(new ScreenShotReporter({
      dest: global.REPORT_DIR + 'Screenshots',
      reportTitle: null
    }));

    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      savePath: global.REPORT_DIR,
      screenshotsFolder: 'Screenshots',
      takeScreenshots: true,
      takeScreenshotsOnlyOnFailures: false,
      filePrefix: global.SUITENAME + '-AutomationReport'
    }));
    global.Wait = function (interval) {
      var int = interval * 1000;
      browser.sleep(int);
    };
    global.Double_Wait = function () {
      var int = 20 * 1000;
      browser.sleep(int);
    };
    global.Long_Wait = function () {
      var int = 9 * 1000;
      browser.sleep(int);
    };
    global.Medium_Wait = function () {
      var int = 6 * 1000;
      browser.sleep(int);
    };
    global.Short_Wait = function () {
      var int = 3 * 500;
      browser.sleep(int);
    };

     browser.getWindowHandle().then(function (val) {
      global.winHandle = val;
    });
  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 580000,
    isVerbose: true,
    stopOnFailure: false,
  },

  allScriptsTimeout: 900000,
  // A callback function called once tests are finished.
  onComplete: function () {
 
    global.FINISHED_TIMESTAMP = global.currentTimeStampDiff();
    console.log("ON COMPLETE");
    var win = global.winHandle.substring(9, parseInt(global.winHandle.length));
    reporter.generateSubReport('TS_' + win);
    console.log("END - ON COMPLETE");
  },
  // A callback function called once all tests have finished running and
  // the WebDriver instance has been shut down. It is passed the exit code
  // (0 if the tests passed). This is called only once before the program
  // exits (after onCleanUp).
  afterLaunch: function () {
    console.log("AFTER LAUNCH");
    return new Promise(function (resolve, reject) {
      global.reporter.generateHtmlReport();
    });
    console.log("END AFTER LAUNCH");
  },
  resultJsonOutputFile: './../../results/CignitiReport/report_assets/results_output.json'
};