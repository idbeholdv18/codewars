export function generateMarkdownReport(results: any[]): string {
  let markdownTable = `
## Benchmark Results - ${new Date().toLocaleString()}
| Name                   | Hz (ops/sec) | Margin (%) | Runs | Mean Time (ms) | Deviation (ms) |
|------------------------|--------------|------------|------|-----------------|----------------|
`;

  results.forEach(result => {
    const isFastest = result.hz === results[0].hz ? "**" : "";
    markdownTable += `|${ isFastest }${ result.name }${ isFastest ? "**" : "" }|${ result.hz }|${ result.margin }|${ result.runs }|${ result.mean }|${ result.deviation }|\n`;
  });

  markdownTable += '\n\n';

  return markdownTable;
}