export { default as parserRouter } from "./parser.route.upload";
export {
	getDataStoreStats,
	parseCSV,
	parseJSON,
	processFile,
	processFiles,
	processFileUpload,
	scanStaticDataFolder,
	storeProcessedData,
	validateFileContent,
	validateFileType,
} from "./parser.service.process";
export type {
	CsvRow,
	EntityResult,
	FileInfo,
	ProcessedFile,
	RunContext,
} from "./parser.types";
