// Globale Variablen

// Anzahl der benutzten Balken auf den Startwert 0 setzen
var usedCellsPlayerOne = 0;
// Anzahl der erzielten Punkte auf den Startwert 0 setzen
var gainedPointsPlayerOne = 0;
// Initial den aktuellen Spieler auf playerOne setzen.
var actualPlayer = 'playerOne';

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

	// Erstmaliges Ändern der verwendeten Spielersteine bei usedCellsPlayerOne=0
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
			document.write('<td id="centerCell_' + i + '_' + a	+ '" class="centerCell"></td>');
			if (a != fieldSize - 1) {
				upperCellId = 'upperCellWrap_' + i + '_' + a;
				document.write('<td id="upperCellWrap_'	+ i	+ '_' + a + '" class="upperCellWrap" onClick="setMarkPlayerOne(\'' + upperCellId + '\')"></td>');
			}
		}
		document.write('</tr>');
		if (i != fieldSize - 1) {
			document.write('<tr>');
			for (var b = 0; b < fieldSize; b++) {
				leftCellId = 'leftCellWrap_' + i + '_' + b;
				document.write('<td id="leftCellWrap_' + i + '_' + b + '" class="leftCellWrap" onClick="setMarkPlayerOne(\'' + leftCellId + '\')"></td>');
				if (b != fieldSize - 1) {
					document.write('<td id="mainCell_' + i + '_' + b + '" class="mainCell"">mainCell_' + i + '_' + b + '</td>');
				}
			}
			document.write('</tr>');
		}
	}
	document.write('<tr></tr>');
	document.write('</tbody></table>');
}

// Funktion zum setzen der Farben der Zellen

function setMarkPlayerOne(cellId) {

	// Auslesen der aktuellen Stylesheet-Klasse
	var cellClass = document.getElementById(cellId).className;

	// Es wird geprüft welche Klasse zugewiesen ist.
	// Bei einem unbenutzten Balken wird die Klasse gesetzt,
	// die ihn als einen vom Spieler benutzten Balken ausweist.
	// Außerdem wird die Anzahl der benutzen Balken um eins erhöht.
	switch (cellClass) {
	case 'leftCellWrap':
		document.getElementById(cellId).className = 'leftCellWrapUsedPlayerOne';
		gainedPoints(cellId);
		break;
	case 'upperCellWrap':
		document.getElementById(cellId).className = 'upperCellWrapUsedPlayerOne';
		gainedPoints(cellId);
		break;
	}
}

// Wurden durch das Setzen des Steins Punkte erzielt?
function gainedPoints(cellId) {

	// Die Anzahl der verwendeten Stein um Eins erhöhen
	usedCellsPlayerOne++;

	// Ausgabe der vom Spieler verwendeten Steine
	document.getElementById('usedCellsPlayerOne').innerText = usedCellsPlayerOne;
}