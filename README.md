# Tech Against Fascism

## Mapping Tech Regime Fascism

### warum ist Big Tech faschistisch bzw. faschistoid?

- Big-Tech-Konzerne kontrollieren zentrale Infrastrukturen des gesellschaftlichen Lebens.

- Sie verfügen über enorme finanzielle Ressourcen und politischen Einfluss.

- Sie können öffentliche Kommunikation und wirtschaftliche Teilhabe durch ihre Plattformregeln beeinflussen.

- Demokratisch gewählte Institutionen haben oft Schwierigkeiten, diese Macht effektiv zu kontrollieren.

## Probleme mit Telegram

- Telegram ist standardmässig nicht Ende zu Ende verschlüsselt (Nachrichten sind serverseitig lesbar!)

- Telegram arbeitet seit einigen Jahren mit Behörden zusammen und gibt Daten an diese weiter ([link](https://cyberinsider.com/telegram-sharing-user-data-with-us-authorities/))

- Unsere Daten sind der willkürlichen Entscheidung von Alex Durov ausgeliefert

## Wieso fällt uns wechseln so schwer?

### Vendor Lock-In

- Netzwerkeffekt: Alles findet auf Telegram statt

- Datensilo: Unsere ganzen Chats/Profildaten sind dort gespeichert

- Deswegen suchen wir nach open source und (am besten) föderierten/interoperablen Services, wägen diese aber auch gegen Sicherheit ab

## Alternativen (Privat Chats)

- Die bekannteste und auch sicherste Alternative ist [Signal](https://signal.org/de/)
  - Beste Verschlüsselung (Egal wer Kontrolle über Server hat, Nachrichten + Absender:in sind nicht auslesbar)
  - hat bereits viele User:innen
  - Server ist nicht föderiert und kann von autoritären Staaten geblockt werden ([und wird es bereits](https://ooni.org/post/2021-how-signal-private-messenger-blocked-around-the-world/))

- Als Backup zu Signal kann [Delta Chat](https://delta.chat/de/) dienen ([hier ausführlicher](https://signal-contingency-plan.info/))
  - Nachrichten sind auch sehr sicher verschlüsselt
  - Dafür sind ca. die letzten 20 Tage an Kommunikation des Servers dort gespeichert (Nachrichten verschlüsselt, Metadaten nicht verschlüsselt)
  - Durch föderierte Server und einem auf email basierten Protokoll, ist es schwer bis unmöglich Delta Chat komplett zu blockieren

## Alternativen (Channels)

- Da Signal keine Untergruppen unterstützt und Gruppengrößen begrenzt sidn, hält das manche größeren Gruppen vom Wechsel ab. Dafür gibt es zwei Alternative:

- [Matrix](https://matrix.org/) 
  - ist ein föderiertes Protokoll mit e2ee
  - schon weit verbreitet, viele [Homeserver](https://servers.joinmatrix.org/) zur Auswahl z.B. auch bei magdeburg.jetzt
  - Die Burg betreibt auch einen eigenen [Matrix Server](https://matrix.burg-halle.de/#/welcome), der mit den studi Zugangsdaten benutzbar ist
  - Chat Metadaten werden an jeden Homeserver kopiert, deren User:innen teil des Channels sind (leicht auslesbar)

- [mov.im](https://movim.eu/)
  - basiert auf [xmpp](https://xmpp.org/), ist föderiert und e2e verschlüsselt
  - funktioniert ähnlich wie discord und hat ein Blogging Feature
  - ein xmpp account auf jeglichem Homeserver reicht aus um mov.im zu benutzen
  - weniger weit verbreitet und buggier, nur als webapp verfügbar
  - Dafür werden Metadaten nicht so einfach auffindbar wie bei Matrix

## Fazit Messenger

Es gibt viele offene und sichere Optionen um von Telegram fort zu kommen. Den Netzwerkeffekt können wir nur durch kollektiven Wechsel bekämpfen. 

**Vor Staatstrojanern oder direkten Zugriff aufs Handy durch andere kann uns kein Messenger schützen!** Trotzdem lohnt es sich sicherer Alternativen zu benutzen.


## Liffle FS

LittleSis ist eine Open-Source-Datenbank und Rechercheplattform, die Verflechtungen zwischen einflussreichen Personen und Organisationen aus Politik, Wirtschaft und Finanzwelt dokumentiert.

- https://littlesis.org/home

- https://littlesis.org/oligrapher/10454-complex-web-of-ai-figures 