function drawTable(fieldSize) {
	document.write('<table><tbody>');
	for (var i = 0; i < fieldSize; i++) {
		document.write('<tr>');
		for (var a = 0; a < fieldSize; a++) {
			document.write('<td id="middle_cell_' + i + '_' + a
					+ '" class="middle_cell">middle_cell_' + i + '_' + a
					+ '</td>');
			if (a != fieldSize -1) {
				document.write('<td id="upper_cell_wrap_' + i + '_' + a
						+ '" class="upper_cell_wrap">upper_cell_wrap_' + i
						+ '_' + a + '</td>');
			}
		}
		document.write('</tr>');
		if (i != fieldSize -1) {
			document.write('<tr>');
			for (var b = 0; b < fieldSize; b++) {
				document.write('<td id="left_cell_wrap_' + i + '_' + b
						+ '" class="left_cell_wrap">left_cell_wrap_' + i + '_'
						+ b + '</td>');
				if (b != fieldSize -1) {
					document.write('<td id="main_cell_' + i + '_' + b
							+ '" class="main_cell">main_cell_' + i + '_' + b
							+ '</td>');
				}
			}
			document.write('</tr>');
		}
	}
	document.write('<tr></tr>');
	document.write('</tbody></table>');
}