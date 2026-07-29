# Portabler WPE-Showroom

Diese Dateien bilden die erste reale Umsetzung des digitalen Showrooms der Waschplatz-Experten auf `puntotre.de`.

## Trennung der Ebenen

- `../index.html`: schlanke semantische Seitenhülle
- `showroom.css`: vollständig namenspaced Präsentationssystem
- `showroom.js`: datenunabhängige Darstellung und Bedienung
- `showroom-data.js`: kuratorische Testdaten für `puntotre.de`

## Übernahme nach WPE

Die Präsentationsdateien erwarten `window.WPEShowroomConfig`. Bei WPE wird dieses Objekt aus den vorhandenen strukturierten Kombinationen und einer kleinen kuratorischen Zuordnung erzeugt.

Optionale Integration über `window.WPEShowroomAdapter`:

- `resolveLink(key, fallback)`
- `resolveItemLink(item)`
- `readFavorites()`
- `writeFavorites(ids)`
- `onFavorite(item, active)`

Damit kann WPE seine echten URLs, Detailseiten und die vorhandene Merkliste anbinden, ohne die Showroom-Dramaturgie neu zu bauen.

## Verbindliche Inhaltsentscheidung

Der sichtbare Absender ist Waschplatz-Experten. Puntotre wird ausschließlich innerhalb der geöffneten Produktdetails als Hersteller genannt.
