// https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options

const { spawn } = require('child_process');

module.exports = (params) => {
	const { password, inputFilePath, outputFilePath } = params;
	const qpdf = spawn('qpdf', [`--password=${password}`, '--decrypt', inputFilePath, outputFilePath]);

	qpdf.stderr.on('data', data => {
		throw new Error(data.toString());
	});
};
