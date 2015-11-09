function doGet() {
  return HtmlService
      .createTemplateFromFile('index')
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

// the google spreadsheet ID you want to use as source for the carousel
// to find the ID, look at the URL of the google doc
var gsheetID = "YOURGOOGLESHEETID";

//The columns in your google spreadsheet

//Column for the comments displayed
var commentsCol = "C";

//Column for the star rating displayed (1 to 5 values)
var starsCol = "I";

//Column for additional information (e.g. enrolments)
var enrolmentCol = "B";

// Get data from the google spreadsheet
function getData(){
  var sheet = SpreadsheetApp.openById(gsheetID).getSheets()[0];
  return sheet.getRange(commentsCol+"2:"+commentsCol+"770").getValues();
}

function getRatings(){
  var sheet = SpreadsheetApp.openById(gsheetID).getSheets()[0];
  return sheet.getRange(starsCol+"2:"+starsCol+"770").getValues();
}

function getEnrolment(){
  var sheet = SpreadsheetApp.openById(gsheetID).getSheets()[0];
  return sheet.getRange(enrolmentCol+"2:"+enrolmentCol+"770").getValues();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .getContent();
}