import fs from "fs";

export function saveReportToFile(report: string, filePath: string): void {
  fs.writeFileSync(filePath, report);
}