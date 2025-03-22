import fs from "fs";

export function saveReportToFile(markdownReport: string, reportPath: string): void {
  fs.appendFileSync(reportPath, markdownReport, "utf8");
}