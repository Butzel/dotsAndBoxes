// Globale Variablen

// Anzahl der benutzten Balken auf den Startwert 0 setzen
var usedCellsPlayerOne = 0;
// Anzahl der erzielten Punkte auf den Startwert 0 setzen
var gainedPointsPlayerOne = 0;


// Funktion zur dynamischen Erzeugung des Spielfelds
function drawField(fieldSize) {

	// Spielerauswertung ausgeben
	document.write('<p><table><tbody>');
	document.write('<tr>');
	document.write('<td>Gesetzte Steine Spieler 1:</td>');
	document.write('<td id=usedCellsPlayerOne></td>');
	document.write('</tr>');
	document.write('<tr>');
	document.write('<td>Erzielte Punkte Spieler 1:</td>');
	document.write('<td id=gainedPointsPlayerOne></td>');
	document.write('</tr>');
	document.write('</tbody></table></p>');
	
	// Erstmaliges Ändern der verwendeten Spielersteine bei usedCellsPlayerOne = 0
	document.getElementById('usedCellsPlayerOne').innerText = usedCellsPlayerOne;
	
	// Erstmaliges Ändern der erzielten Punkte bei gainedPointsPlayerOne = 0
	document.getElementById('gainedPointsPlayerOne').innerText = gainedPointsPlayerOne;
	
	// fieldSize von vorne herein um 1 erhöhen, damit die letzte untere
	// und die letzte linke Reihe mit Zellen befüllt werden kann.
	fieldSize++;
	
	// Spielfeld zeichnen und Ids der Zellen festlegen
	document.write('<table class="gameField"><tbody>');
	for (var i = 0; i < fieldSize; i++) {
		document.write('<tr>');
		for (var a = 0; a < fieldSize; a++) {
			document.write('<td id="middle_cell_' + i + '_' + a
					+ '" class="middle_cell"></td>');
			if (a != fieldSize - 1) {
				upperCellId = 'upper_cell_wrap_' + i + '_' + a;
				document.write('<td id="upper_cell_wrap_' + i + '_' + a
						+ '" class="upper_cell_wrap" onClick="setMark(\'' + upperCellId + '\')"></td>');
			}
		}
		document.write('</tr>');
		if (i != fieldSize - 1) {
			document.write('<tr>');
			for (var b = 0; b < fieldSize; b++) {
				leftCellId = 'left_cell_wrap_' + i + '_' + b;
				document.write('<td id="left_cell_wrap_' + i + '_' + b
						+ '" class="left_cell_wrap" onClick="setMark(\'' + leftCellId + '\')"></td>');
				if (b != fieldSize - 1) {
					document.write('<td id="main_cell_' + i + '_' + b
							+ '" class="main_cell""></td>');
				}
			}
			document.write('</tr>');
		}
	}
	document.write('<tr></tr>');
	document.write('</tbody></table>');
}

// Funktion zum setzen der Farben der Zellen

function setMark(cellId) {

	// Auslesen der aktuellen Stylesheet-Klasse
	var cellClass = document.getElementById(cellId).className;
	
	// Es wird geprüft welche Klasse zugewiesen ist.
	// Bei einem unbenutzten Balken wird die Klasse gesetzt, 
	// die ihn als einen vom Spieler benutzten Balken ausweist.
	// Außerdem wird die Anzahl der benutzen Balken um eins erhöht.
	switch(cellClass) {
		case 'left_cell_wrap':
			document.getElementById(cellId).className = 'left_cell_wrap_used_player_one';
			usedCellsPlayerOne++;
			checkPoints();
			break;
		case 'upper_cell_wrap':
			document.getElementById(cellId).className = 'upper_cell_wrap_used_player_one';
			usedCellsPlayerOne++;
			checkPoints();
			break;
	}
	
	// Regelmäßige Ausgabe der vom Spieler verwendeten Steine
	document.getElementById('usedCellsPlayerOne').innerText = usedCellsPlayerOne;
}

// Wurden durch das Setzen des Steins punkte erzielt?
function gainedPoints() {
}