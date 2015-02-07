function drawTable() {
	document.write('<table><tbody>');
	for (var i = 0; i < 6; i++) {
		document.write('<tr>');
		for (var a = 0; a < 6; a++) {
			document.write('<td id="middle_cell_' + i + '_' + a
					+ '" class="middle_cell">middle_cell_' + i + '_' + a
					+ '</td>');
			if (a != 5) {
				document.write('<td id="upper_cell_wrap_' + i + '_' + a
						+ '" class="upper_cell_wrap">upper_cell_wrap_' + i
						+ '_' + a + '</td>');
			}
		}
		document.write('</tr>');
		if (i != 5) {
			document.write('<tr>');
			for (var b = 0; b < 6; b++) {
				document.write('<td id="left_cell_wrap_' + i + '_' + b
						+ '" class="left_cell_wrap">left_cell_wrap_' + i + '_'
						+ b + '</td>');
				if (b != 5) {
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