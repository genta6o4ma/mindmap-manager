const PHASE = {
  NEWMAP: 0, // => Revise soon
  REVISED: 1, // => Review After 24 hours
  REVIEWONCE: 2, // => Review After 7 days
  REVIEWTWICE: 3, // => Review After 1 months
  REVIEW3TIMES: 4, // => Review After 6 months
  REVIEWCOMPLETE: 5,
  WONTREVIEW: 99
};
Object.freeze(PHASE);

const main = () => {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('mindmaps');

  const mindmapsColName = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues();
  const mindmapsRecords = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn());

  const mapvalues = mindmaps.getValues();

  for(let i = 0; i < mapvalues.length; i++) {
    for(let j = 0; j < mapvalues[i].length; j++) {
      console.log(mindmapsColName[0][j] + ": " + mapvalues[i][j]);
    }
  }
};
